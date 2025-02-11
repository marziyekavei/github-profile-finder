import './App.css'
import ProfileCard from './components/ProfileCard'
import SearchBar from './components/SearchBar'
import { IoMoon } from "react-icons/io5";

function App() {

  return (
    <div className='flex flex-col w-full bg-[#f5f5f5] h-screen items-center'>
      <div className='flex flex-row justify-between items-center mt-16 w-96 lg:w-[800px]'>
        <div className='font-bold text-2xl'>Github Profile Finder</div>
        <div className='flex flex-row items-center gap-2'>
          <p className='text-gray-400'>DARK</p>
          <IoMoon className='text-gray-400' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-6'>
        <SearchBar />
        <ProfileCard />
      </div>
    </div>
  )
}

export default App
