import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/lib/cartContext";
import CartSidebar from "@/components/cart/CartSidebar";
import { toast } from "@/components/ui/use-toast";

const coupons = [
  { code: "WELCOME20", discount: 20, description: "Get 20% off on your first order" },
  { code: "SUMMER15", discount: 15, description: "Summer special 15% off" },
  { code: "FRESH10", discount: 10, description: "10% off on fresh produce" },
  { code: "BULK25", discount: 25, description: "25% off on bulk orders" },
];

const Checkout = () => {
  const { items, totalPrice } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<typeof coupons[0] | null>(null);

  const handleApplyCoupon = () => {
    const coupon = coupons.find(c => c.code === couponCode.toUpperCase());
    if (coupon) {
      setAppliedCoupon(coupon);
      toast({
        title: "Coupon applied!",
        description: `You got ${coupon.discount}% off your order`,
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "Please check the coupon code and try again",
        variant: "destructive",
      });
    }
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    return (totalPrice * appliedCoupon.discount) / 100;
  };

  const finalPrice = totalPrice - calculateDiscount();

  return (
    <>
      <Navbar />
      <main className="container-custom py-8">
        <div className="mb-6">
          <Link to="/cart" className="text-qgreen-600 hover:text-qgreen-700 flex items-center">
            ← Back to cart
          </Link>
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Checkout</h1>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-4 order-2 md:order-1">
            <div className="bg-white rounded-xl border p-6 sticky top-20">
              <h2 className="font-semibold text-xl text-gray-800 mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.quantity} × {item.product.name}
                    </span>
                    <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t my-4"></div>

              {/* Coupon Section */}
              <div className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 p-2 border rounded-md"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button 
                    onClick={handleApplyCoupon}
                    className="bg-qgreen-500 hover:bg-qgreen-600"
                  >
                    Apply
                  </Button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 text-sm text-qgreen-600">
                    Applied: {appliedCoupon.code} ({appliedCoupon.discount}% off)
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-qgreen-600">
                    <span>Discount ({appliedCoupon.discount}%)</span>
                    <span>-${calculateDiscount().toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">$0.00</span>
                </div>
              </div>
              
              <div className="border-t my-4"></div>
              
              <div className="flex justify-between py-2 font-semibold text-lg">
                <span>Total</span>
                <span>${finalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="md:col-span-8 order-1 md:order-2">
            <div className="bg-white rounded-xl border p-6">
              <h2 className="font-semibold text-xl text-gray-800 mb-4">Delivery Information</h2>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Delivery Address</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={3}
                    placeholder="Enter your full address"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Delivery Instructions (optional)</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={2}
                    placeholder="Any special instructions for delivery"
                  ></textarea>
                </div>
              </form>
              
              <div className="mt-8">
                <h2 className="font-semibold text-xl text-gray-800 mb-4">Payment Method</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center p-3 border rounded-md">
                    <input type="radio" id="cashOnDelivery" name="paymentMethod" checked />
                    <label htmlFor="cashOnDelivery" className="ml-2">Cash on Delivery</label>
                  </div>
                  
                  <div className="flex items-center p-3 border rounded-md bg-gray-100">
                    <input type="radio" id="creditCard" name="paymentMethod" disabled />
                    <label htmlFor="creditCard" className="ml-2 text-gray-500">Credit Card (Coming Soon)</label>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-qgreen-500 hover:bg-qgreen-600 py-6 text-lg">
                  Place Order
                </Button>
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

export default Checkout;
