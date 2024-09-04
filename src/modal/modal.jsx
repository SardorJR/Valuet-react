import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function ModalTransactions({ isOpen, onClose, onSubmit }) {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const [currentTime, setCurrentTime] = useState("");
  
   
    const getCurrentTime = () => {
      const now = new Date();
      return now.toTimeString().slice(0, 5)
    }

    const generateId = () => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let id = "";
      for (let i = 0; i < 32; i++) { 
        id += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return id;
    };
  
    useEffect(() => {
      setCurrentTime(getCurrentTime());
    }, [])
  
    const submitForm = (data) => {
      data.time = currentTime
      data.id = generateId()
      onSubmit(data);
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>New Transaction</h2>
          <form onSubmit={handleSubmit(submitForm)}>
            <label>
              Date:
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && <span>{errors.date.message}</span>}
            </label>
            <label>
              Time:
              <input
                type="time"
                value={currentTime} 
                readOnly
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                placeholder="Enter price"
                step="0.01"
                {...register("price", { required: "Price is required" })}
              />
              {errors.price && <span>{errors.price.message}</span>}
            </label>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
      </div>
    );
  }
  
  export default ModalTransactions;