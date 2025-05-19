
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/lib/cartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition duration-200 hover:shadow-md h-full flex flex-col hover-scale">
        <div className="relative h-40 md:h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              Out of Stock
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="font-medium text-gray-800 mb-1 group-hover:text-qgreen-600">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{product.unit}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full h-8 w-8 p-0 border-gray-200"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <Plus size={16} className="text-qgreen-600" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
