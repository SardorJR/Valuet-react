import axios from "axios";
import { useForm } from "react-hook-form";

function ModalCard({ isOpen, onClose }) {
  const { register, handleSubmit, reset } = useForm();
  let UserID=localStorage.getItem('id')
  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        userId: UserID 
      }
      await axios.post("http://localhost:8080/wallets", payload)
      reset();
      onClose();
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Добавить карту</h2>
        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="cardNumber">Номер карты:</label>
          <input
            type="number"
            id="cardNumber"
            placeholder="Введите номер карты"
            {...register("cardNumber", { required: true })}
          />

          <label htmlFor="expiryDate">Дата истечения:</label>
          <input
            type="text"
            id="expiryDate"
            placeholder="ММ/ГГ"
            {...register("expiryDate", { required: true })}
          />
          <label htmlFor="Amount"> Amount</label>
          <input
            type="number"
            id="cardAmount"
            placeholder="Amount"
            {...register("cardAmount", { required: true })}
          />
          <label htmlFor="currency">Валюта:</label>
          <select id="currency" {...register("currency", { required: true })}>
            <option value="">Выберите валюту</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>

          <button type="submit" className="modal-submit-btn">
            Добавить карту
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalCard;
