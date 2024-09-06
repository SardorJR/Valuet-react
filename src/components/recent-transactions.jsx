function RecentTransactions({item}) {
  return (
    <div className="transaction-item">
      <div className="recent-box">
        <div className="transaction-time">AM {item.time}</div>
      </div>
      <div className="transaction-details">
        <span>{item.currency}</span>
        <small>From Elon Musk</small>
      </div>
      <div className="transaction-amount received">+ {item.price}</div>
    </div>
  );
}

export default RecentTransactions;
