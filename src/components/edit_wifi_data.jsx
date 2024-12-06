import  { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "@/axios.js";

const edit_wifi_data = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [wifiData, setWifiData] = useState({
    id: "",
    date: "",
    trade_code: "",
    high: "",
    low: "",
    open: "",
    close: "",
    volume: "",
  });


  const fetchData = async () => {
    try {
      const response = await api.get(`/wifi_data/${id}`);
      setWifiData(response.data.data); // Adjust based on API response structure
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch WiFi data");
    }
  };

  // Update WiFi data
  const updateWifiData = async (event) => {
    event.preventDefault();
    try {
      const response = await api.put(`/wifi_data/${wifiData.id}`, wifiData);
      alert("WiFi Data updated successfully!");
      navigate("/"); 
    } catch (error) {
      console.error("Error updating WiFi data:", error);
      alert("Failed to update WiFi data");
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [id]);

  // Handle form field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWifiData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-md m-12">
      <h1 className="text-2xl font-semibold text-center mb-6">Edit WiFi Data</h1>
      <form onSubmit={updateWifiData} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="date" className="text-lg font-medium">
            Date:
          </label>
          <input
            name="date"
            value={wifiData.date}
            onChange={handleChange}
            type="date"
            id="date"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="trade_code" className="text-lg font-medium">
            Trade Code:
          </label>
          <input
            name="trade_code"
            value={wifiData.trade_code}
            onChange={handleChange}
            type="text"
            id="trade_code"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="high" className="text-lg font-medium">
            High:
          </label>
          <input
            name="high"
            value={wifiData.high}
            onChange={handleChange}
            type="number"
            step="0.01"
            id="high"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="low" className="text-lg font-medium">
            Low:
          </label>
          <input
            name="low"
            value={wifiData.low}
            onChange={handleChange}
            type="number"
            step="0.01"
            id="low"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="open" className="text-lg font-medium">
            Open:
          </label>
          <input
            name="open"
            value={wifiData.open}
            onChange={handleChange}
            type="number"
            step="0.01"
            id="open"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="close" className="text-lg font-medium">
            Close:
          </label>
          <input
            name="close"
            value={wifiData.close}
            onChange={handleChange}
            type="number"
            step="0.01"
            id="close"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="volume" className="text-lg font-medium">
            Volume:
          </label>
          <input
            name="volume"
            value={wifiData.volume}
            onChange={handleChange}
            type="number"
            step="0.01"
            id="volume"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default edit_wifi_data;
