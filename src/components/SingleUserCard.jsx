import React from "react";
import { MdCancel } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

const SingleUserCard = ({userName , avatar , useremail}) => {
  return (
    <>
      <div>
        <div className="w-92 h-20 p-5 flex rounded-2xl shadow-lg bg-[#ffffff] ">
          <div className="w-full flex justify-between items-center ">
            <div className="w-12 h-12 border rounded-full overflow-hidden">
              <img src={avatar} alt="profile" />
            </div>
            <div>
              <h1>{userName}</h1>
              <h2 className="font-normal text-[14px]">{useremail}</h2>
            </div>
            <div className="flex gap-2">
              <button className="text-[33px] text-[red] active:scale-115">
                <MdCancel />
              </button>
              <button className="text-[33px] text-[green] active:scale-115">
                <IoAddCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUserCard;
