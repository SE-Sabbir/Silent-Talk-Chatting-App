import React, { useEffect, useState } from 'react'
import BlockUserCard from '../components/BlockUserCard'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import { userInfo } from '../slices/userInfoSlice';

const BlockUserList = () => {
// --------------- database to add Block list-------------------
    const currentUserInfo = useSelector((state) => state.currentUserInfo.value);
    const db = getDatabase();
    const [blockUser , setBlockUser] = useState([])
    
    useEffect(()=>{
        onValue(ref( db , 'blockUserList/'),(snapshot)=>{
            let arr = []
            snapshot.forEach((item)=>{
                if(item.val().blockerId == currentUserInfo.uid){
                    arr.push({userInfo:item.val() , key:item.key })
                }
            })
            setBlockUser(arr)
        })
    },[])
// -------------unBlock User and add to chatUser List--------------
    const handelUnblock =(unblockInfo)=>{
        set(push(ref( db , 'all-ChatUsers/')),{
            adderId:unblockInfo.userInfo.blockerId,
            adderName:unblockInfo.userInfo.blockUserName,
            adderEmail:unblockInfo.userInfo.blockUserEmail,
            adderPhoto:unblockInfo.userInfo.blockUserPicture,
            senderId:currentUserInfo.uid,
            senderName:currentUserInfo.displayName,
            senderEmail:currentUserInfo.email,
            senderPhoto:currentUserInfo.photoURL,
        })
        remove(ref(db , 'blockUserList/' + unblockInfo.key))
    }

  return (
    <>
    <div className="w-full h-screen bg-gray-200 ">
        <div className="container">
          <h1 className="font-poppins font-bold text-2xl text-[#FF0000] text-center py-5 border-b ">
            All BlockUser List
          </h1>
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            {/* ---------------All User Data List Here---------------- */}
            {
                blockUser.map((item , i)=>(
                    <BlockUserCard 
                    key={item.key}
                    userName={item.userInfo.blockUserName}
                    userEmail={item.userInfo.blockUserEmail}
                    avatar={item.userInfo.blockUserPicture}
                    unblockUser={()=>handelUnblock(item)}
                    />
                ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockUserList