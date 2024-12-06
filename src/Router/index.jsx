
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/views/home.jsx"; // Assuming this displays the list of WiFi data
import AddWifiData from "@/components/add_wifi_data"; // Add WiFi data component
import EditWifiData from "@/components/edit_wifi_data"; // Edit WiFi data component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddWifiData />} />
        <Route path="/edit/:id" element={<EditWifiData />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
