import './App.css'
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";



function App() {

  return (
    <>
    
      <div id='wrapper' className='flex flex-col justify-center ml-[35%] h-[600px] gap-8 mt-8 rounded-[40px] items-center w-[400px] bg-white '>
        <div>
          <img className='w-[180px] h-[220px] rounded-lg ' src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" />
        </div>
        <div>
          <h2 className='font-serif text-3xl'>John Doe</h2>
          <a href="" className='ml-6'>@simdev</a>

        </div>
        <div className='flex gap-5 text-2xl'>
        <SiInstagram className= 'hover:bg-gray-300 transition-all cursor-pointer rounded-lg' />
        <FaLinkedin className='hover:bg-gray-300 transition-all cursor-pointer rounded-lg' />
        <FaTwitterSquare className='hover:bg-gray-300 transition-all cursor-pointer rounded-lg' />
        <FaSquareGithub className='hover:bg-gray-300 transition-all cursor-pointer rounded-lg' />
     <HiOutlineExternalLink className='hover:bg-gray-300 transition-all cursor-pointer rounded-lg'/>
        </div>
        <div className='w-[300px] font-normal '>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi veniam ratione quis corrupti inventore quia doloribus? Nisi, neque rem.</p>
        </div>
        <div className='gap-10 flex mb-3'>
          <button className='w-[100px] text-black transition-all cursor-pointer rounded-lg hover:bg-pink-500 h-[40px] bg-pink-600 text-lg '>follow</button>
          <button className='w-[100px] text-black transition-all cursor-pointer rounded-lg hover:bg-pink-500 h-[40px] bg-white text-lg '>message</button>
        </div>
      </div>

    </>
  )
}

export default App
