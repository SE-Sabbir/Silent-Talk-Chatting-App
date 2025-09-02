import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import SilentTalkLogo2 from "../assets/images/SilentTalk logo 2.png";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectChatUserInfo } from "../slices/userInfoSlice";

const ChatUserList = () => {
  const db = getDatabase();
  const currentUserInfo = useSelector((state) => state.currentUserInfo.value);
  const [chatList, setChatLIst] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    onValue(ref(db, "all-ChatUsers"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item , i) => {
        if (item.val().senderId == currentUserInfo.uid) {
          arr.push({
            friendId: item.val().adderId,
            friendName: item.val().adderName,
            friendPicture: item.val().adderPhoto,
          });
        }
        if (item.val().adderId == currentUserInfo.uid) {
          arr.push({
            friendId: item.val().senderId,
            friendName: item.val().senderName,
            friendPicture: item.val().senderPhoto,
          });
        }
      });
      setChatLIst(arr);
    });
  }, []);

  // --------------set data to redux--------------
  const handelSelectUser = (data) => {
    dispatch(selectChatUserInfo(data));
    localStorage.setItem("chatUser", JSON.stringify(data));
  };

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
        {/* --------------Chat Friend List----------------- */}
        {chatList.length == 0 ? (
          <div class="bg-white p-3">
            <div class="flex items-center animate-pulse cursor-pointer">
              <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div class="ml-3 flex-1">
                <div class="flex justify-between">
                  <div class="w-1/2 h-4 bg-gray-300 rounded"></div>
                  <div class="w-16 h-3 bg-gray-300 rounded"></div>
                </div>
                <div class="w-full h-3 bg-gray-300 rounded mt-1"></div>
              </div>
            </div>
            <div class="flex items-center animate-pulse cursor-pointer mt-3">
              <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div class="ml-3 flex-1">
                <div class="flex justify-between">
                  <div class="w-1/2 h-4 bg-gray-300 rounded"></div>
                  <div class="w-16 h-3 bg-gray-300 rounded"></div>
                </div>
                <div class="w-full h-3 bg-gray-300 rounded mt-1"></div>
              </div>
            </div>
            <div class="flex items-center animate-pulse cursor-pointer mt-3">
              <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div class="ml-3 flex-1">
                <div class="flex justify-between">
                  <div class="w-1/2 h-4 bg-gray-300 rounded"></div>
                  <div class="w-16 h-3 bg-gray-300 rounded"></div>
                </div>
                <div class="w-full h-3 bg-gray-300 rounded mt-1"></div>
              </div>
            </div>
          </div>
        ) : (
          chatList.map((item) => (
            <div
              onClick={() => handelSelectUser(item)}
              className="flex items-center p-3 cursor-pointer hover:bg-gray-100"
            >
              <img
                src={item.friendPicture}
                alt="profile image"
                className="w-12 h-12 border border-[#FFFFFF] rounded-full"
              />
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{item.friendName}</h4>
                  <span className="text-xs text-gray-400">5s</span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  new masseage...
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ChatUserList;
