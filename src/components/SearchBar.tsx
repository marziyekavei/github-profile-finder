import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC<{ theme: "light" | "dark", onSearch: () => void, setUsername: React.Dispatch<React.SetStateAction<String>> }> = ({ theme, onSearch, setUsername }) => {
  return (
    <div className={`flex flex-row justify-center items-center mt-8 w-full rounded-lg p-4 shadow-2xl lg:w-[800px] ${theme === 'light' ? 'bg-[#f5f5f5] text-[#212121]' : 'bg-[#111111] text-[#fafafa]'}`}>
      <CiSearch size={36} className='text-blue-600' />
      <input placeholder='search github username...' type="text"
        onChange={(e) => setUsername(e.target.value)}
        className={`w-full p-3 rounded-md focus:outline-none
        ${theme === "light" ? "bg-[#f5f5fa] text-[#212121]" : "bg-[#111111] text-[#fafafa]"}`} />
      <button className='w-20 h-8 cursor-pointer bg-blue-500 text-[#fafafa] 
      rounded-md hover:bg-blue-600 focus:outline-none' onClick={onSearch}>Search</button>
    </div>
  )
}

export default SearchBar
