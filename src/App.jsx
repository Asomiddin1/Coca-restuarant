import { Route, Routes, useNavigate } from "react-router-dom";
import AdminPage from "./components/admin/admin-page/admin-page";
import Layout from "./layout/layout";
import { useEffect } from "react";
import AdminPin from "./components/admin/admin-pin/admin-pin";
import Dashboard from "./components/dashboard/dashboard";
import AdminDashboard from "./components/admin/admin-dashboard/adminDashboard";

function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/login')
  } , [])
  return (
    <div className="App">

      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/> 
        <Route path="/admin-page" element={<AdminPage />}/> 
        <Route path="/admin-pin" element={<AdminPin />}/> 
        <Route path="/login" element={<Layout />}/> 
        <Route path="/" element={<Dashboard />}/> 
       
      </Routes>
    </div>
  );
}

export default App;
