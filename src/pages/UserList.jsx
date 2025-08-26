import React from 'react'
import profileImage from '../assets/images/image1.png'
import { MdCancel } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { getDatabase, push, ref, set } from "firebase/database";



const UserList = () => {

  const db = getDatabase();

  const handelRealTimeDB =()=>{
    set(push(ref(db, 'All users/')), {
    username: 'Ruhul Amin',
    email: 'ruhulamin50@gmail.com',
  });
    
  }
  return (
    <>
    <div className='w-full h-screen bg-gray-200 '>
      <div className="container">
        <h1 className='font-poppins font-bold text-2xl text-center py-5 border-b'>All User List</h1>
        <div className='flex flex-wrap justify-center gap-5 pt-5'>
    {/* ---------------All User Data List Here---------------- */}
          <div className='w-92 h-20 p-5 flex rounded-2xl shadow-lg bg-[#ffffff] '>
            <div className='w-full flex justify-between items-center '>
              <div className='w-12 h-12 border rounded-full overflow-hidden'>
                <img src={profileImage} alt="profile" />
              </div>
              <div>
                <h1>sabbir</h1>
                <h2 className='font-normal text-[14px]'>sabbirhp50@gmail.com</h2>
              </div>
              <div className='flex gap-2'>
                <button className='text-[33px] text-[red] active:scale-115'><MdCancel/></button>
                <button onClick={handelRealTimeDB} className='text-[33px] text-[green] active:scale-115'><IoAddCircle/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserList