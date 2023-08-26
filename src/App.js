import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhatsappBadge from "./components/WhatsappBadge";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Dashboard from "./admin/Dashboard";
import AdminProtectedRoutes from "./ProtectedRoutes/AdminProtectedRoutes";
function App() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path === "/login" ? (
        ""
      ) : path === "/signup" ? (
        ""
      ) : path === "/dashboard" ? (
        ""
      ) : (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {path === "/login" ? (
        ""
      ) : path === "/signup" ? (
        ""
      ) : path === "/dashboard" ? (
        ""
      ) : (
        <Footer />
      )}{" "}
      {path === "/login" ? (
        ""
      ) : path === "/signup" ? (
        ""
      ) : path === "/dashboard" ? (
        ""
      ) : (
        <WhatsappBadge />
      )}
    </>
  );
}

export default App;
