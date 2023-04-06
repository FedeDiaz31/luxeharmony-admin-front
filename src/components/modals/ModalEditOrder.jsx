/* CSS */
import { useState } from "react";
import "../../animation/Animations.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { editOrder } from "../../redux/ordersReducer";
import { useEffect } from "react";

function ModalEditOrder({ handleCloseModalOrder, order }) {
  const dispatch = useDispatch();
  const [idStatus, setIdStatus] = useState(order.status);
  const user = useSelector((state) => state.user);
  const [status, setStatus] = useState(null);

  /*   Close with ESC Function */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseModalOrder();
    }
  });

  useEffect(() => {
    const getStatus = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/status`,
      });
      setStatus(response.data);
    };
    getStatus();
  }, []);

  /*  console.log(status); */

  const handleEdit = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/orders/${order._id}`,
      data: { idStatus: idStatus },
    });
    dispatch(editOrder(response.data));
    handleCloseModalOrder();
  };

  return (
    <div className="fixed inset-0 bg-modal z-40">
      <div className="flex items-center justify-center min-h-screen text-center px-8 tablet:px-0">
        <div
          className="fixed inset-0 bg-[#0f0f0f7e] cursor-pointer fade-in-fast z-20"
          onClick={handleCloseModalOrder}
        ></div>

        <div className="inline-block bg-bgPrimaryColor rounded-lg shadow-lg transform transition-all fade-in-fast duration-300 modal z-30 mt-12">
          <button
            className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border justify-center border-bgSecondaryColor bg-bgPrimaryColor hover:bg-bgSecondaryColor rounded-full text-sm translate-all duration-150 font-bold hover:text-bgPrimaryColor"
            onClick={handleCloseModalOrder}
          >
            X
          </button>
          {/*             Form Edit Product */}
          <div className="flex text-white items-center p-5 px-10">
            {/*                 Images Info of Product */}

            <div className="flex flex-col">
              <h2 className="font-bold text-lg">Order</h2>
              <h3 className="text-sm font-light">ID: {order._id}</h3>
              <div className="">
                <div className="slide-top">
                  {/*                     Page 2 Edit of Product */}
                  <div className="mt-5">
                    <label htmlFor="name">Status</label>
                    <select
                      type="text"
                      name="name"
                      id="name"
                      className="rounded bg-bgForthColor min-w-[150px] ml-3 py-1 px-1"
                      onChange={(e) => setIdStatus(e.target.value)}
                    >
                      {status?.map((st) => {
                        return (
                          <option key={st._id} value={st._id}>
                            {st.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-col  items-center">
                <button
                  onClick={handleEdit}
                  className="mt-3 gap-2 flex items-center rounded p-2 pl-3 pr-4 hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                >
                  <img className="w-8" src="edit-icon.png" alt="" />
                  <h2 className="font-bold">Edit</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditOrder;
