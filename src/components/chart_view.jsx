import { useEffect, useState } from "react";
import api from "@/axios.js";
import { Chart } from "react-google-charts";

const Charts = () => {
  const [averageData, setAverageData] = useState([]);
  const [multiLineData, setMultiLineData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/wifi_data");
      const fetchedData = response.data.data;

      //  average volume
      const processedData = {};
      fetchedData.forEach(({ trade_code, volume }) => {
        if (!processedData[trade_code]) {
          processedData[trade_code] = { total: 0, count: 0 };
        }
        processedData[trade_code].total += parseFloat(volume);
        processedData[trade_code].count += 1;
      });

      const averageVolumeData = [["Trade Code", "Average Volume"]];
      for (const [trade_code, { total, count }] of Object.entries(processedData)) {
        averageVolumeData.push([trade_code, total / count]);
      }

      // multi-line chart
      const multiSeriesData = [["Trade Code", "Open", "Close"]];
      fetchedData.forEach(({ trade_code, open, close }) => {
        multiSeriesData.push([trade_code, parseFloat(open), parseFloat(close)]);
      });

      setAverageData(averageVolumeData);
      setMultiLineData(multiSeriesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-center text-4xl m-6">
      <h1 className="font-bold">Charts on the Data</h1>

      <div className="chart-container">
        {/* Line Chart */}
        <Chart
          chartType="LineChart"
          data={averageData}
          options={{
            title: "Average Volume per Trade Code",
            curveType: "function",
            legend: { position: "bottom" },
            height: 500,
          }}
          width="100%"
          height="500px"
        />

        {/* Bar Chart */}
        <Chart
          chartType="BarChart"
          data={averageData}
          options={{
            title: "Average Volume per Trade Code (Bar Chart)",
            chartArea: { width: "60%" },
            hAxis: { title: "Trade Code", minValue: 0 },
            vAxis: { title: "Average Volume" },
            height: 500,
          }}
          width="100%"
          height="500px"
        />

        {/* Multi-Line Chart */}
        <Chart
          chartType="LineChart"
          data={multiLineData}
          options={{
            title: "Open vs Close per Trade Code",
            curveType: "function",
            legend: { position: "bottom" },
            height: 500,
          }}
          width="100%"
          height="500px"
        />
      </div>
    </div>
  );
};

export default Charts;
