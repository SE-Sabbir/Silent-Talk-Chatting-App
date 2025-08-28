import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import SingleUserCard from "../components/SingleUserCard";
import { useSelector } from "react-redux";

const UserList = () => {

  const currentUserInfo = useSelector((state)=> state.currentUserInfo.value )
  const [allUsers , setAllUsers] = useState([])
  const db = getDatabase();
  console.log(currentUserInfo.uid)
  useEffect(()=>{
    const allList = ref(db, "all-User/");
  onValue(allList, (listData) => {
    let myArr = []

    listData.forEach((item)=>{
      if(item.key != currentUserInfo.uid){

        myArr.push(item.val())
      }
    })
    setAllUsers(myArr)
  });

  },[])

  return (
    <>
      <div className="w-full h-screen bg-gray-200 ">
        <div className="container">
          <h1 className="font-poppins font-bold text-2xl text-center py-5 border-b">
            All User List
          </h1>
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* ---------------All User Data List Here---------------- */}
           {allUsers.map((item)=>(
            <SingleUserCard userName={item.username} useremail={item.email} avatar={item.profile_picture} />
           ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
