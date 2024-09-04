import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Overview from "./pages/Overview";
import Layout from "./layout/layout";
import Wallets from "./pages/Wallets";
import Exchange from "./pages/Exchange";
import Transictions from "./pages/Transactions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Overview" element={<Overview />} />
            <Route path="/Wallets" element={<Wallets />} />
            <Route path="/Exchange" element={<Exchange />} />
            <Route path="/Transactions" element={<Transictions />} />
          </Route>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
