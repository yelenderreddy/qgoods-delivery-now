
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/lib/cartContext";
import { Plus, Minus, ShoppingBag, ChevronLeft } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />
      <main className="container-custom py-8">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/" className="flex items-center">
            <ChevronLeft size={16} className="mr-1" />
            Continue Shopping
          </Link>
        </Button>

        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild>
              <Link to="/">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-xl p-4 border flex items-center"
                >
                  <div className="flex-shrink-0 w-24 h-24">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-lg text-gray-800">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      ${item.product.price.toFixed(2)} / {item.product.unit}
                    </p>
                  </div>
                  <div className="flex items-center border rounded-full mx-4">
                    <button
                      type="button"
                      className="p-2 text-gray-600 hover:text-gray-900"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 text-gray-800">{item.quantity}</span>
                    <button
                      type="button"
                      className="p-2 text-gray-600 hover:text-gray-900"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 mb-1">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      type="button"
                      className="text-sm text-red-600 hover:text-red-500"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white rounded-xl border p-6 sticky top-20">
                <h2 className="font-semibold text-xl text-gray-800 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 border-b pb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                </div>
                <div className="flex justify-between py-4 font-semibold text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <Button 
                  className="w-full bg-qgreen-500 hover:bg-qgreen-600 mt-4" 
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Free delivery on orders over $20
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
