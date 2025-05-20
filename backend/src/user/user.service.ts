import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/db/db.connection.ts/db.connect';
import { userDetails } from 'src/db/schema/userSchema';
import * as crypto from 'crypto';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserService {
  private readonly encryptionKey = "12345678901234567890123456789012"; // 32 bytes key
  private readonly iv = "1234567890123456"; // 16 bytes IV

  private encryptPassword(password: string): string {
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(this.encryptionKey),
      Buffer.from(this.iv),
    );
    let encrypted = cipher.update(password, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString("hex");
  }

  private decryptPassword(encryptedPassword: string): string {
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      Buffer.from(this.encryptionKey),
      Buffer.from(this.iv),
    );
    let decrypted = decipher.update(Buffer.from(encryptedPassword, "hex"));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString('utf8');
  }

  async createUser(
    name: string,
    email: string,
    mobileNumber: string,
    password: string,
    defaultDeliveryAddress?: string
  ): Promise<{
    statusCode: string;
    message: string;
    data: any;
  }> {
    try {
      const encryptedPassword = this.encryptPassword(password);

      const newUser = await db
        .insert(userDetails)
        .values({
          userName: name,
          userEmail: email,
          userMobileNumber: mobileNumber,
          userPassword: encryptedPassword,
          userDefaultDeliveryAddress: defaultDeliveryAddress,
        })
        .returning();

      return {
        statusCode: '201',
        message: 'User created successfully',
        data: newUser[0],
      };
    }catch (error) {
  console.error('Failed to create user:', error);
  throw new InternalServerErrorException('Failed to create user');
}
  }


  async loginUser(email: string, password: string): Promise<{
    statusCode: string;
    message: string;
    data?: any;
  }> {
    try {
      // Find user by email
      const users = await db
        .select()
        .from(userDetails)
        .where(eq(userDetails.userEmail, email));
  
      if (users.length === 0) {
        return {
          statusCode: '404',
          message: 'User not found',
        };
      }
  
      const user = users[0];
  
      // Decrypt stored password
      const decryptedPassword = this.decryptPassword(user.userPassword);
  
      // Compare passwords
      if (decryptedPassword !== password) {
        return {
          statusCode: '401',
          message: 'Invalid credentials',
        };
      }
  
      // Success - return user data (omit password)
      const { userPassword, ...userWithoutPassword } = user;
  
      return {
        statusCode: '200',
        message: 'Login successful',
        data: userWithoutPassword,
      };
    } catch (error) {
      console.error('Failed to login user:', error);
      throw new InternalServerErrorException('Failed to login user');
    }
  }



 
}
