import React from "react";
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FiSmile } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

import profile1 from "../assets/images/image1.png";

const UserInbox = () => {
  return (
    <>
      <div className="Chat_section flex flex-col w-full h-screen">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-[15px]  bg-[#3e9cf3] shadow-2xl">
          <div className="flex items-center">
            <div className="w-12 h-12  flex justify-center items-center border border-[#FFFFFF] rounded-full overflow-hidden">
              <img
                src={profile1}
                alt="profile image"
                className=" w-full h-full "
              />
            </div>
            <h4 className="ml-3 font-semibold text-[#FFFFFF]"></h4>
          </div>
          <div className="flex items-center gap-4 text-[#FFFFFF]">
            <IoCall className="text-[30px] cursor-pointer" />
            <IoVideocam className="text-[30px] cursor-pointer" />
            <PiDotsThreeOutlineVerticalFill className="text-[30px] cursor-pointer" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 bg-[#fdfbfb] overflow-y-auto">
          <div className="flex justify-end">
            <div className="px-4 py-2 rounded-lg text-white max-w-xs bg-[#0081FB]"></div>
          </div>
        </div>

        {/* Input Box */}
        <div className="flex items-center p-3 border-t border-[#bdb8b8] bg-[#f5f3f3]">
          <FiPaperclip className=" text-[30px] text-[#0081FB] cursor-pointer mr-5" />
          <FiSmile className=" text-[30px] text-[#0081FB] cursor-pointer mr-5" />
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 outline-none p-2 border border-[#bdb8b8] rounded-full bg-[#ffffffc7]"
          />
          <button className=" flex justify-center items-center mx-4 p-3 w-12 h-12 bg-[#0081FB] rounded-full text-white">
            <FiSend className=" text-[25px] text-[#FFFFFF] " />
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInbox;
