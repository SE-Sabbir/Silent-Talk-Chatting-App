import React, { useState } from "react";
import { Search, ArrowLeft, Send, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react";
import SilentTalkLogo2 from '../assets/images/SilentTalk logo 2.png'
import myProfilePhoto from '../assets/images/image1.png'
import { Link } from "react-router";
import { BsPersonFillAdd } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";


const chatsData = [
  { id: 1, name: "Ruhul Amin", message: "Hey there 👋", time: "5s", img: "https://i.pravatar.cc/150?img=2" },
  { id: 2, name: "Jahid Hasan", message: "When will the work be ready???", time: "5m", img: "https://t4.ftcdn.net/jpg/05/50/45/65/360_F_550456541_mMBkyPx1G6XtqPYrT8mG12O8Uz5XBTCZ.jpg" },
  { id: 3, name: "Moshiur Rahman Pantho", message: "That's look good try another", time: "1h", img: "https://www.shutterstock.com/image-photo/cheerful-bearded-student-headphones-on-260nw-1080072461.jpg" },
  { id: 4, name: "Nahid Hasan", message: "Sharing awesome UI/UX template", time: "2h", img: "https://static.vecteezy.com/system/resources/thumbnails/036/526/536/small/ai-generated-a-beautiful-little-boy-wearing-traditional-arabic-cloth-ai-generative-photo.jpg" },
  { id: 5, name: "Hira Akter", message: "That's a good idea, I'll tell the team", time: "1d", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLkYISq9o_CwvHON2RJAROSj35WnpRhN_Mg&s" },
];

 const ChatUserList=()=> {
  const [search, setSearch] = useState("");
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const filteredChats = chatsData.filter(chat =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "me" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <div>
        
      </div>
      <div className={`bg-[#ececec] border-r border-[#bdb8b8] w-full md:w-1/3 lg:w-1/4 ${activeChat ? "hidden md:block" : "block"}`}>
        <div className=" flex justify-center p-2 border-b border-[#bdb8b8] " >
            <div className=" w-[300px] ">
                <img src={SilentTalkLogo2} alt="logo" />
            </div>
        </div>
        <div className="flex items-center p-2 border-b border-[#bdb8b8] bg-[#FFFFFF]">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search chats"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-full outline-none"
          />
        </div>
        <div>
          {filteredChats.map(chat => (
            <div
              key={chat.id}
              onClick={() => { setActiveChat(chat); setMessages([]); }}
              className="flex items-center p-3 cursor-pointer hover:bg-gray-100"
            >
              <img src={chat.img} alt={chat.name} className="w-12 h-12 border border-[#FFFFFF] rounded-full" />
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{chat.name}</h4>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      {activeChat && (
        <div className="Chat_section flex flex-col w-full md:w-2/3 lg:w-3/4">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-[15px]  bg-[#3e9cf3] shadow-2xl">
            <div className="flex items-center">
              <button
                className="md:hidden mr-3"
                onClick={() => setActiveChat(null)}
              >
                <ArrowLeft />
              </button>
              <div className="w-12 h-12  flex justify-center items-center border border-[#FFFFFF] rounded-full overflow-hidden">
              <img src={activeChat.img} alt={activeChat.name} className=" w-full h-full " />
              </div>
              <h4 className="ml-3 font-semibold text-[#FFFFFF]">{activeChat.name}</h4>
            </div>
            <div className="flex items-center gap-4 text-[#FFFFFF]">
              <Phone className="cursor-pointer" />
              <Video className="cursor-pointer" />
              <MoreVertical className="cursor-pointer" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 bg-[#fdfbfb] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg text-white max-w-xs ${
                    msg.sender === "me" ? "bg-[#0081FB]" : "bg-gray-400"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center p-3 border-t border-[#bdb8b8] bg-[#f5f3f3]">
            <Paperclip className="text-[#0081FB] cursor-pointer mr-5" />
            <Smile className="text-[#0081FB] cursor-pointer mr-5" />
            <input
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 outline-none p-2 border border-[#bdb8b8] rounded-full bg-[#ffffffc7]"
            />
            <button
              onClick={handleSend}
              className="ml-5 p-3 rounded-full text-white"
              style={{ backgroundColor: "#0081FB" }}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default ChatUserList