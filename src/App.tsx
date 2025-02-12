import React, { useEffect, useState } from 'react';
import './App.css'
import ProfileCard from './components/ProfileCard'
import SearchBar from './components/SearchBar'
import { IoMoon, IoSunny } from "react-icons/io5";
import axios from 'axios';

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") as "light" | "dark" || "light"
  )
  const [username, setUsername] = useState<String>("");
  const [profileData, setProfileData] = useState<any>("");
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme])

  const handleMode = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSearch = async () => {
    if (username.trim() === '') return;
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfileData(response.data);
      setError(null);
    } catch (error) {
      setError("No Record Found");
      setProfileData(null)

    }
  }

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
        <SearchBar theme={theme} onSearch={handleSearch} setUsername={setUsername} />
        {error && <p className="text-red-500">{error}</p>}
        <ProfileCard theme={theme} profileData={profileData}/>
      </div>
    </div>
  )
}

export default App
