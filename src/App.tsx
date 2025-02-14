import React, { useEffect, useState } from 'react';
import './App.css'
import ProfileCard from './components/ProfileCard'
import SearchBar from './components/SearchBar'
import { IoMoon, IoSunny } from "react-icons/io5";
import axios from 'axios';

const App: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  )
  const [username, setUsername] = useState<string>("");
  const [profileData, setProfileData] = useState<any>("");
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    localStorage.setItem("theme", theme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme);
  }, [theme])

  const handleMode = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const handleSearch = async () => {
    if (username.trim() === '') return;
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      if (response.status === 200) {
        setProfileData(response.data);
        setError(null);
        setUsername("");
      }
    } catch (error) {
      setError("No Record Found");
      setProfileData(null);
      setUsername("");
    }

  };


  return (
    <div className='flex flex-col w-full h-screen items-center transition-all duration-300 text-text-light dark:text-text-dark bg-body-light dark:bg-body-dark'>
      <div className='flex flex-row justify-between items-center mt-16 w-96 lg:w-[800px]'>
        <div className='font-bold text-2xl'>Github Profile Finder</div>
        <div className='flex flex-row items-center gap-2'>
          <p className="text-secondary">{theme ? "DARK" : "LIGHT"}</p>
          {theme ?
            <IoSunny className="text-[#fafafa] cursor-pointer" onClick={handleMode} />
            :
            <IoMoon className="text-secondary cursor-pointer" onClick={handleMode} />}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-6'>
        <SearchBar onSearch={handleSearch} setUsername={setUsername} username={username} />

        <ProfileCard  profileData={profileData} error={error} />
      </div>
    </div>
  )
}

export default App
