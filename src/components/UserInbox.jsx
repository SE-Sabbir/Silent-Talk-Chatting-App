import React, { useEffect, useState } from "react";
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FiSmile } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { selectChatUserInfo } from "../slices/userInfoSlice";
import { data } from "react-router";

const UserInbox = () => {
  const chatUserData = useSelector((state) => state.currentUserInfo.chatUser);
  const currentUser = useSelector((state) => state.currentUserInfo.value);
  const [showblock, setShowBlock] = useState(false);

  const dispatch = useDispatch();
  const db = getDatabase();

  const handelBlock = () => {
    set(push(ref(db, "blockUserList")), {
      blockUserName: chatUserData.friendName,
      blockUserEmail: chatUserData.friendEmail,
      blockUserPicture: chatUserData.friendPicture,
      blockUserId: chatUserData.friendId,
      blockerId: currentUser.uid,
    });
    remove(ref(db, "all-ChatUsers/" + chatUserData.conversationId));
    localStorage.removeItem(chatUserData);
    dispatch(selectChatUserInfo(null));
  };
  // ------------message sent part-----------
  const [message, setMessage] = useState("");
  const handelmessage = () => {
    if(message.trim() === "") return
    set(push(ref(db, "allMsg/")), {
      senderId: currentUser.uid,
      reciverId: chatUserData.friendId,
      msg: message,
      msgTime: new Date().toLocaleTimeString()
    });
    setMessage("");
  };

  
  const [dbMessage, setDbMessage] = useState([]);
  useEffect(() => {
    onValue(ref(db, "allMsg/"), (allMessages) => {
      let arr = [];
      allMessages.forEach((item) => {
        if(item.val().senderId == currentUser.uid && item.val().reciverId == chatUserData.friendId){
          arr.push({ data: item.val(), key: item.key });
        }
        else if(item.val().reciverId == currentUser.uid && item.val().senderId == chatUserData.friendId){
          arr.push({ data: item.val(), key: item.key });
        }
      });
      setDbMessage(arr);
    });
  }, [chatUserData]);
  return (
    <>
      {chatUserData ? (
        <div className="Chat_section flex flex-col w-full h-screen">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-[15px]  bg-[#3e9cf3] shadow-2xl">
            <div className="flex items-center">
              <div className="w-12 h-12  flex justify-center items-center border border-[#FFFFFF] rounded-full overflow-hidden">
                <img
                  src={chatUserData?.friendPicture}
                  alt="profile image"
                  className=" w-full h-full "
                />
              </div>
              <div className=" ml-4">
                <h2 className="font-semibold text-[#FFFFFF]">
                  {chatUserData?.friendName}
                </h2>
                <p className="font-normal text-[#0cdf1e] leading-4">online</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#FFFFFF]">
              <button>
                <IoCall className="text-[30px] cursor-pointer" />
              </button>
              <button>
                <IoVideocam className="text-[30px] cursor-pointer" />
              </button>
              <div className=" relative">
                <button onClick={() => setShowBlock(!showblock)}>
                  <PiDotsThreeOutlineVerticalFill className="text-[30px] cursor-pointer" />
                </button>
              </div>
              {showblock && (
                <button
                  onClick={handelBlock}
                  className="mr-7 px-5 py-2 absolute right-0 top-18 font-poppins font-normal text-base text-[#FF0000]
               bg-gray-200 active:bg-gray-300 "
                >
                  Block
                </button>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 bg-[#fdfbfb] overflow-y-auto">
            {/* msg recive part */}
            {dbMessage.map((item , e) =>
              item.data.senderId == currentUser.uid ? (
                // --------msg sender
                <div key={e} className="flex justify-end">
                  <div className="px-4 py-2 mt-2 rounded-lg text-white max-w-xs bg-[#0081FB]">
                    {item.data.msg}
                    <div className=" text-[10px] text-end mt-1 text-gray-300 ">{item.data.msgTime}</div>
                  </div>
                </div>
              ) : (
                <div key={e} className="flex justify-start">
                  <div className="px-4 py-2 mt-2 rounded-lg text-white max-w-xs bg-[#b3528f]">
                    {item.data.msg}
                    <div className=" text-[10px] mt-1 text-gray-300 ">{item.data.msgTime}</div>
                  </div>
                </div>
              )
              // ------- msg reciver
            )}
          </div>

          {/* Input Box */}
          <div className="flex items-center p-3 border-t border-[#bdb8b8] bg-[#f5f3f3]">
            <FiPaperclip className=" text-[30px] text-[#0081FB] cursor-pointer mr-5" />
            <FiSmile className=" text-[30px] text-[#0081FB] cursor-pointer mr-5" />
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key === "Enter" && message.trim()){
                  e.preventDefault();
                  handelmessage();
                }
              }}
              type="text"
              placeholder="Type a message"
              className="flex-1 outline-none p-2 border border-[#bdb8b8] rounded-full bg-[#ffffffc7]"
            />
            <button
              onClick={handelmessage}
              className=" flex justify-center items-center mx-4 p-3 w-12 h-12 bg-[#0081FB] rounded-full text-white"
            >
              <FiSend className=" text-[25px] text-[#FFFFFF] " />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1/1 justify-center items-center">
          <h1 className=" font-poppins font-medium text-3xl text-[#a79e9e] ">
            Select an User to Chat...
          </h1>
        </div>
      )}
    </>
  );
};

export default UserInbox;
