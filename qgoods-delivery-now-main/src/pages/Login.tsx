
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("user@qgoods.com");
  const [password, setPassword] = useState("UserPass123");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple demo authentication
    setTimeout(() => {
      if (email === "admin@qgoods.com" && password === "AdminPass123") {
        toast({
          title: "Admin login successful",
          description: "Welcome to the admin dashboard",
        });
        navigate("/admin");
      } else if (email === "user@qgoods.com" && password === "UserPass123") {
        toast({
          title: "Login successful",
          description: "Welcome back to QGoods",
        });
        navigate("/");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-gray-600 mt-2">
              Welcome back! Please enter your details.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-qgreen-600 hover:text-qgreen-700">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-qgreen-500 hover:bg-qgreen-600"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-qgreen-600 hover:text-qgreen-700 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
            
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                Google
              </Button>
              <Button variant="outline" className="w-full">
                Facebook
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>For demo purposes:</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-white p-3 rounded border">
                <p className="font-medium text-gray-700">Customer</p>
                <p>Email: user@qgoods.com</p>
                <p>Password: UserPass123</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="font-medium text-gray-700">Store Admin</p>
                <p>Email: admin@qgoods.com</p>
                <p>Password: AdminPass123</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
};

export default Login;
