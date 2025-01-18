import logo1 from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export const Navbar = () => {

  return (
    <nav className=' mb-20 flex justify-between items-center py-3'>
      <div className='flex flex-shrink-0 items-center '>
        <img src={logo1} alt="Logo" className="h-16 mx-2 w-auto object-contain" />
      </div>
      <div className="mx-8 flex items-center justify-center gap-6 text-2xl text-white">
        
        <a href="https://linkedin.com/in/jerry-james-" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:bg-white rounded hover:text-sky-500 transition-colors duration-300" />
        </a>

        <a href="https://github.com/jerryjames2001" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-black rounded-full hover:bg-white transition-colors duration-300" />
        </a>

        <a href="https://www.instagram.com/jerryjames._?igsh=ZGIzYndhdTYzNG55" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 hover:text-orange-500 transition-colors duration-300 " />
        </a>

      </div>
    </nav>
  )
}
