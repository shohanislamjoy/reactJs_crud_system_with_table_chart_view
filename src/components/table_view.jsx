import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/axios.js";

const table_view = () => {
  const navigate = useNavigate();

  const [wifiData, setWifiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Calculate paginated data
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return wifiData.slice(start, end);
  }, [currentPage, wifiData]);

  // Total number of pages
  const totalPages = useMemo(() => {
    return Math.ceil(wifiData.length / itemsPerPage);
  }, [wifiData]);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/wifi_data");
        setWifiData(response.data.data); // Adjust based on your API response
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Pagination handlers
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  // Navigation functions
  const gotoEdit = (id) => {
    console.log(`Navigate to edit page for ID: ${id}`);
    navigate(`/edit/${id}`);
  };

  const deleteColumn = async (id) => {
    try {
      console.log(id);
      const response = await api.delete(`/wifi_data/${id}`);
      if (response.status === 200) {
        alert("Data Deleted");
        setWifiData((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete data");
    }
  };

  const addWiFi = () => {
    console.log("Navigate to add wifi data page");
    navigate("/add");
  };

  return (
    <div className="w-full">
    
      <div className="text-center mt-16">
        <button
          onClick={addWiFi} //add wifi data
          className="relative px-5 py-2 font-medium text-white group"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative">ADD WIFI DATA</span>
        </button>
      </div>

      {/* data table */}
      <div className="m-20 p-10">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Trade Code</th>
              <th className="border border-gray-300 px-4 py-2">High</th>
              <th className="border border-gray-300 px-4 py-2">Low</th>
              <th className="border border-gray-300 px-4 py-2">Open</th>
              <th className="border border-gray-300 px-4 py-2">Close</th>
              <th className="border border-gray-300 px-4 py-2">Volume</th>
              <th className="border border-gray-300 px-4 py-2">Extras</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.trade_code}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.high}</td>
                <td className="border border-gray-300 px-4 py-2">{item.low}</td>
                <td className="border border-gray-300 px-4 py-2">{item.open}</td>
                <td className="border border-gray-300 px-4 py-2">{item.close}</td>
                <td className="border border-gray-300 px-4 py-2">{item.volume}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2 w-1/3"
                    onClick={() => gotoEdit(item?.id)}
                    disabled={!item?.id}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded w-1/3"
                    onClick={() => deleteColumn(item?.id)}
                    disabled={!item?.id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default table_view;
