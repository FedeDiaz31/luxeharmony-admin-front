import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/partials/Spinner";
import ClientsTableBody from "../components/partials/ClientsTableBody";
import { useSelector } from "react-redux";

function Users() {
  const [clients, setClients] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.admin.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/users`,
      });
      setClients(response.data);
    };
    getUsers();
  }, []);

  return (
    <div className="p-5  fade-in">
      <div className="flex w-full justify-between items-center gap-3 px-10">
        <h3 className="font-semibold text-2xl">Clientes</h3>
        <div className="flex gap-3 items-center">
          <div className="bg-bgPrimaryColor px-2 py-1 rounded flex items-center">
            <input
              className="rounded w-72 mr-2 py-1 px-1"
              type="text"
              name=""
              id=""
              placeholder="Buscar productos"
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

      {clients ? (
        <>
          <div className="flex font-semibold text-lg px-5 mt-5">
            <div className="w-full">Full name</div>
            <div className="w-full text-end hidden laptop:block">Email</div>
            <div className="w-full text-end">Orders</div>
            <div className="w-full text-end hidden laptop:block">
              Created at
            </div>
            <div className="w-full"></div>
          </div>
          <ul className="mt-3 pb-4 grid gap-1">
            {clients.map((client, i) => {
              return <ClientsTableBody key={i} client={client} />;
            })}
          </ul>{" "}
        </>
      ) : (
        <div className="w-full grid place-content-center h-[60vh]">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Users;
