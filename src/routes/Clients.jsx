import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/partials/Spinner";
import ClientsTableBody from "../components/partials/ClientsTableBody";
import ModalCreateClient from "../components/modals/ModalcreateClient";
import { useSelector } from "react-redux";

function Users() {
  document.title = ` LuxeHarmony | Clients `;
  const [clients, setClients] = useState(null);
  const user = useSelector((state) => state.user);
  const [searchValue, setSearchValue] = useState("");
  const [showCreateClientModal, setShowCreateClientModal] = useState(false);
  useEffect(
    () => {
      const getUsers = async () => {
        const response = await axios({
          headers: {
            Authorization: `Bearer ${user.admin.token}`,
          },
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/users/search`,
          data: { searchValue },
        });
        setClients(response.data);
      };
      getUsers();
    },
    [searchValue],
    [clients]
  );

  const handleCloseModalClient = () => {
    setShowCreateClientModal(false);
  };

  return (
    <>
      {showCreateClientModal && (
        <div>
          {" "}
          <ModalCreateClient
            handleCloseModalClient={handleCloseModalClient}
            setClients={setClients}
          />
        </div>
      )}
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
                placeholder="Search clients"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button>
                <img className="w-4" src="search-icon.png" alt="" />
              </button>
            </div>
            <button
              onClick={() => setShowCreateClientModal(true)}
              className="bg-bgSecondaryColor text-textPrimary px-3 h-8 rounded text-lg font-semibold"
            >
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
                return (
                  <ClientsTableBody
                    key={i}
                    client={client}
                    setClients={setClients}
                  />
                );
              })}
            </ul>{" "}
          </>
        ) : (
          <div className="w-full grid place-content-center h-[60vh]">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
