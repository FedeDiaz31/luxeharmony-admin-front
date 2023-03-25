import CardDashboard from "../components/partials/CardDashboard";
import OrderTableBody from "../components/partials/OrderTableBody";
import { useSelector } from "react-redux";
import axios from "axios";
import "../animation/Animations.css";
import { useEffect, useState } from "react";
import Spinner from "../components/partials/Spinner";

function Dashboard() {
  const [orders, setOrders] = useState(null);
  const user = useSelector((state) => state.user);
  document.title = ` LuxeHarmony | Dashborad `;

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.admin.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/orders/last`,
      });
      setOrders(response.data);
    };
    getOrders();
  }, []);

  return (
    <div className="p-5 fade-in px-5 tablet:px-10">
      <div className="">
        <h3 className="font-semibold text-2xl">Dashborad</h3>
      </div>
      <div className="mt-5">
        <h4 className="my-5 tablet:ml-10 font-semibold">Last 30 days</h4>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 ">
          <CardDashboard title={"Montly Sales"} value={"450.980"} />
          <CardDashboard title={"Conversion Rate"} value={"96.12%"} />
          <CardDashboard title={"Avg. Click Rate"} value={"24.53%"} />
        </div>
      </div>
      <div className="mt-5">
        <h4 className="my-5 tablet:ml-10 font-semibold">Last 10 orders</h4>
        <div className="flex flex-col gap-1">
          {!orders ? (
            <div className="w-full flex justify-center mt-24">
              <Spinner />
            </div>
          ) : (
            orders.map((order, i) => {
              return <OrderTableBody key={i} order={order} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
