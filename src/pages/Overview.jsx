import React from "react";
import { DoughnutChart, LineChart1, LineChart2 } from "../charts/chart";

// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Filler
// } from "chart.js";
// import { Doughnut, Line } from "react-chartjs-2";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Filler
// );

// const data = {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [300, 100, 50],
//       backgroundColor: ["#018FFF","#FAD679", "white" ],
//       borderColor: "transparent",
//       borderWidth: 2,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false },
//     tooltip: { enabled: false },
//   },

//   cutout: "70%",
//   layout: { padding: 0 },
// };
//  const data2 = {
//         labels: ['2', '4', '6', '8', '10', '12', '14', '16'],
//         datasets: [
//             {
//                 label: 'Spending',
//                 data: [2000, 2600, 2500, 3200, 3100, 4200, 4400, 5743.35], // Subtle waves in data
//                 fill: true,
//                 backgroundColor: (context) => {
//                     const chart = context.chart;
//                     const { ctx, chartArea } = chart;
//                     if (!chartArea) {
//                         return null;
//                     }
//                     const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
//                     gradient.addColorStop(0, 'rgba(52, 152, 219, 0.5)');
//                     gradient.addColorStop(1, 'rgba(52, 152, 219, 0)');
//                     return gradient;
//                 },
//                 borderColor: '#3498db',
//                 borderWidth: 3,
//                 tension: 0.3, // Slight wave effect
//                 pointBackgroundColor: (context) => {
//                     return context.dataIndex === 6 ? '#3498db' : 'transparent';
//                 },
//                 pointBorderColor: (context) => {
//                     return context.dataIndex === 6 ? '#ecf0f1' : 'transparent';
//                 },
//                 pointBorderWidth: (context) => {
//                     return context.dataIndex === 6 ? 4 : 0;
//                 },
//                 pointRadius: (context) => {
//                     return context.dataIndex === 6 ? 7 : 0;
//                 },
//                 pointHoverRadius: 8,
//                 pointHitRadius: 30,
//                 pointStyle: 'circle',
//             },
//         ],
//     };

//     const options2 = {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             x: {
//                 grid: {
//                     display: false,
//                 },
//                 ticks: {
//                     color: '#ecf0f1',
//                     font: {
//                         size: 14,
//                     },
//                 },
//             },
//             y: {
//                 display: false,
//             },
//         },
//         plugins: {
//             legend: {
//                 display: false,
//             },
//             tooltip: {
//                 enabled: true,
//                 backgroundColor: '#2c3e50',
//                 titleColor: '#ecf0f1',
//                 bodyColor: '#ecf0f1',
//                 borderColor: '#3498db',
//                 borderWidth: 1,
//             },
//         },
//     };
// const data3 = {
//     labels: [
//       "NOV 15",
//       "NOV 16",
//       "NOV 17",
//       "NOV 18",
//       "NOV 19",
//       "NOV 20",
//       "NOV 21",
//       "NOV 22",
//     ],
//     datasets: [
//       {
//         label: "Market",
//         data: [2000, 4000, 6000, 8000, 6000, 9000, 7000, 10000],
//         fill: false, // Убираем заполнение
//         borderColor: "rgba(0, 150, 255, 1)", // Цвет линии
//         borderWidth: 2,
//         tension: 0.4,
//       },
//     ],
//   };

//   const option3 = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         beginAtZero: true,
//         grid: {
//           display : false
//         },
//         ticks: {
//           color: "#54669C", // Цвет текста меток оси X
//         }
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: "rgba(0, 255, 255, 0.08)",
//         },
//         ticks: {
//           color: "#54669C", // Цвет текста меток оси Y
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         mode: "index",
//         intersect: false,
//       },
//       // Custom plugin to draw gradient background
//       beforeDraw: (chart) => {
//         const ctx = chart.ctx;
//         const { width, height } = chart;

//         // Create gradient
//         const gradient = ctx.createLinearGradient(0, 0, 0, height);
//         gradient.addColorStop(0, 'rgba(27, 18, 78, 0.2)');
//         gradient.addColorStop(1, '#0F0B38');

//         // Fill background
//         ctx.save();
//         ctx.fillStyle = gradient;
//         ctx.fillRect(0, 0, width, height);
//         ctx.restore();
//       }
//     },
//   };

function Overview() {
  return (
    <div className="container">
      <div className="conts">
        <div className="left">
          <span>Overview</span>
          <a href="#">25 October, Sunday</a>
        </div>
        <div className="right">
          <button>Add widget</button>
        </div>
      </div>
      <div className="box">
        <div className="balance_box">
          <span>Balance</span>
          <div className="chart">
            <DoughnutChart />
            <div className="balance">
            <h3>Balance</h3>
            <h4>$8,200</h4>
          </div>
          </div>
        
          <div className="crypto-legend">
            <div className="crypto-item">
              <span className="dot ethereum"></span>
              <span>Ethereum</span>
              <span className="percentage1"><b>18%</b></span>
            </div>
            <div className="crypto-item">
              <span className="dot bitcoin"></span>
              <span>Bitcoin</span>
              <span className="percentage2"><b>64%</b></span>
            </div>
            <div className="crypto-item">
              <span className="dot dash"></span>
              <span>Dash</span>
              <span className="percentage3"><b>18%</b></span>
            </div>
          </div>
        </div>
        <div className="spending_box">
          <div className="spend">
            <span>Spending</span>
            <select>
              <option value="January">January</option>
            </select>
          </div>
          <h4>$5,743.35</h4>
          <p>Total spending</p>
          <div
            className="chart2"
            style={{ width: "230px", height: "200px", marginLeft: "-8px" }}
          >
            <LineChart1 />
          </div>
        </div>
        <div className="card_box">
          <div className="card">
            <span>Bitcoin</span>
            <div className="flex">
              <div className="card-item">
                <div className="circle">
                  <div className="circle2">
                    <img src="/img/Vector (18).png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card-item2">
                <h2>600 BTC</h2>
                <h3>$30,000,000</h3>
              </div>
              <div className="card-item3">
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <span>Bitcoin</span>
            <div className="flex">
              <div className="card-item">
                <div className="circle">
                  <div className="circle2">
                    <img src="/img/Vector (18).png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card-item2">
                <h2>600 BTC</h2>
                <h3>$30,000,000</h3>
              </div>
              <div className="card-item3">
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <span>Bitcoin</span>
            <div className="flex">
              <div className="card-item">
                <div className="circle">
                  <div className="circle2">
                    <img src="/img/Vector (18).png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card-item2">
                <h2>600 BTC</h2>
                <h3>$30,000,000</h3>
              </div>
              <div className="card-item3">
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <span>Bitcoin</span>
            <div className="flex">
              <div className="card-item">
                <div className="circle">
                  <div className="circle2">
                    <img src="/img/Vector (18).png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card-item2">
                <h2>600 BTC</h2>
                <h3>$30,000,000</h3>
              </div>
              <div className="card-item3">
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
                <div className="elem">
                  <img className="finans" src="/img/Frame.png" alt="" />
                  <div className="dannie">
                    <h5>$1 200= 0,074 BTC</h5>
                    <p>1 BTC = $6 542, 35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="charts_box">
        <div className="texts">
          <div className="left">
            <h3>Market</h3>
            <select >
              <option value="Bitkoin">Bitkoin</option>
            </select>
          </div>
          <div className="right">
            <select name="" id="">
              <option value="November">November</option>
            </select>
          </div>
        </div>
        <div className="charts3">
          <LineChart2 />
        </div>
      </div>
    </div>
  );
}

export default Overview;
