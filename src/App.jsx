import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Team from "./routes/Team";
import Clients from "./routes/Clients";
import Orders from "./routes/Orders";
import Products from "./routes/Products";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
