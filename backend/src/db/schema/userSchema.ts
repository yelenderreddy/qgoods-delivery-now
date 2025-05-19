import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const userDetails = pgTable("userDetails", {
  userId: serial("userId").primaryKey().notNull(),
  userName: varchar("userName", { length: 255 }).notNull(),
  userEmail: varchar("userEmail", { length: 255 }).notNull(),
  userMobileNumber: varchar("userMobileNumber", { length: 20 }).notNull(), // mobile number as string
  userPassword: varchar("userPassword", { length: 255 }).notNull(),
  userDefaultDeliveryAddress: varchar("userDefaultDeliveryAddress", { length: 255 }),
});
