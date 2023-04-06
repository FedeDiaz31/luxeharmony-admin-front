import OrderTableBody from "../components/partials/OrderTableBody";
import { useSelector } from "react-redux";
import "../animation/Animations.css";
import Spinner from "../components/partials/Spinner";

function Orders() {
  document.title = ` LuxeHarmony | Orders `;
  const orders = useSelector((state) => state.orders);

  return (
    <>
      <div className="p-5 fade-in">
        <div className="flex w-full justify-between items-center gap-3 px-10">
          <h3 className="font-bold text-2xl">Orders</h3>
          <div className="flex gap-3 items-center">
            <div className="bg-bgPrimaryColor px-2 py-1 rounded flex items-center">
              <input
                className="rounded w-72 mr-2 py-1 px-1"
                type="text"
                name=""
                id=""
                placeholder="Search orders"
              />
              <button>
                <img className="w-4" src="search-icon.png" alt="" />
              </button>
            </div>
            <button className="bg-bgSecondaryColor text-textPrimary px-3 h-8 rounded text-lg font-semibold">
              +
            </button>
          </div>
        </div>
        {orders ? (
          <ul className="mt-3 grid gap-1 rounded-lg pb-4">
            {orders.map((order, i) => {
              return <OrderTableBody key={i} order={order} />;
            })}
          </ul>
        ) : (
          <div className="w-full flex justify-center mt-24">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
