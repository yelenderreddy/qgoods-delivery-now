import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // For now, we'll just check if user is logged in via localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child routes
  return <Outlet />;
};

export default ProtectedRoute; 