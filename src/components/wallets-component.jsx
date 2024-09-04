import { getRandomColor, LineCard } from "../charts/chart";
export const generateDifferentGradient = () => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
  
    const color1 = getRandomColor();
    const color2 = getRandomColor();
  
    return ` linear-gradient(237.07deg, ${color1} -8.06%, ${color2} 96.63%)`; 


  };

  function Wallets_component({item}) {
    const backgroundColor = generateDifferentGradient();
  
    return (
      <>
        <div
          style={{
            width: "292px",
            height: "148px",
            background: backgroundColor,
            borderRadius: "10px",
            padding: "10px",
            color: "#ffffff",
          }}
        >
          <div className="card">
            <div className="item-card">
              <span>{item.currency}</span>
            </div>
            <div className="box">
              <div className="item-box">
                <span>5 248 USD</span>
                <p>+2,59%</p>
              </div>
              <div className="item-box">
                <div style={{ background: generateDifferentGradient() }}  className="out">
                  <button style={{ background: generateDifferentGradient() }} className="in">
                    <img src="/img/Vector (18).png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "65px" }}>
            <LineCard />
          </div>
        </div>
      </>
    );
  }
  
  export default Wallets_component;
