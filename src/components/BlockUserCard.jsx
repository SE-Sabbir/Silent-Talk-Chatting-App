import React from "react";
import { CgUnblock } from "react-icons/cg";

const BlockUserCard = ({ userName, avatar, userEmail, unblockUser }) => {
  return (
    <>
      <div>
        <div className="w-92 h-20 p-5 flex rounded-2xl shadow-lg bg-[#ffffff] border-3 border-red-300 ">
          <div className="w-full flex justify-between items-center ">
            <div className="w-12 h-12 border rounded-full overflow-hidden">
              <img src={avatar} alt="profile" />
            </div>
            <div>
              <h1>{userName}</h1>
              <h2 className="font-normal text-[14px]">{userEmail}</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={unblockUser}
                className="text-[35px] text-[green] active:scale-115"
              >
                <CgUnblock />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockUserCard;
