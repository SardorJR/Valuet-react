import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Wallets_component from "../components/wallets-component";
import ModalCard from "../modal/moda_card";
import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart2 } from "../charts/chart";

function Wallets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wallets, setWallets] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await axios.get("http://localhost:8080/wallets");
        setWallets(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchWallets();
  }, []);
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
            <LineChart2 />
          </div>
          <div className="reacent-transactions">
            <div className="recent">
              <h2>RECENT TRANSACTIONS</h2>
            </div>
            <div className="transaction-item">
            <div className="recent-box">
            <div className="transaction-time">AM 01:16</div>
            </div>
              <div className="transaction-details">
                <span>Received BitCoin</span>
                <small>From Elon Musk</small>
              </div>
              <div className="transaction-amount received">+ 4,800</div>
            </div>
            <div className="transaction-item">
            <div className="recent-box">
            <div className="transaction-time">AM 01:16</div>
            </div>
              <div className="transaction-details">
                <span>Received BitCoin</span>
                <small>From Elon Musk</small>
              </div>
              <div className="transaction-amount received">+ 4,800</div>
            </div>
            <div className="transaction-item">
            <div className="recent-box">
            <div className="transaction-time">AM 01:16</div>
            </div>
              <div className="transaction-details">
                <span>Received BitCoin</span>
                <small>From Elon Musk</small>
              </div>
              <div className="transaction-amount received">+ 4,800</div>
            </div>
            <div className="transaction-item">
            <div className="recent-box">
            <div className="transaction-time">AM 01:16</div>
            </div>
              <div className="transaction-details">
                <span>Received BitCoin</span>
                <small>From Elon Musk</small>
              </div>
              <div className="transaction-amount received">+ 4,800</div>
            </div>
            <div className="transaction-item">
            <div className="recent-box">
            <div className="transaction-time">AM 01:16</div>
            </div>
              <div className="transaction-details">
                <span>Received BitCoin</span>
                <small>From Elon Musk</small>
              </div>
              <div className="transaction-amount received">+ 4,800</div>
            </div>
            <div className="transaction-item">
            <div className="recent-box">
            <div className="transaction-time">AM 01:16</div>
            </div>
              <div className="transaction-details">
                <span>Received BitCoin</span>
                <small>From Elon Musk</small>
              </div>
              <div className="transaction-amount received">+ 4,800</div>
            </div>
          </div>
        </div>
      </div>
      <ModalCard isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Wallets;
