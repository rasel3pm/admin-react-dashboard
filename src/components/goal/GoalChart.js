import { useEffect, useState } from "react";
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
import { Doughnut } from "react-chartjs-2";

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
const GoalChart = () => {
  const [dataList, setDataList] = useState({
    datasets: [],
  });

  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    setDataList({
      labels: ["Laptop", "Mobile", "Ipad"],
      datasets: [
        {
          label: "Sels",
          data: [40, 80, 100],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
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
      <div style={{ width: "250px" }}>
        <Doughnut data={dataList} chartOption={chartOption} />
      </div>
    </div>
  );
};

export default GoalChart;
