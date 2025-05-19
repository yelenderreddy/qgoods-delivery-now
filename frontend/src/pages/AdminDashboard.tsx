
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  SidebarProvider,
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarInset
} from "@/components/ui/sidebar";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { products } from "@/data/dummyData";
import { Package, ShoppingBag, Truck, List, Check, X } from "lucide-react";

interface Order {
  id: string;
  customerId: string;
  customerName: string;
  items: number;
  total: number;
  status: "Processing" | "Ready" | "Assigned" | "Delivered";
}

interface StockItem {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

const AdminDashboard = () => {
  // Mock data for orders
  const [orders, setOrders] = useState<Order[]>([
    { id: "#ORD-2301", customerId: "CUST-001", customerName: "Customer 1", items: 3, total: 42.50, status: "Processing" },
    { id: "#ORD-2302", customerId: "CUST-002", customerName: "Customer 2", items: 2, total: 27.80, status: "Ready" },
    { id: "#ORD-2303", customerId: "CUST-003", customerName: "Customer 3", items: 4, total: 56.25, status: "Processing" },
    { id: "#ORD-2304", customerId: "CUST-004", customerName: "Customer 4", items: 1, total: 12.99, status: "Ready" },
    { id: "#ORD-2305", customerId: "CUST-005", customerName: "Customer 5", items: 5, total: 64.75, status: "Assigned" },
  ]);

  // Stock management data, initialized with products from dummyData
  const [stockItems, setStockItems] = useState<StockItem[]>(
    products.map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      inStock: p.inStock
    }))
  );

  // State to track which section is active
  const [activeSection, setActiveSection] = useState<"dashboard" | "orders" | "stock">("dashboard");

  // Function to toggle stock status
  const toggleStockStatus = (id: string) => {
    setStockItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  // Function to update order status to Ready
  const markOrderReady = (id: string) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === id && order.status === "Processing" 
          ? { ...order, status: "Ready" } 
          : order
      )
    );
  };

  // Function to assign order to rider
  const assignOrderToRider = (id: string) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === id && order.status === "Ready" 
          ? { ...order, status: "Assigned" } 
          : order
      )
    );
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-100">
        <Sidebar side="left" variant="inset" className="border-r bg-white">
          <SidebarHeader>
            <div className="flex items-center p-4">
              <span className="text-qgreen-500 text-2xl font-bold mr-2">Q</span>
              <span className="font-semibold text-gray-800 text-xl">Goods</span>
              <span className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded">Admin</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "dashboard"}
                  onClick={() => setActiveSection("dashboard")}
                >
                  <Package />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "orders"}
                  onClick={() => setActiveSection("orders")}
                >
                  <List />
                  <span>Orders</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "stock"}
                  onClick={() => setActiveSection("stock")}
                >
                  <ShoppingBag />
                  <span>Stock Management</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="flex-1">
          <header className="bg-white shadow-sm">
            <div className="container-custom py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {activeSection === "dashboard" && "Store Dashboard"}
                  {activeSection === "orders" && "Orders Management"}
                  {activeSection === "stock" && "Stock Management"}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-gray-700">admin@qgoods.com</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/login">Logout</Link>
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <main className="container-custom py-8">
            {activeSection === "dashboard" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h2 className="text-gray-500 text-sm">Today's Orders</h2>
                    <p className="text-3xl font-bold mt-2">16</p>
                    <div className="text-qgreen-500 mt-2 text-sm">+5% from yesterday</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h2 className="text-gray-500 text-sm">Revenue</h2>
                    <p className="text-3xl font-bold mt-2">$1,245.89</p>
                    <div className="text-qgreen-500 mt-2 text-sm">+12% from yesterday</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h2 className="text-gray-500 text-sm">Items Low in Stock</h2>
                    <p className="text-3xl font-bold mt-2">8</p>
                    <div className="text-red-500 mt-2 text-sm">Action needed</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">Recent Orders</h2>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {orders.slice(0, 5).map((order) => (
                          <tr key={order.id} className="hover:bg-gray-50">
                            <td className="py-4 px-4 text-sm">{order.id}</td>
                            <td className="py-4 px-4 text-sm">{order.customerName}</td>
                            <td className="py-4 px-4 text-sm">{order.items} items</td>
                            <td className="py-4 px-4 text-sm">${order.total.toFixed(2)}</td>
                            <td className="py-4 px-4 text-sm">
                              <span 
                                className={`px-2 py-1 text-xs rounded-full 
                                  ${order.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                                    order.status === "Ready" ? "bg-blue-100 text-blue-800" :
                                    order.status === "Assigned" ? "bg-purple-100 text-purple-800" :
                                    "bg-green-100 text-green-800"
                                  }`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-sm">
                              <Button variant="outline" size="sm">View</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
            
            {activeSection === "orders" && (
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">All Orders</h2>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.customerName}</TableCell>
                          <TableCell>{order.items} items</TableCell>
                          <TableCell>${order.total.toFixed(2)}</TableCell>
                          <TableCell>
                            <span 
                              className={`px-2 py-1 text-xs rounded-full 
                                ${order.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                                  order.status === "Ready" ? "bg-blue-100 text-blue-800" :
                                  order.status === "Assigned" ? "bg-purple-100 text-purple-800" :
                                  "bg-green-100 text-green-800"
                                }`}
                            >
                              {order.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            {order.status === "Processing" && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => markOrderReady(order.id)}
                                className="mr-2"
                              >
                                <Check size={16} className="mr-1" />
                                Mark Ready
                              </Button>
                            )}
                            {order.status === "Ready" && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => assignOrderToRider(order.id)}
                              >
                                <Truck size={16} className="mr-1" />
                                Assign to Rider
                              </Button>
                            )}
                            {order.status === "Assigned" && (
                              <span className="text-sm text-gray-500">En route</span>
                            )}
                            {order.status === "Delivered" && (
                              <span className="text-sm text-gray-500">Completed</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
            
            {activeSection === "stock" && (
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Stock Management</h2>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>In Stock</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stockItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>${item.price.toFixed(2)}</TableCell>
                          <TableCell>
                            {item.inStock ? (
                              <span className="text-green-600 flex items-center">
                                <Check size={16} className="mr-1" />
                                In Stock
                              </span>
                            ) : (
                              <span className="text-red-600 flex items-center">
                                <X size={16} className="mr-1" />
                                Out of Stock
                              </span>
                            )}
                          </TableCell>
                          <TableCell>
                            <Checkbox 
                              checked={item.inStock}
                              onCheckedChange={() => toggleStockStatus(item.id)}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
