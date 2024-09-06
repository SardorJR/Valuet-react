import React, { useEffect, useState } from "react";
import { DoughnutChart, LineChart1, LineChart2 } from "../charts/chart";
import { Helmet } from "react-helmet";
import Card_Overview from "../components/Card-Overview";
import axios from "axios";
const chartsData = {
  November: {
    USD: {
      labels: [
        "NOV 01",
        "NOV 02",
        "NOV 03",
        "NOV 04",
        "NOV 05",
        "NOV 06",
        "NOV 07",
        "NOV 08",
      ],
      data: [2000, 4000, 6000, 8000, 6000, 9000, 7000, 10000],
    },
    EUR: {
      labels: [
        "NOV 01",
        "NOV 02",
        "NOV 03",
        "NOV 04",
        "NOV 05",
        "NOV 06",
        "NOV 07",
        "NOV 08",
      ],
      data: [1800, 3600, 5400, 7200, 5400, 8100, 6300, 9000],
    },
  },
  December: {
    USD: {
      labels: [
        "DEC 01",
        "DEC 02",
        "DEC 03",
        "DEC 04",
        "DEC 05",
        "DEC 06",
        "DEC 07",
        "DEC 08",
      ],
      data: [2500, 3500, 5500, 7000, 6500, 8000, 6000, 9000],
    },
    EUR: {
      labels: [
        "DEC 01",
        "DEC 02",
        "DEC 03",
        "DEC 04",
        "DEC 05",
        "DEC 06",
        "DEC 07",
        "DEC 08",
      ],
      data: [2250, 3150, 4950, 6300, 5850, 7200, 5400, 8100],
    },
  },
 
};
function Overview() {
  const [wallets, setWallets] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("November");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [chartData, setChartData] = useState(
    chartsData[selectedMonth][selectedCurrency]
  );
  useEffect(() => {
    setChartData(chartsData[selectedMonth][selectedCurrency]);
  }, [selectedMonth, selectedCurrency]);
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  useEffect(() => {
    const fetchWallets = async () => {
      try {
        let UserID = localStorage.getItem("id");
        const response = await axios.get(
          `http://localhost:8080/wallets?userId=${UserID}`
        );
        setWallets(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchWallets();
  }, []);
  const formatNumberWithEllipsis = (number) => {
    const value = parseFloat(number);

    const numStr = value.toString();
    if (numStr.length > 6) {
      return `${numStr.slice(0, 4)}...`;
    } else {
      return value.toLocaleString();
    }
  };
  const totalAmount = wallets.reduce(
    (sum, wallet) => sum + parseFloat(wallet.cardAmount),
    0
  )
  const cardAmounts = wallets.map((wallet) => wallet.cardAmount);
  const currencies = wallets.map((wallet) => wallet.currency);
  let UserID = localStorage.getItem("id");
  const [totalTransactions, setTotalTransactions] = useState(0)
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/transactions?userId=${UserID}`);
        const transactions = response.data
        const total = transactions.reduce((sum, transaction) => {
          return sum + parseFloat(transaction.price);
        }, 0);
        setTotalTransactions(total);
      } catch (error) {
        console.error("Ошибка при получении транзакций:", error);
      }
    }

    fetchTransactions();
  }, [UserID])
  return (
    <>
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
              <DoughnutChart cardAmount={cardAmounts} labels={currencies} />
              <div className="balance">
                <h3>Balance</h3>
                <h4>$ {formatNumberWithEllipsis(totalAmount)}</h4>
              </div>
            </div>

            <div className="crypto-legend">
              <div className="crypto-item">
                <span className="dot ethereum"></span>
                <span>Ethereum</span>
                <span className="percentage1">
                  <b>18%</b>
                </span>
              </div>
              <div className="crypto-item">
                <span className="dot bitcoin"></span>
                <span>Bitcoin</span>
                <span className="percentage2">
                  <b>64%</b>
                </span>
              </div>
              <div className="crypto-item">
                <span className="dot dash"></span>
                <span>Dash</span>
                <span className="percentage3">
                  <b>18%</b>
                </span>
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
            <h4>${totalTransactions.toFixed(3)}</h4>
            <p>Total spending</p>
            <div
              className="chart2"
              style={{ width: "230px", height: "200px", marginLeft: "-8px" }}
            >
             <LineChart1 totalTransaction={totalTransactions} />
            </div>
          </div>
          <div className="card_box">
            {wallets.slice(0, 4).map((item, index) => (
              <Card_Overview key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="charts_box">
          <div className="texts">
            <div className="left">
              <h3>Market</h3>
              <select onChange={handleMonthChange} value={selectedMonth}>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="right">
              <select onChange={handleCurrencyChange} value={selectedCurrency}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
          <div className="charts3">
          <LineChart2 labels={chartData.labels} data={chartData.data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
