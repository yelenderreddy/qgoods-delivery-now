import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, User, Menu, X, Search } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import SearchBar from "@/components/ui/SearchBar";

const Navbar = () => {
  const { itemCount, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-qgreen-500 text-2xl font-bold mr-2">Q</span>
              <span className="font-semibold text-gray-800 text-xl">Goods</span>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/categories">Browse</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/stores">Stores</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login" className="flex items-center">
                <User size={18} className="mr-1" />
                <span>Account</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleCart} 
              className="relative"
            >
              <ShoppingBag size={18} className="mr-1" />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-qgreen-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Button>
          </nav>

          {/* Mobile Navigation Buttons */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch}
              className="rounded-full"
            >
              <Search size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCart}
              className="rounded-full relative"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-qgreen-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost"
              size="icon" 
              onClick={toggleMenu}
              className="rounded-full"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Search - Conditional */}
        {searchOpen && (
          <div className="pt-3 pb-2 md:hidden">
            <SearchBar />
          </div>
        )}

        {/* Mobile Menu - Conditional */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t mt-3">
            <Link 
              to="/categories" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Categories
            </Link>
            <Link 
              to="/stores" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Stores Near Me
            </Link>
            <Link 
              to="/login" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
