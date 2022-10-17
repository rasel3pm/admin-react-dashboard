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
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
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
        <Doughnut data={dataList} />
      </div>
    </div>
  );
};

export default GoalChart;
