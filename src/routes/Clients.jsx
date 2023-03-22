import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/partials/Spinner";
import UsersTableBody from "../components/partials/UsersTableBody";

function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:8000/users");
      setUsers(response.data);
    };
    getUsers();
  }, []);
  return (
    <div className="p-5  fade-in">
      <div>
        <h3 className="font-semibold text-2xl">Clients</h3>
      </div>

      {users ? (
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
            {users.map((user, i) => {
              return <UsersTableBody key={i} user={user} />;
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
