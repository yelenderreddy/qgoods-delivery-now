import { Product, Category, Store } from "../lib/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Fruits & Vegetables",
    icon: "🍎",
    slug: "fruits-vegetables",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=500"
  },
  {
    id: "2",
    name: "Dairy & Eggs",
    icon: "🥛",
    slug: "dairy-eggs",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=500"
  },
  {
    id: "3",
    name: "Meat & Seafood",
    icon: "🥩",
    slug: "meat-seafood",
    image: "https://images.unsplash.com/photo-1615143341056-68549a8dbd11?q=80&w=500"
  },
  {
    id: "4",
    name: "Bakery",
    icon: "🍞",
    slug: "bakery",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=500"
  },
  {
    id: "5",
    name: "Beverages",
    icon: "🥤",
    slug: "beverages",
    image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?q=80&w=500"
  },
  {
    id: "6",
    name: "Snacks",
    icon: "🍿",
    slug: "snacks",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=500"
  },
  {
    id: "7",
    name: "Household",
    icon: "🧹",
    slug: "household",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=500"
  },
  {
    id: "8",
    name: "Personal Care",
    icon: "🧴",
    slug: "personal-care",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfeda?q=80&w=500"
  },
  {
    id: "9",
    name: "Grocery",
    icon: "🛒",
    slug: "grocery",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500"
  },
  {
    id: "10",
    name: "Wheat Products",
    icon: "🌾",
    slug: "wheat",
    image: "https://images.unsplash.com/photo-1530364526598-4b99c4c5e0da?q=80&w=500"
  },
  {
    id: "11",
    name: "Cooking Oils",
    icon: "🫒",
    slug: "oil",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=500"
  },
  {
    id: "12",
    name: "Masalas & Spices",
    icon: "🌶️",
    slug: "masala",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=500"
  },
  {
    id: "13",
    name: "Dals & Pulses",
    icon: "🥜",
    slug: "dals",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=500"
  },
  {
    id: "14",
    name: "Dry Fruits",
    icon: "🥥",
    slug: "dry-fruits",
    image: "https://images.unsplash.com/photo-1616684000067-36952fde56ec?q=80&w=500"
  },
  {
    id: "15",
    name: "Noodles",
    icon: "🍜",
    slug: "noodles",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=500"
  }
];

export const stores: Store[] = [
  {
    id: "1",
    name: "Fresh Market",
    address: "123 Main St, Anytown, USA",
    operatingHours: "8:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=500"
  },
  {
    id: "2",
    name: "Urban Grocers",
    address: "456 Oak Ave, Somewhere, USA",
    operatingHours: "7:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=500"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Bananas",
    description: "Sweet and ripe organic bananas, perfect for smoothies or as a quick snack.",
    price: 1.99,
    category: "1", // Fruits & Vegetables
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=500",
    unit: "bunch",
    inStock: true,
    storeId: "1"
  },
  {
    id: "2",
    name: "Fresh Milk",
    description: "Farm-fresh whole milk, pasteurized for safety and taste.",
    price: 3.49,
    category: "2", // Dairy & Eggs
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=500",
    unit: "gallon",
    inStock: true,
    storeId: "1"
  },
  {
    id: "3",
    name: "Chicken Breast",
    description: "Boneless, skinless chicken breast, hormone-free and ready to cook.",
    price: 5.99,
    category: "3", // Meat & Seafood
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500",
    unit: "lb",
    inStock: true,
    storeId: "2"
  },
  {
    id: "4",
    name: "Sourdough Bread",
    description: "Freshly baked artisanal sourdough bread with perfect crust.",
    price: 4.50,
    category: "4", // Bakery
    image: "https://images.unsplash.com/photo-1585478259715-4857180e03c2?q=80&w=500",
    unit: "loaf",
    inStock: true,
    storeId: "2"
  },
  {
    id: "5",
    name: "Sparkling Water",
    description: "Refreshing carbonated water with no added sugars or flavors.",
    price: 1.25,
    category: "5", // Beverages
    image: "https://images.unsplash.com/photo-1598614187854-26a60e982dc4?q=80&w=500",
    unit: "bottle",
    inStock: true,
    storeId: "1"
  },
  {
    id: "6",
    name: "Mixed Nuts",
    description: "Premium blend of roasted almonds, cashews, and pecans.",
    price: 6.99,
    category: "6", // Snacks
    image: "https://images.unsplash.com/photo-1606437518185-4a62e4862940?q=80&w=500",
    unit: "8 oz",
    inStock: true,
    storeId: "1"
  },
  {
    id: "7",
    name: "Dish Soap",
    description: "Concentrated dish soap that cuts through grease effectively.",
    price: 2.99,
    category: "7", // Household
    image: "https://images.unsplash.com/photo-1583909687702-fdc3c1695951?q=80&w=500",
    unit: "bottle",
    inStock: true,
    storeId: "2"
  },
  {
    id: "8",
    name: "Shampoo",
    description: "Nourishing shampoo suitable for all hair types.",
    price: 7.99,
    category: "8", // Personal Care
    image: "https://images.unsplash.com/photo-1626766632602-5bcbe5a05f5f?q=80&w=500",
    unit: "bottle",
    inStock: true,
    storeId: "2"
  },
  {
    id: "9",
    name: "Fresh Apples",
    description: "Crisp and juicy apples picked at peak ripeness.",
    price: 2.49,
    category: "1", // Fruits & Vegetables
    image: "https://images.unsplash.com/photo-1567306226435-27a4d5304a6d?q=80&w=500",
    unit: "lb",
    inStock: true,
    storeId: "1"
  },
  {
    id: "10",
    name: "Cheddar Cheese",
    description: "Sharp cheddar cheese, perfectly aged for rich flavor.",
    price: 4.99,
    category: "2", // Dairy & Eggs
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?q=80&w=500",
    unit: "8 oz",
    inStock: true,
    storeId: "1"
  },
  {
    id: "11",
    name: "Ground Beef",
    description: "Lean ground beef perfect for burgers and more.",
    price: 6.99,
    category: "3", // Meat & Seafood
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?q=80&w=500",
    unit: "lb",
    inStock: true,
    storeId: "2"
  },
  {
    id: "12",
    name: "Chocolate Croissants",
    description: "Buttery, flaky croissants with rich chocolate centers.",
    price: 2.99,
    category: "4", // Bakery
    image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=500",
    unit: "2-pack",
    inStock: true,
    storeId: "2"
  },
  {
    id: "13",
    name: "Whole Wheat Flour",
    description: "100% stone-ground whole wheat flour, perfect for baking bread and other baked goods.",
    price: 3.99,
    category: "10", // Wheat Products
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=500",
    unit: "2 lb bag",
    inStock: true,
    storeId: "1"
  },
  {
    id: "14",
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed extra virgin olive oil from Mediterranean olives. Perfect for cooking and dressing.",
    price: 8.99,
    category: "11", // Cooking Oils
    image: "https://images.unsplash.com/photo-1609431193849-c89b2cdb7699?q=80&w=500",
    unit: "500ml bottle",
    inStock: true,
    storeId: "1"
  },
  {
    id: "15",
    name: "Garam Masala",
    description: "Traditional Indian spice blend with cardamom, cinnamon, cloves, and other aromatic spices.",
    price: 4.49,
    category: "12", // Masalas & Spices
    image: "https://images.unsplash.com/photo-1637418323757-370e7a6faf02?q=80&w=500",
    unit: "100g jar",
    inStock: true,
    storeId: "2"
  },
  {
    id: "16",
    name: "Yellow Toor Dal",
    description: "High-protein split pigeon peas, perfect for soups, stews, and traditional Indian dishes.",
    price: 3.29,
    category: "13", // Dals & Pulses
    image: "https://images.unsplash.com/photo-1622542086073-8e94dd07d894?q=80&w=500",
    unit: "500g bag",
    inStock: true,
    storeId: "1"
  },
  {
    id: "17",
    name: "Mixed Dry Fruits",
    description: "Premium selection of almonds, cashews, raisins, and pistachios. Perfect for snacking.",
    price: 9.99,
    category: "14", // Dry Fruits
    image: "https://images.unsplash.com/photo-1605439281053-8c586457ce10?q=80&w=500",
    unit: "250g pack",
    inStock: true,
    storeId: "2"
  },
  {
    id: "18",
    name: "Ramen Noodles",
    description: "Authentic Japanese ramen noodles. Just add hot water and your favorite toppings.",
    price: 2.49,
    category: "15", // Noodles
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=500",
    unit: "pack of 5",
    inStock: true,
    storeId: "1"
  },
  {
    id: "19",
    name: "Semolina",
    description: "Fine-ground durum wheat semolina, ideal for making pasta, couscous, and desserts.",
    price: 2.79,
    category: "10", // Wheat Products
    image: "https://images.unsplash.com/photo-1591118424047-47ccf99fdde4?q=80&w=500",
    unit: "1 lb bag",
    inStock: true,
    storeId: "2"
  },
  {
    id: "20",
    name: "Sunflower Oil",
    description: "Light, heart-healthy cooking oil with a high smoke point. Perfect for frying and baking.",
    price: 5.49,
    category: "11", // Cooking Oils
    image: "https://images.unsplash.com/photo-1620705563835-a11fcbc0bd14?q=80&w=500",
    unit: "1L bottle",
    inStock: true,
    storeId: "1"
  },
  {
    id: "21",
    name: "Red Chili Powder",
    description: "Hot and flavorful red chili powder to spice up any dish.",
    price: 3.29,
    category: "12", // Masalas & Spices
    image: "https://images.unsplash.com/photo-1585564531937-59bc18b5b6d7?q=80&w=500",
    unit: "100g jar",
    inStock: true,
    storeId: "2"
  },
  {
    id: "22",
    name: "Black Gram Dal",
    description: "Nutritious black gram split lentils, essential for many South Asian recipes.",
    price: 3.99,
    category: "13", // Dals & Pulses
    image: "https://images.unsplash.com/photo-1584787519015-428431d918af?q=80&w=500",
    unit: "500g bag",
    inStock: true,
    storeId: "1"
  },
  {
    id: "23",
    name: "Walnuts",
    description: "Crunchy, brain-shaped nuts packed with omega-3 fatty acids and antioxidants.",
    price: 7.99,
    category: "14", // Dry Fruits
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&w=500",
    unit: "200g pack",
    inStock: true,
    storeId: "2"
  },
  {
    id: "24",
    name: "Rice Noodles",
    description: "Gluten-free thin rice noodles, perfect for stir-fries and soups.",
    price: 2.99,
    category: "15", // Noodles
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=500",
    unit: "400g pack",
    inStock: true,
    storeId: "1"
  }
];

export const featuredProducts = [
  products[0],
  products[1],
  products[2],
  products[13], // Whole Wheat Flour
  products[14], // Olive Oil
  products[17], // Ramen Noodles
];
