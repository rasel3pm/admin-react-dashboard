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
import { Bar, Line } from "react-chartjs-2";

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
          borderColor: "rgb(255, 99, 150)",
          backgroundColor: "rgba(255, 99, 132, 0.4)",
        },
      ],
    });

    setChartOption({
      //   responsive: true,
      //   plugins: {
      //     legend: {
      //       position: "top",
      //     },
      //     title: {
      //       display: true,
      //       text: "Line Chart",
      //     },
      //   },
      type: "line",
      options: {
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: true,
            text: (ctx) =>
              "drawTime: " + ctx.chart.options.plugins.filler.drawTime,
          },
        },
        pointBackgroundColor: "#fff",
        radius: 10,
        interaction: {
          intersect: false,
        },
      },
    });
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#18191a",
          padding: "10px",
        }}
      >
        <Bar data={dataList} />
      </div>
    </div>
  );
};

export default OrderStatus;
