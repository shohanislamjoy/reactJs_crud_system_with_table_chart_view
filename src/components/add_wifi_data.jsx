import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/axios.js";

const AddWifiData = () => {
  const navigate = useNavigate();

  const [wifiData, setWifiData] = useState({
    date: "",
    trade_code: "",
    high: "",
    low: "",
    open: "",
    close: "",
    volume: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWifiData({ ...wifiData, [name]: value });
  };

  const addWifiData = async (e) => {
    e.preventDefault();
    try {
      await api.post("/wifi_data", wifiData);
      alert("WiFi Data added successfully!");
      navigate("/"); // Redirect after success
    } catch (error) {
      console.error("Error adding WiFi Data:", error);
      alert("Failed to add WiFi Data");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-md m-12">
      <h1 className="text-2xl font-semibold text-center mb-6">Add WiFi Data</h1>
      <form onSubmit={addWifiData} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="date" className="text-lg font-medium">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={wifiData.date}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="trade_code" className="text-lg font-medium">Trade Code:</label>
          <input
            type="text"
            id="trade_code"
            name="trade_code"
            value={wifiData.trade_code}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="high" className="text-lg font-medium">High:</label>
          <input
            type="number"
            step="0.01"
            id="high"
            name="high"
            value={wifiData.high}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="low" className="text-lg font-medium">Low:</label>
          <input
            type="number"
            step="0.01"
            id="low"
            name="low"
            value={wifiData.low}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="open" className="text-lg font-medium">Open:</label>
          <input
            type="number"
            step="0.01"
            id="open"
            name="open"
            value={wifiData.open}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="close" className="text-lg font-medium">Close:</label>
          <input
            type="number"
            step="0.01"
            id="close"
            name="close"
            value={wifiData.close}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="volume" className="text-lg font-medium">Volume:</label>
          <input
            type="number"
            step="0.01"
            id="volume"
            name="volume"
            value={wifiData.volume}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddWifiData;
