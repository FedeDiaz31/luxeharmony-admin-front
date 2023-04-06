import { format } from "date-fns";
import ModalEditOrder from "../modals/ModalEditOrder";
import { useState } from "react";

function OrderTableBody({ order }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModalOrder = () => setShowModal(false);
  const handleShowModalOrder = () => setShowModal(true);

  return (
    <>
      <div className="z-20">
        {showModal && (
          <div>
            <ModalEditOrder
              order={order}
              handleCloseModalOrder={handleCloseModalOrder}
            />
          </div>
        )}
      </div>
      <li
        onClick={handleShowModalOrder}
        className="cursor-pointer flex items-center justify-between px-3 tablet:px-5 py-2 mx-2 rounded hover:scale-[101%] bg-bgPrimaryColor shadow transition-all duration-200"
      >
        <div className="w-full">
          <h3 className="font-semibold">
            {order.user.firstname} {order.user.lastname}
          </h3>
        </div>
        <div className="w-full">
          <h3 className="text-textTertiary text-center text-sm">
            U$D {order.totalPrice}
          </h3>
        </div>
        <div className="w-full text-end hidden laptop:block">
          <h3 className="text-textTertiary text-sm">
            {format(new Date(order.createdAt), "dd'/'M'/'yy (h:mm a)")}
          </h3>
        </div>
        <div className="text-sm tablet:text-base w-full text-end">
          <h3>{order.status.name}</h3>
        </div>
        <div className="ml-3 tablet:ml-0 tablet:w-full text-end">
          <button className="hover:bg-bgPrimaryColor text-textPrimary w-6 tablet:w-auto tablet:px-3 py-1 rounded-b-md transition-all duration-200 font-bold">
            <img className="w-6" src="edit-icon.png" alt="" />
          </button>
        </div>
      </li>
    </>
  );
}

export default OrderTableBody;
