
import React from "react";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedProducts />
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
};

export default Index;
