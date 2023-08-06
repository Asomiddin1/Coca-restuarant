import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useNavigate,
  Router,
  Routes
} from "react-router-dom";
import AdminPage from "./components/admin/admin-page/admin-page";
import Layout from "./layout/layout";
import { useEffect } from "react";
import AdminPin from "./components/admin/admin-pin/admin-pin";
import Dashboard from "./components/dashboard/dashborad-main/dashboard";
import AdminDashboard from "./components/admin/admin-dashboard/adminDashboard";
import Pagelayout from "./PageLayout/pagelayout";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const uName = JSON.parse(localStorage.getItem('username'))

    if (uName) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [])


  return (
    <div className=" h-[100vh] w-full">
      <Routes>
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/admin-pin" element={<AdminPin />} />
        <Route path="/login" element={<Layout />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

