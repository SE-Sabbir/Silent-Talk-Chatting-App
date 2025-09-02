import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import SingleUserCard from "../components/SingleUserCard";
import { useSelector } from "react-redux";

const UserList = () => {
  // -----------get all user code ---------------
  const currentUserInfo = useSelector((state) => state.currentUserInfo.value);
  const [allUsers, setAllUsers] = useState([]);
  const [addUsersList , setAddUsersList] = useState([])
  const db = getDatabase();
  useEffect(() => {
    const allList = ref(db, "all-User/");

    onValue(allList, (listData) => {
      let myArr = [];

      listData.forEach((item) => {
        if (item.key != currentUserInfo.uid) {
          myArr.push({ userData:item.val(), userId:item.key });
        }
      });
      setAllUsers(myArr);
    });

    onValue(ref(db, "all-ChatUsers/"), (snapshot) => {
      let myArr = []
      snapshot.forEach((item)=>{
        if(item.val().senderId == currentUserInfo.uid){
          myArr.push(item.val())
        }
        setAddUsersList(myArr)
      })
    });

  }, []);

  // ------------add to chat ---------------
  const handelAdd = (cardClick) => {
    const db = getDatabase();
    set(push(ref(db, "all-ChatUsers")), {
      senderId: currentUserInfo.uid,
      senderName: currentUserInfo.displayName,
      senderEmail: currentUserInfo.email,
      senderPhoto: currentUserInfo.photoURL,
      adderId: cardClick.userId,
      adderName: cardClick.userData.username,
      adderEmail: cardClick.userData.email,
      adderPhoto: cardClick.userData.profile_picture,
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-200 ">
        <div className="container">
          <h1 className="font-poppins font-bold text-2xl text-center py-5 border-b">
            All User List
          </h1>
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* ---------------All User Data List Here---------------- */}
            {allUsers.map((item, i) => (
              <SingleUserCard
                key={i}
                userName={item.userData.username}
                useremail={item.userData.email}
                avatar={item.userData.profile_picture}
                addUser={() => handelAdd(item)}
              />
              // addUsersList.map((item2)=>(
              //   item.userId == item2.adderId && 
              // ))
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
