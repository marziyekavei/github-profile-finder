import React, { useEffect, useState } from 'react';
import './App.css'
import ProfileCard from './components/ProfileCard'
import SearchBar from './components/SearchBar'
import { IoMoon, IoSunny } from "react-icons/io5";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") as "light" | "dark" || "light"
  )

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme])

  const handleMode = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <div className={`flex flex-col w-full h-screen items-center transition-all duration-300 ${theme === "light" ? "bg-[#fafafa] text-[#212121]" : "bg-[#000000] text-[#fafafa]"}`}>
      <div className='flex flex-row justify-between items-center mt-16 w-96 lg:w-[800px]'>
        <div className='font-bold text-2xl'>Github Profile Finder</div>
        <div className='flex flex-row items-center gap-2'>
          <p className={`${theme === 'light' ? "text-gray-400" : "text-[#fafafa]"}`}>{theme === "light" ? "DARK" : "LIGHT"}</p>
          {theme === "light" ?
            <IoMoon className="text-gray-400 cursor-pointer" onClick={handleMode} />
            : <IoSunny className="text-[#fafafa] cursor-pointer" onClick={handleMode} />}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-6'>
        <SearchBar theme={theme}/>
        <ProfileCard theme={theme}/>
      </div>
    </div>
  )
}

export default App
