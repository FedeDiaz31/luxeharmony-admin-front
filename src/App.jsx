import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Team from "./routes/Team";
import Clients from "./routes/Clients";
import Orders from "./routes/Orders";
import Products from "./routes/Products";
import Layout from "./layout/Layout";
import Login from "./routes/Login";
import NoAuthRequire from "./hooks/NoAuthRequire";
import AuthRequire from "./hooks/AuthRequire";
import Brands from "./routes/Brands";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<NoAuthRequire />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AuthRequire />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/brands" element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
