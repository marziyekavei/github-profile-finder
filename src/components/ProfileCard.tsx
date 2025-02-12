import React from 'react';
import Avatar from "../assets/bd10ff065a0717caef8ef73e7ac8bfd6.png";

const ProfileCard: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  return (
    <div className={`flex flex-col items-start p-4 w-full h-66 rounded-lg shadow-2xl lg:w-[800px] lg:p-8 lg:h-72
    ${theme === "light" ? "bg-[#f5f5f5] text-[#212121]" : "bg-[#111111] text-[#fafafa]"}`}>
      <div className='flex flex-row justify-normal items-center space-x-3 mt-4'>
        <img src={Avatar} alt="Avatar" className='rounded-full w-24 h-24' />
        <div className='flex flex-col align-middle'>
          <p className='text-2xl font-bold'>Full Name</p>
          <p className='text-lg text-blue-600'>@userName</p>
          <div className="sm:hidden lg:block mt-2">Bio</div>
        </div>
      </div>
      <div className={`flex flex-col justify-start items-start lg:items-center mt-4 lg:w-[550px] lg:mb-8 ${theme === "light" ? "text-[#212121]" : "text-[#fafafa]"}`}>
        <span className="lg:hidden block">Bio</span>
        <div className={`flex justify-around items-center mt-4 rounded-lg w-86 h-16
          ${theme === "light" ? "bg-[#fafafa] text-[#212121]" : "bg-[#000000] text-[#fafafa]"}`}>
          <div className=''>
            <p className='text-center font-bold'>Public Repose</p>
            <p className='text-center font-bold'>5</p>
          </div>
          <div className=''>
            <p className='text-center font-bold'>Followers</p>
            <p className='text-center font-bold'>6</p>
          </div>
          <div className=''>
            <p className='text-center font-bold'>Following</p>
            <p className='text-center font-bold'>9</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;


