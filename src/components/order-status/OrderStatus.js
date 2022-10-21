import React, { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const OrderStatus = () => {
  const [dataList, setDataList] = useState({
    datasets: [],
  });

  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    setDataList({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Jun",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Sels",
          data: [100, 70, 80, 88, 100, 40, 80, 55, 100, 40, 80, 55],
          backgroundColor: [
            "rgba(188, 33, 154, 0.8)",
            "rgba(245, 14, 228, 0.8)",
            "rgba(245, 137, 14, 0.8)",
            "rgba(153, 236, 32, 0.8)",
            "rgba(32, 236, 51, 0.8)",
            "rgba(32, 42, 236, 0.8)",
            "rgba(32, 236, 229, 0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
        },
      ],
    });

    setChartOption({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Line Chart",
        },
      },
    });
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          padding: "10px",
        }}
      >
        <Bar chartOption={chartOption} data={dataList} />
      </div>
    </div>
  );
};

export default OrderStatus;
