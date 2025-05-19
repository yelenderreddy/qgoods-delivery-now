
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import { stores } from "@/data/dummyData";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const StoresPage = () => {
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
            Stores Near You
          </h1>
          <p className="text-gray-600">
            Find your nearest store location and operating hours
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stores.map((store) => (
            <div key={store.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={store.image} 
                alt={store.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
                <p className="text-gray-600 mb-1">{store.address}</p>
                <p className="text-gray-600"><span className="font-medium">Hours:</span> {store.operatingHours}</p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link to={`/stores/${store.id}`}>View Store Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
};

export default StoresPage;
