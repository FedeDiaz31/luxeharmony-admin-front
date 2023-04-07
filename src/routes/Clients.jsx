import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/partials/Spinner";
import ClientsTableBody from "../components/partials/ClientsTableBody";
/* import ModalCreateClient from "../components/modals/ModalCreateClient"; */
import { useSelector, useDispatch } from "react-redux";
import { addClients } from "../redux/clientsReducer";

import slugify from "slugify";

function Users() {
  document.title = ` LuxeHarmony | Clients `;
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients);
  const user = useSelector((state) => state.user);
  const [searchValue, setSearchValue] = useState("");
  const [showCreateClientModal, setShowCreateClientModal] = useState(false);
  const [searchClients, setSearchClients] = useState([]);

  const handleCloseModalClient = () => {
    setShowCreateClientModal(false);
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.admin.token}`,
        },
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/users/search`,
        data: { searchValue },
      });
      dispatch(addClients(response.data));
    };
    getUsers();
  }, []);

  useEffect(() => {
    const filterClients = clients.filter(
      (client) =>
        slugify(client.firstname)
          .toLowerCase()
          .includes(slugify(searchValue.toLowerCase())) ||
        slugify(client.lastname)
          .toLowerCase()
          .includes(slugify(searchValue.toLowerCase()))
    );

    setSearchClients(filterClients);
  }, [searchValue, clients]);

  return (
    <>
      {/*  {showCreateClientModal && (
        <div>
          <ModalCreateClient handleCloseModalClient={handleCloseModalClient} />
        </div>
      )} */}
      <div className="p-5  fade-in">
        <div className="grid tablet:flex w-full justify-center tablet:justify-between items-center gap-3 tablet:px-10">
          <h3 className="font-semibold text-2xl">Clientes</h3>
          <div className="flex gap-3 items-center">
            <div className="bg-bgPrimaryColor px-2 py-1 rounded flex items-center">
              <input
                className="rounded w-30 mobilXS:w-52 laptop:w-72 tablet:mr-2 py-1 px-1"
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
            <ul className="mt-3 pb-4 grid gap-1">
              {searchClients?.map((client, i) => {
                return <ClientsTableBody key={i} client={client} />;
              })}
            </ul>
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
