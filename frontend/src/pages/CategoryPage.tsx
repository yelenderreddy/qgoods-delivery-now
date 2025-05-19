
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import { categories, products } from "@/data/dummyData";
import ProductCard from "@/components/products/ProductCard";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GroceryPage from "./GroceryPage";

interface CategoryPageProps {
  slug?: string;
}

const CategoryPage = ({ slug: propSlug }: CategoryPageProps) => {
  const params = useParams<{ slug?: string }>();
  const slug = propSlug || params.slug;
  
  // If the slug is "grocery", render the GroceryPage component
  if (slug === "grocery") {
    return <GroceryPage />;
  }
  
  // If no slug is provided, show all products
  const categoryProducts = slug && slug !== "all" 
    ? products.filter(p => {
        const category = categories.find(c => c.slug === slug);
        return p.category === category?.id;
      })
    : products;
  
  // Handle "all" or undefined slug case
  const title = slug && slug !== "all" 
    ? categories.find(c => c.slug === slug)?.name || "All Products" 
    : "All Products";
  
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
            {title}
          </h1>
          <p className="text-gray-600">
            {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        {categoryProducts.length > 0 ? (
          <div className="product-grid">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-600">
              Check back soon for new products in this category.
            </p>
          </div>
        )}
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
};

export default CategoryPage;
