import CardDashboard from "../components/partials/CardDashboard";
import "../animation/Animations.css";

function Dashboard() {
  return (
    <div className="p-5 fade-in">
      <div className="px-10">
        <h3 className="font-semibold text-2xl">Dashborad</h3>
      </div>
      <div className="mt-5">
        <h4 className="my-5 ml-10 font-semibold">Last 30 days</h4>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 px-10 ">
          <CardDashboard title={"Montly Sales"} value={"450.980"} />
          <CardDashboard title={"Conversion Rate"} value={"96.12%"} />
          <CardDashboard title={"Avg. Click Rate"} value={"24.53%"} />
        </div>
      </div>
      <div className="mt-5">
        <h4 className="my-5 ml-10 font-semibold">Last 10 orders</h4>
        {/*         <div>
          {orders.map((order, i) => {
            return <Order key={i} order={order} />;
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
