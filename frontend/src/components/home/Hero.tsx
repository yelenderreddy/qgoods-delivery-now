import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const coupons = [
  { code: "WELCOME20", discount: 20, description: "Get 20% off on your first order" },
  { code: "SUMMER15", discount: 15, description: "Summer special 15% off" },
  { code: "FRESH10", discount: 10, description: "10% off on fresh produce" },
  { code: "BULK25", discount: 25, description: "25% off on bulk orders" },
];

const Hero = () => {
  const [address, setAddress] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [currentCouponIndex, setCurrentCouponIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCouponIndex((prev) => (prev + 1) % coupons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleGetLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Use a reverse geocoding API to convert coordinates to address
          // For demo purposes, we'll just show the coordinates
          const { latitude, longitude } = position.coords;
          setAddress(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
          toast({
            title: "Location detected",
            description: "Using your current location for delivery",
          });
          setIsLocating(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            title: "Location error",
            description: "Could not get your location. Please enter it manually.",
            variant: "destructive",
          });
          setIsLocating(false);
        }
      );
    } else {
      toast({
        title: "Not supported",
        description: "Geolocation is not supported by your browser",
        variant: "destructive",
      });
      setIsLocating(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-qgreen-50 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Groceries Delivered in <span className="text-qgreen-500">30 Minutes</span>
            </h1>
            <p className="text-lg text-gray-600">
              Fresh produce, household essentials, and more delivered to your doorstep - faster than you can shop yourself.
            </p>
            <div className="flex items-center space-x-2 bg-white rounded-full p-1 shadow-sm border max-w-md">
              <MapPin className="ml-3 text-qgreen-500" size={20} />
              <input
                type="text"
                placeholder="Enter your address"
                className="flex-1 py-3 px-2 bg-transparent focus:outline-none text-gray-800"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button 
                className="rounded-full bg-qgreen-500 hover:bg-qgreen-600 flex items-center"
                onClick={handleGetLocation}
                disabled={isLocating}
              >
                <Navigation size={16} className="mr-1" />
                {isLocating ? "Locating..." : "Use My Location"}
              </Button>
            </div>
            <div className="flex items-center space-x-6 py-2">
              <div className="flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-qgreen-500 mr-2"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-gray-600">Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-qgreen-500 mr-2"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-gray-600">Fresh Products</span>
              </div>
              <div className="flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-qgreen-500 mr-2"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-gray-600">Special Discounts</span>
              </div>
            </div>

            {/* Coupon Slider */}
            <div className="overflow-hidden rounded-lg mb-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCouponIndex * 100}%)` }}
              >
                {coupons.map((coupon, index) => (
                  <div 
                    key={coupon.code}
                    className="w-full flex-shrink-0 bg-qgreen-500 text-white p-4 shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold">{coupon.code}</h3>
                        <p className="text-sm opacity-90">{coupon.description}</p>
                      </div>
                      <div className="text-2xl font-bold">
                        {coupon.discount}% OFF
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800"
                alt="Grocery Delivery"
                className="rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center">
                <span className="text-qgreen-500 font-bold">30 min</span>
                <span className="mx-1 text-gray-400">•</span>
                <span className="text-gray-700">Delivery Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
