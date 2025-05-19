
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  unit: string;
  inStock: boolean;
  storeId: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  default: boolean;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  operatingHours: string;
  image: string;
}
