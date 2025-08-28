import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import SilentTalkLogo2 from "../assets/images/SilentTalk logo 2.png";
import profile1 from "../assets/images/image1.png";

const ChatUserList = () => {
  return (
    <>
      <div className="w-full h-screen flex-1 bg-[#ececec] border-r border-[#bdb8b8]">
        <div className=" flex justify-center p-2 border-b border-[#bdb8b8] ">
          <div className=" w-[300px] ">
            <img src={SilentTalkLogo2} alt="logo" />
          </div>
        </div>
        <div className="flex items-center p-2 border-b border-[#bdb8b8] bg-[#FFFFFF]">
          <RiSearch2Line className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search chats"
            className="ml-2 w-full outline-none"
          />
        </div>
        <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
          <img
            src={profile1}
            alt="profile image"
            className="w-12 h-12 border border-[#FFFFFF] rounded-full"
          />
          <div className="ml-3 flex-1">
            <div className="flex justify-between">
              <h4 className="font-semibold">Md Ruhul Amin</h4>
              <span className="text-xs text-gray-400">5s</span>
            </div>
            <p className="text-sm text-gray-600 truncate">bhai kemon asen?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatUserList;
