
import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import { products } from "@/data/dummyData";
import ProductCard from "@/components/products/ProductCard";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  // Filter products based on search query
  const searchResults = products.filter((product) => 
    product.name.toLowerCase().includes(query.toLowerCase()) || 
    product.description.toLowerCase().includes(query.toLowerCase())
  );
  
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
            Search Results for "{query}"
          </h1>
          <p className="text-gray-600">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        {searchResults.length > 0 ? (
          <div className="product-grid">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-600">
              Try using different keywords or browse our categories.
            </p>
          </div>
        )}
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
};

export default SearchResults;
