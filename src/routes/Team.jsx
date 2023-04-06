import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../animation/Animations.css";
import Spinner from "../components/partials/Spinner";
import TeamTableBody from "../components/partials/TeamTableBody";

function Team() {
  document.title = ` LuxeHarmony | Teams `;

  const [team, setTeam] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getTeam = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.admin.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/admin`,
      });
      setTeam(response.data);
    };
    getTeam();
  }, []);

  return (
    <div className="p-5  fade-in">
      <div className="flex w-full justify-between items-center gap-3 px-10">
        <h3 className="font-bold text-2xl">Team</h3>
        <div className="flex gap-3 items-center">
          <div className="bg-bgPrimaryColor px-2 py-1 rounded flex items-center">
            <input
              className="rounded w-72 mr-2 py-1 px-1"
              type="text"
              name=""
              id=""
              placeholder="Search members"
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

      {team ? (
        <>
          <ul className="mt-3 pb-4 grid gap-1">
            {team.map((member, i) => {
              return <TeamTableBody key={i} member={member} />;
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

export default Team;
