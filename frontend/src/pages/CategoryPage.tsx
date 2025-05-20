import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import { ChevronLeft } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/dummyData";

interface CategoryPageProps {
  slug?: string;
}

interface Product {
  id: number;
  productName: string;
  quantity: number;
}

// Define products for other categories
const categoryProducts = {
  dairy: [
    {
      id: "d1",
      name: "Fresh Milk",
      description: "Pure and fresh whole milk",
      price: 3.99,
      category: "dairy",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=500",
      unit: "liter",
      inStock: true,
      storeId: "1"
    },
    {
      id: "d2",
      name: "Butter",
      description: "Creamy unsalted butter",
      price: 4.99,
      category: "dairy",
      image: "https://images.unsplash.com/photo-1589985270922-89f1999a5df3?q=80&w=500",
      unit: "pack",
      inStock: true,
      storeId: "1"
    }
  ],
  meat: [
    {
      id: "m1",
      name: "Chicken Breast",
      description: "Fresh boneless chicken breast",
      price: 8.99,
      category: "meat",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500",
      unit: "kg",
      inStock: true,
      storeId: "1"
    },
    {
      id: "m2",
      name: "Salmon Fillet",
      description: "Fresh Atlantic salmon fillet",
      price: 12.99,
      category: "meat",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=500",
      unit: "kg",
      inStock: true,
      storeId: "1"
    }
  ],
  beverages: [
    {
      id: "b1",
      name: "Orange Juice",
      description: "Fresh squeezed orange juice",
      price: 4.99,
      category: "beverages",
      image: "https://images.unsplash.com/photo-16134782237194052a7d2a7b5d?q=80&w=500",
      unit: "liter",
      inStock: true,
      storeId: "1"
    },
    {
      id: "b2",
      name: "Green Tea",
      description: "Organic green tea bags",
      price: 3.99,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=500",
      unit: "pack",
      inStock: true,
      storeId: "1"
    }
  ],
  snacks: [
    {
      id: "s1",
      name: "Potato Chips",
      description: "Classic salted potato chips",
      price: 2.99,
      category: "snacks",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=500",
      unit: "pack",
      inStock: true,
      storeId: "1"
    },
    {
      id: "s2",
      name: "Mixed Nuts",
      description: "Premium mixed nuts",
      price: 5.99,
      category: "snacks",
      image: "https://images.unsplash.com/photo-1589634749000-1e72e6a2b37b?q=80&w=500",
      unit: "pack",
      inStock: true,
      storeId: "1"
    }
  ],
  grocery: [
    {
      id: "g1",
      name: "Basmati Rice",
      description: "Premium long grain basmati rice",
      price: 6.99,
      category: "grocery",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500",
      unit: "kg",
      inStock: true,
      storeId: "1"
    },
    {
      id: "g2",
      name: "Whole Wheat Flour",
      description: "Organic whole wheat flour",
      price: 3.99,
      category: "grocery",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=500",
      unit: "kg",
      inStock: true,
      storeId: "1"
    }
  ]
};

const CategoryPage = ({ slug: propSlug }: CategoryPageProps) => {
  const params = useParams<{ slug?: string }>();
  const slug = propSlug || params.slug;
  const [fruitsAndVegetables, setFruitsAndVegetables] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFruitsAndVegetables = async () => {
      if (slug === "fruits") {
        setLoading(true);
        try {
          const response = await fetch("http://localhost:3000/api/products/getAll");
          const result = await response.json();
          if (result.statusCode === "200") {
            // Transform the API data to match our product format
            const transformedProducts = result.data.map((item: Product) => ({
              id: item.id.toString(),
              name: item.productName.charAt(0).toUpperCase() + item.productName.slice(1),
              description: `Fresh ${item.productName}`,
              price: 2.99, // Default price
              category: "fruits",
              image: `https://source.unsplash.com/500x500/?${item.productName}`,
              unit: "kg",
              inStock: true,
              storeId: "1"
            }));
            setFruitsAndVegetables(transformedProducts);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchFruitsAndVegetables();
  }, [slug]);

  // Get products based on category
  const products = slug === "fruits" 
    ? fruitsAndVegetables 
    : slug 
    ? categoryProducts[slug as keyof typeof categoryProducts] || [] 
    : [];

  const getCategoryTitle = (slug: string) => {
    const titles: { [key: string]: string } = {
      fruits: "Fruits & Vegetables",
      dairy: "Dairy & Bakery",
      meat: "Meat & Fish",
      beverages: "Beverages",
      snacks: "Snacks & Munchies",
      grocery: "Grocery & Staples"
    };
    return titles[slug] || "All Products";
  };

  const title = slug ? getCategoryTitle(slug) : "All Products";

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
            {products.length} product{products.length !== 1 ? 's' : ''} available
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-16">
            <p className="text-gray-600">Loading products...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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
