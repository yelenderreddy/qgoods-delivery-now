
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { featuredProducts } from "@/data/dummyData";
import ProductCard from "@/components/products/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="py-10">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Products</h2>
          <Button variant="ghost" size="sm" asChild className="text-qgreen-600 font-medium">
            <Link to="/products" className="flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
