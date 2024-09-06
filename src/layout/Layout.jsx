import { useEffect } from "react";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("userEmail");
    if (!token) {
      navigate("/signup");
    }
  }, [navigate]);
  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  }
  let name=localStorage.getItem('userName')
  return (
    <>
      <div className="leftsideBar">
        <h3>valuet</h3>
        <nav>
          <Link to="/Overview">
            <div
              className={`item ${
                location.pathname === "/Overview" ? "active" : ""
              }`}
            >
              <img
                src={
                  location.pathname === "/Overview"
                    ? "/img/Vector.svg"
                    : "/img/Vector (20).png"
                }
                alt="Overview"
              />
              <span
                style={{
                  color:
                    location.pathname === "/Overview" ? "white" : "#616A8B",
                }}
              >
                Overview
              </span>
            </div>
          </Link>
          <Link to="/wallets">
            <div
              className={`item ${
                location.pathname === "/wallets" ? "active" : ""
              }`}
            >
              <img
                src={
                  location.pathname === "/wallets"
                    ? "/img/Vector (21).png"
                    : "/img/Group.svg"
                }
                alt="Wallets"
              />
              <span
                style={{
                  color: location.pathname === "/wallets" ? "white" : "#616A8B",
                }}
              >
                Wallets
              </span>
            </div>
          </Link>
          <Link to="/transactions">
            <div
              className={`item ${
                location.pathname === "/transactions" ? "active" : ""
              }`}
            >
              <img
                src={
                  location.pathname === "/transactions"
                    ? "/img/Group (9).png"
                    : "/img/Group (1).svg"
                }
                alt="Transactions"
              />
              <span
                style={{
                  color:
                    location.pathname === "/transactions" ? "white" : "#616A8B",
                }}
              >
                Transactions
              </span>
            </div>
          </Link>
          <Link to="/exchange">
            <div
              className={`item ${
                location.pathname === "/exchange" ? "active" : ""
              }`}
            >
              <img
                src={
                  location.pathname === "/exchange"
                    ? "/img/Group 6 (2).png"
                    : "/img/Group 6.svg"
                }
                alt="Exchange"
              />
              <span
                style={{
                  color:
                    location.pathname === "/exchange" ? "white" : "#616A8B",
                }}
              >
                Exchange
              </span>
            </div>
          </Link>
        </nav>
        <div className="bottom">
          <div className="elem">
            <button></button>
            <a href="#">{name}</a>
          </div>
         
          <div className="elem" onClick={handleLogout}>
            <img src="/img/Group (2).svg" alt="" />
            <a className="logout" href="#">
              Log out
            </a>
          </div>
         
        </div>
      </div>
      <header>
        <div className="left">
          <input type="text" />
        </div>
        <div className="right">
          <img src="/img/Group 2.svg" alt="" />
          <img className="message" src="/img/Group 3.svg" alt="" />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
