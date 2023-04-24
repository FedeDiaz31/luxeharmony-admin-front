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
        className="cursor-pointer flex items-center justify-between px-3 tablet:px-5 py-2 mx-0 tablet:mx-2  rounded hover:scale-[101%] bg-bgPrimaryColor shadow transition-all duration-200"
      >
        <div className="w-full flex gap-1">
          {/* <h3 className="font-semibold">{order.user.firstname}</h3> */}
          {/* <h3 className="hidden tablet:block font-semibold">
            {order.user.lastname}
          </h3> */}
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
        <div className=" flex items-center gap-2 w-full text-end">
          <h3 className="hidden tablet:block tablet:text-base w-full">
            {order.status.name}
          </h3>
          <div className="w-full tablet:w-8 flex justify-end">
            {order.status.name === "Processing" && (
              <img
                className="w-4 mt-1"
                src="https://icon-library.com/images/icon-process/icon-process-25.jpg"
                alt=""
              />
            )}
            {order.status.name === "Sent" && (
              <img
                className="w-4 mt-1"
                src=" https://cdn.onlinewebfonts.com/svg/img_307755.png"
                alt=""
              />
            )}
            {order.status.name === "Received" && (
              <img
                className="w-4"
                src="https://cdn-icons-png.flaticon.com/512/665/665939.png"
                alt=""
              />
            )}
          </div>
        </div>
        <div className="ml-3 tablet:ml-0 tablet:w-[300px] text-end">
          <button className="hover:bg-bgPrimaryColor text-textPrimary w-6 tablet:w-auto tablet:px-3 py-1 rounded-b-md transition-all duration-200 font-bold">
            <img className="w-6" src="edit-icon.png" alt="" />
          </button>
        </div>
      </li>
    </>
  );
}

export default OrderTableBody;
