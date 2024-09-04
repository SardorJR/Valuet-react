import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '69fb9038a6f06b24e9a97a9e5c0857fb';

const getExchangeRates = async () => {
  try {
    const response = await axios.get(`http://data.fixer.io/api/latest`, {
      params: {
        access_key: apiKey,
      },
    });

    if (response.data.success) {
      return response.data.rates;
    } else {
      console.error("Error fetching exchange rates:", response.data.error);
      return null;
    }
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
};

function Exchange() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      const rates = await getExchangeRates()
      if (rates) {
        setExchangeRates(rates);
      }
    };

    fetchRates();
  }, []);

  const handleExchange = () => {
    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const fromRate = exchangeRates[fromCurrency]
      const toRate = exchangeRates[toCurrency]
      const convertedAmount = (amount / fromRate) * toRate;
      setResult(convertedAmount.toFixed(2))
    }
  };

  return (
    <div className="container-wallets">
      <div className="text-wallets">
        <span>Exchange</span>
      </div>

      <div className="exchange-box">
        <div className="elem">
          <h4>From</h4>
          <div className="change-box">
            <div className="flex">
              <select
                className="change-select"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <div className="out">
                <button className="in">
                  <img
                    src="/img/3890943_bag_cash_currency_dollar_money_icon.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="elem2">
          <h4>To</h4>
          <div className="change-box2">
            <div className="flex">
              <select
                className="change-select"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <div className="out">
                <button className="in">
                  <img
                    src="/img/3890943_bag_cash_currency_dollar_money_icon.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <input type="number" value={result} readOnly />
          </div>
        </div>
      </div>
      <div className="chn">
        <span>{amount}</span>
        <img src="/img/Arrow.png" alt="" />
        <span>{result}</span>
      </div>
      <center>
        <button className="ex" onClick={handleExchange}>Exchange</button>
      </center>
    </div>
  );
}

export default Exchange;