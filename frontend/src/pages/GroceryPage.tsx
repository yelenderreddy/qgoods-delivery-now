
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import { categories, products } from "@/data/dummyData";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Get grocery subcategories
const grocerySubcategories = categories.filter(cat => 
  ["10", "11", "12", "13", "14", "15"].includes(cat.id)
);

const GroceryPage = () => {
  return (
    <>
      <Navbar />
      <main className="container-custom py-8">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/" className="flex items-center">
            <ChevronLeft size={16} className="mr-1" />
            Back to Home
          </Link>
        </Button>
        
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Grocery
          </h1>
          <p className="text-gray-600">
            Browse all grocery subcategories
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {grocerySubcategories.map((category) => (
            <Link 
              key={category.id} 
              to={`/categories/${category.slug}`}
              className="group"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
                <span className="text-gray-800 font-medium text-sm">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
};

export default GroceryPage;
