function TransactionsComponent({ item,onDelete  }) {
    const handleDelete = () => {
        onDelete(item.id);
      }
    return (
      <div className="item-transactions">
        <div className="transactions-box">
          <div className="item-box">
            <div className="item">
              <span>AM {item.time}</span>
              <span>{item.date}</span>
              <button>
                <img src="/img/Vector (19).png" alt="" />
              </button>
            </div>
            <div className="item">
              <img className="arrow" src="/img/Group 13.2 (1).png" alt="" />
              <span>{item.id}</span>
            </div>
          </div>
          <div className="item">
            <span>{item.price} {item.currency}</span>
            <button className="wait" onClick={handleDelete}>delete</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TransactionsComponent;