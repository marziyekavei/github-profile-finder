import React from 'react';
import Avatar from "../assets/bd10ff065a0717caef8ef73e7ac8bfd6.png";

const ProfileCard: React.FC = () => {
  return (
    <div className='flex flex-col items-start p-4 w-full h-66 rounded-lg bg-[#fafafa] shadow-2xl lg:w-[800px] lg:p-8 lg:h-72'>
      <div className='flex flex-row justify-normal items-center space-x-3 mt-4'>
        <img src={Avatar} alt="Avatar" className='rounded-full w-24 h-24' />
        <div className='flex flex-col align-middle'>
          <p className='text-2xl font-bold text-gray-500'>Full Name</p>
          <p className='text-lg text-blue-600'>@userName</p>
        </div>
      </div>
      <div className='mt-4  lg:w-full'>
        <span className='text-gray-600'>Bio</span>
        <div className='flex justify-around items-center mt-4 rounded-lg bg-blue-50 w-86 h-16'>
          <div className=''>
            <p className='text-center text-gray-600 font-bold'>Public Repose</p>
            <p className='text-center text-gray-600 font-bold'>5</p>
          </div>
          <div className=''>
            <p className='text-center text-gray-600 font-bold'>Followers</p>
            <p className='text-center text-gray-600 font-bold'>6</p>
          </div>
          <div className=''>
            <p className='text-center text-gray-600 font-bold'>Following</p>
            <p className='text-center text-gray-600 font-bold'>9</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;


