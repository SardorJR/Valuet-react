import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Wallets_component from "../components/wallets-component";
import ModalCard from "../modal/moda_card";
import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart2 } from "../charts/chart";
import RecentTransactions from "../components/recent-transactions";
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
function Wallets() {
  const [selectedMonth, setSelectedMonth] = useState("November");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [chartData, setChartData] = useState(
    chartsData[selectedMonth][selectedCurrency]
  );
  useEffect(() => {
    setChartData(chartsData[selectedMonth][selectedCurrency]);
  }, [selectedMonth, selectedCurrency]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [transactions, setTransactions] = useState([])
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    
    const fetchWallets = async () => {
      try {
        let UserID = localStorage.getItem('id')
        const response = await axios.get(`http://localhost:8080/wallets?userId=${UserID}`);
        setWallets(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchWallets()
    const fetchTransactions = async () => {
      try {
        let UserID = localStorage.getItem('id')
        const response = await axios.get(`http://localhost:8080/transactions?userId=${UserID}`);
        setTransactions(response.data)
      } catch (error) {
        console.error("Ошибка при получении данных:", error)
      }
    }
    fetchTransactions()
  }, [])
  
  return (
    <>
      <div className="container-wallets">
        <div className="text-wallets">
          <span>Wallets</span>
          <button onClick={openModal}>Add Wallet</button>
        </div>
        <div className="wallets">
          {wallets.map((item, index) => (
            <Wallets_component key={index} item={item} />
          ))}
        </div>
        <div className="wraps">
          <div className="charts4">
         <LineChart2 labels={chartData.labels} data={chartData.data}/>
          </div>
          <div className="reacent-transactions">
            <div className="recent">
              <h2>RECENT TRANSACTIONS</h2>
            </div>
            <div className="box">
           {transactions.map(item=><RecentTransactions item={item} key={item.id}/>)}
         
          </div>
          </div>
        </div>
      </div>
      <ModalCard isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Wallets;
