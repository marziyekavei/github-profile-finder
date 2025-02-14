import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC<{  onSearch: () => void, setUsername: React.Dispatch<React.SetStateAction<string>>, username: string }> = ({ onSearch, setUsername, username }) => {
  return (
    <div className='flex flex-row justify-center items-center mt-8 w-full rounded-lg p-4 shadow-2xl lg:w-[800px] bg-card-light dark:bg-card-dark'>
      <CiSearch size={36} className='text-primary' />
      <input placeholder='search github username...'
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-3 rounded-md focus:outline-none dark:text-text-dark dark:bg-card-dark text-text-light bg-card-light" />
      <button className='w-20 h-8 cursor-pointer bg-primary dark:text-text-dark text-text-dark
      rounded-md hover:bg-blue-600 focus:outline-none' onClick={onSearch}>Search</button>
    </div>
  )
}

export default SearchBar
