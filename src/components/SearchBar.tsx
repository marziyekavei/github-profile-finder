import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  return (
    <div className='flex flex-row justify-center items-center mt-8 w-full 
    rounded-lg bg-[#fafafa] p-4 shadow-2xl
    lg:w-[800px]'>
      <CiSearch size={36} className='text-blue-600' />
      <input placeholder='search github username...' type="text" className='w-full p-3 rounded-md bg-[#fafafa] text-black focus:outline-none' />
      <button className='w-20 h-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none'>Search</button>
    </div>
  )
}

export default SearchBar
