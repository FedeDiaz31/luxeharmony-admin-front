import { format } from "date-fns";
import { useState } from "react";
import ModalEditClient from "../modals/ModalEditClient";

function ClientTableBody({ client, setClients }) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModalClient = () => setShowModal(false);
  const handleShowModalClient = () => setShowModal(true);

  return (
    <>
      <div className="z-20">
        {showModal && (
          <div>
            <ModalEditClient
              client={client}
              handleCloseModalClient={handleCloseModalClient}
              /* setClients={setClients} */
            />
          </div>
        )}
      </div>

      <li
        className="cursor-pointer flex items-center justify-between px-5 py-2 mx-0 tablet:mx-2  rounded hover:scale-[101%] bg-bgPrimaryColor shadow transition-all duration-200"
        onClick={handleShowModalClient}
      >
        <div className="w-full">
          <h3 className="font-semibold">
            {client.firstname} {client.lastname}
          </h3>
        </div>
        <div className="w-full text-end">
          <h3 className="text-textTertiary hidden text-sm laptop:block">
            {client.email}
          </h3>
        </div>
        <div className="w-full text-end ">
          <h3 className="text-textTertiary text-sm">
            {client.orders.length} order/s
          </h3>
        </div>
        <div className="w-full text-end hidden laptop:block">
          <h3 className="text-textTertiary text-sm">
            {format(new Date(client.createdAt), "dd'/'M'/'yy")}
          </h3>
        </div>
        <div className="w-full text-end">
          <button className=" hover:bg-bgPrimaryColor text-textPrimary px-3 py-1 rounded-b-md transition-all duration-200 font-bold">
            <img className="w-6" src="edit-icon.png" alt="" />
          </button>
        </div>
      </li>
    </>
  );
}

export default ClientTableBody;
