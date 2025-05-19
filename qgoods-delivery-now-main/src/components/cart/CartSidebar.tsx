
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cartContext";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";

const CartSidebar = () => {
  const { 
    isOpen, 
    closeCart, 
    items, 
    totalPrice, 
    updateQuantity, 
    removeFromCart,
    itemCount
  } = useCart();
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div 
        className="absolute inset-0"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold text-lg flex items-center">
              <ShoppingBag size={20} className="mr-2" />
              Your Cart 
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </span>
            </h2>
            <Button variant="ghost" size="sm" onClick={closeCart} className="rounded-full h-8 w-8 p-0">
              <X size={20} />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-auto py-4 px-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <ShoppingBag size={64} className="text-gray-300 mb-3" />
                <h3 className="font-medium text-lg text-gray-800">Your cart is empty</h3>
                <p className="text-gray-500 mt-2 mb-6">Start shopping to add items to your cart</p>
                <Button onClick={closeCart}>Continue Shopping</Button>
              </div>
            ) : (
              <ul className="divide-y">
                {items.map((item) => (
                  <li key={item.product.id} className="py-4 flex">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-800">
                          <h3>{item.product.name}</h3>
                          <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.product.unit}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between">
                        <div className="flex items-center border rounded-full">
                          <button
                            type="button"
                            className="p-1 text-gray-600 hover:text-gray-900"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-gray-800">{item.quantity}</span>
                          <button
                            type="button"
                            className="p-1 text-gray-600 hover:text-gray-900"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-sm font-medium text-red-600 hover:text-red-500"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between font-medium text-gray-800">
                <p>Subtotal</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <p className="text-xs text-gray-500">
                Shipping and taxes calculated at checkout
              </p>
              <Button 
                className="w-full bg-qgreen-500 hover:bg-qgreen-600"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
