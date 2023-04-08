import { format } from "date-fns";
import { useState } from "react";
import ModalEditAdmin from "../../components/modals/ModalEditAdmin";

function TeamTableBody({ member }) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModalMember = () => setShowModal(false);
  const handleShowModalMember = () => setShowModal(true);

  return (
    <>
      <div className="z-20">
        {showModal && (
          <div>
            <ModalEditAdmin
              member={member}
              handleCloseEditAdmin={handleCloseModalMember}
            />
          </div>
        )}
      </div>
      <li
        onClick={handleShowModalMember}
        className="cursor-pointer flex items-center justify-between px-3 tablet:px-5 py-2 mx-0 tablet:mx-2 rounded-lg  hover:scale-[101%] bg-bgPrimaryColor  shadow transition-all duration-200"
      >
        <div className="w-full">
          <h3 className="font-semibold">
            {member.firstname} {member.lastname}
          </h3>
        </div>
        <div className="w-full text-end tablet:text-center">
          <h3 className="text-textTertiary text-sm">{member.rol}</h3>
        </div>
        <div className="w-full hidden tablet:flex text-end">
          <h3 className=" text-textTertiary text-sm">{member.email}</h3>
        </div>
        <div className="w-full text-end hidden laptop:block">
          <h3 className="text-textTertiary text-sm">
            {format(new Date(member.createdAt), "dd'/'M'/'yy")}
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

export default TeamTableBody;
