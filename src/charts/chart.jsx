import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

// Регистрация компонентов Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

// Функция для генерации случайного цвета
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Компонент Doughnut Chart
export const DoughnutChart = ({ cardAmount, labels }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: cardAmount,
        backgroundColor: ["#018FFF", "#FAD679", "white"],
        borderColor: "transparent",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500, // Время анимации в миллисекундах
      easing: 'easeOutBounce', // Тип анимации
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    cutout: "70%",
    layout: { padding: 0 },
  };

  return <Doughnut data={data} options={options} />;
};

// Компонент Line Chart 1
export const LineChart1 = ({totalTransaction}) => {
  const data = {
    labels: ["2", "4", "6", "8", "10", "12", "14", "16"],
    datasets: [
      {
        label: "Spending",
        data: totalTransaction,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
          gradient.addColorStop(0, "rgba(52, 152, 219, 0.5)");
          gradient.addColorStop(1, "rgba(52, 152, 219, 0)");
          return gradient;
        },
        borderColor: "#3498db",
        borderWidth: 3,
        tension: 0.3,
        pointBackgroundColor: (context) => {
          return context.dataIndex === 6 ? "#3498db" : "transparent";
        },
        pointBorderColor: (context) => {
          return context.dataIndex === 6 ? "#ecf0f1" : "transparent";
        },
        pointBorderWidth: (context) => {
          return context.dataIndex === 6 ? 4 : 0;
        },
        pointRadius: (context) => {
          return context.dataIndex === 6 ? 7 : 0;
        },
        pointHoverRadius: 8,
        pointHitRadius: 30,
        pointStyle: "circle",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500, // Время анимации в миллисекундах
      easing: 'easeInOutQuad', // Тип анимации
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#ecf0f1", font: { size: 14 } },
      },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#2c3e50",
        titleColor: "#ecf0f1",
        bodyColor: "#ecf0f1",
        borderColor: "#3498db",
        borderWidth: 1,
      },
    },
  };

  return <Line data={data} options={options} />;
};

// Компонент Line Chart 2
export const LineChart2 = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Market",
        data: data,
        fill: false,
        borderColor: "rgba(0, 150, 255, 1)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeInOutQuad',
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { color: "#54669C" },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(0, 255, 255, 0.08)" },
        ticks: { color: "#54669C" },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const { width, height } = chart;

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "rgba(27, 18, 78, 0.2)");
        gradient.addColorStop(1, "#0F0B38");

        ctx.save();
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
// Компонент Line Card
export function LineCard() {
  const borderColor = getRandomColor(); // Генерация случайного цвета

  const data = {
    labels: ["", "", "", "", "", "", "", "", ""], // Добавьте больше меток при необходимости
    datasets: [
      {
        data: [3, 7, 2, 8, 4, 10, 3, 6, 2], // Данные для графика
        borderColor: borderColor, // Цвет линии
        borderWidth: 3, // Толщина линии
        fill: false,
        tension: 0, // Острые углы
        pointRadius: 0, // Скрыть точки
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500, // Время анимации в миллисекундах
      easing: 'easeInOutQuad', // Тип анимации
    },
    plugins: {
      legend: {
        display: false, // Скрыть легенду
      },
    },
    scales: {
      x: {
        display: false, // Скрыть метки оси X
      },
      y: {
        display: false, // Скрыть метки оси Y
      },
    },
  };

  return <Line data={data} options={options} />;
}
