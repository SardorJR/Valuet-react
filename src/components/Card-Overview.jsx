function Card_Overview({item}) {
    return ( 
        <>
          <div className="card">
              <span>{item.currency}</span>
              <div className="flex">
                <div className="card-item">
                  <div className="circle">
                    <div className="circle2">
                      <img src="/img/Vector (18).png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card-item2">
                  <h2>{item.cardAmount} {item.currency}</h2>
                  <h3>${item.cardAmount}</h3>
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
        </>
     );
}

export default Card_Overview;