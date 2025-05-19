import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import { products } from "@/data/dummyData";
import { useCart } from "@/lib/cartContext";
import { ChevronLeft, Minus, Plus, ShoppingBag, X, Check } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container-custom py-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <>
      <Navbar />
      <main className="container-custom py-8">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/" className="flex items-center">
            <ChevronLeft size={16} className="mr-1" />
            Back to browsing
          </Link>
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-xl overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
            <p className="text-xl font-medium text-gray-900">${product.price.toFixed(2)} / {product.unit}</p>
            
            {/* Stock Status Indicator */}
            <div className="flex items-center">
              {product.inStock ? (
                <span className="text-green-600 flex items-center text-sm">
                  <Check size={16} className="mr-1" />
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 flex items-center text-sm">
                  <X size={16} className="mr-1" />
                  Out of Stock
                </span>
              )}
            </div>
            
            <div className="py-4 border-t border-b">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Quantity:</span>
              <div className="flex items-center border rounded-full">
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-gray-900"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 text-gray-800">{quantity}</span>
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-gray-900"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <div className="pt-6 space-y-4">
              <Button 
                className="w-full bg-qgreen-500 hover:bg-qgreen-600"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingBag size={18} className="mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Delivery Information</h3>
                <p className="text-sm text-gray-600">
                  Usually delivered within 30 minutes in your area. Free delivery on orders over $20.
                </p>
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

export default ProductDetail;
