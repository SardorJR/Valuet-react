import { Outlet } from "react-router-dom";

function Layout() {
    return ( 
        <>
          <div className="leftsideBar">
            <h3>valuet</h3>
            <nav>
                <div className="item active">
                    <img src="/img/Vector.svg" alt="" />
                    <span>Overview</span>
                </div>
                <div className="item">
                    <img src="/img/Group.svg" alt="" />
                    <span>Wallets</span>
                </div>
                <div className="item">
                    <img src="/img/Group (1).svg" alt="" />
                    <span>Transictions</span>
                </div>
                <div className="item">
                    <img src="/img/Group 6.svg" alt="" />
                    <span>Exchange</span>
                </div>
            </nav>
            <div className="bottom">
                <div className="elem">
                   <button></button>
                    <a href="#">Mike Jakson</a>
                </div>
                <div className="elem">
                    <img src="/img/Group (2).svg" alt="" />
                    <a className="logout" href="#">Log out</a>
                </div>
            </div>
        </div>
        <header>
            <div className="left">
                <input type="text" />
            </div>
            <div className="right">
                <img src="/public/img/Group 2.svg" alt="" />
                <img className="message" src="/public/img/Group 3.svg" alt="" />
            </div>
        </header>
        <Outlet/>
        </>
     );
}

export default Layout;