
import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/dummyData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Get grocery subcategories (wheat, oil, masala, dals, dry-fruits, noodles)
const groceryCategories = categories.filter(cat => 
  ["10", "11", "12", "13", "14", "15"].includes(cat.id)
);

// Get main categories excluding the grocery subcategories
const mainCategories = categories.filter(cat => 
  !["10", "11", "12", "13", "14", "15"].includes(cat.id)
);

// Add a new "Grocery" virtual category
const groceryCategory = {
  id: "grocery",
  name: "Grocery",
  icon: "🛒",
  slug: "grocery",
  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500"
};

const CategorySection = () => {
  return (
    <section className="py-10">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Shop by Category</h2>
          <Button variant="ghost" size="sm" asChild className="text-qgreen-600 font-medium">
            <Link to="/categories" className="flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </Button>
        </div>
        
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex space-x-4">
            {mainCategories.map((category) => (
              <Link 
                key={category.id} 
                to={`/categories/${category.slug}`}
                className="inline-block min-w-[140px] hover-scale"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mb-3">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-xl"></div>
                  </div>
                  <span className="text-gray-800 font-medium text-sm">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
            
            {/* Add Grocery as a separate category */}
            <Link 
              key={groceryCategory.id} 
              to={`/categories/${groceryCategory.slug}`}
              className="inline-block min-w-[140px] hover-scale"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 md:w-32 md:h-32 mb-3">
                  <img
                    src={groceryCategory.image}
                    alt={groceryCategory.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 rounded-xl"></div>
                </div>
                <span className="text-gray-800 font-medium text-sm">
                  {groceryCategory.name}
                </span>
              </div>
            </Link>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default CategorySection;
