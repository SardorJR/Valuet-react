import { useEffect, useState } from "react";
import ModalTransactions from "../modal/modal";
import Transactions_components from "../components/transactions-component";
import axios from "axios";

function Transictions() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const userId = localStorage.getItem("id");

  const handleAddTransaction = (transaction) => {
    const transactionWithUserId = { ...transaction, userId };

    axios
      .post("http://localhost:8080/transactions", transactionWithUserId)
      .then((response) => {
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          response.data,
        ]);
      })
      .catch((error) => {
        console.error("Error adding transaction:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/transactions?userId=${userId}`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, [userId]);

  const handleDeleteTransaction = (id) => {
    axios
      .delete(`http://localhost:8080/transactions/${id}`)
      .then(() => {
        setTransactions((prevTransactions) =>
          prevTransactions.filter((transaction) => transaction.id !== id)
        )
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  }
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className="container-wallets">
        <div className="text-wallets">
          <span>Transactions</span>
          <button onClick={toggleModal}>Add Transactions</button>
        </div>
        <div className="transactions">
          {transactions.map((transaction) => (
            <Transactions_components
              key={transaction.id}
              item={transaction}
              onDelete={handleDeleteTransaction}
            />
          ))}
        </div>
      </div>
      <ModalTransactions
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSubmit={handleAddTransaction}
      />
    </>
  );
}

export default Transictions;
