import {useState} from 'react'
import { NavLink } from 'react-router-dom'

function SideNav({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [Qari, setQari] = useState(false);


    const handleOpen =()=> {
     setIsOpen(true)
     setQari(true)
    }
    const handleClose = () => {
     setIsOpen(false)
     setQari(false)
    }

  return (
    <div>

    <div style={{width: isOpen == true ? "100px" : ""}} className='transition-all duration-700 bg-zinc-600 fixed h-screen w-[22%]  overflow-hidden border-r-2 border-gray-300 text-white'>
    
    <i onClick={handleOpen}  class="fa-solid fa-xmark  text-white text-4xl ml-[230px] pt-5 " ></i>
    <i onClick={handleClose} class="fa-solid fa-bars text-white text-3xl  hidden ml-[45px]"  style={{display: isOpen == true? "block" : "none"}} ></i>
       

  <div className='ml-12 mt-10 text-2xl flex flex-col gap-12'>
   <NavLink to={"/"} className='cursor-pointer hover:underline'> <i  class="fa-brands fa-microsoft" ></i> <span style={{display: Qari == true? "none" : "inline"}}> Dashboard</span></NavLink>
   <NavLink to={"/Product"} className='cursor-pointer hover:underline'> <i class="fa-brands fa-product-hunt" ></i> <span style={{display: Qari == true? "none" : "inline"}}>Product</span></NavLink>
   <NavLink to={"/Service"} className='cursor-pointer hover:underline'> <i class="fa-solid fa-bag-shopping" ></i> <span style={{display: Qari == true? "none" : "inline"}}>Service</span></NavLink>
   <NavLink to={"/Parent"} className='cursor-pointer hover:underline'> <i class="fa-solid fa-image-portrait" ></i > <span style={{display: Qari == true? "none" : "inline"}}>Parent</span></NavLink>
   <NavLink to={"/Attendance"} className='cursor-pointer hover:underline'> <i class="fa-solid fa-table-cells" ></i> <span style={{display: Qari == true? "none" : "inline"}}>Attendence</span></NavLink>
   <NavLink className='cursor-pointer hover:underline'> <i class="fa-solid fa-headphones" ></i> <span style={{display: Qari == true? "none" : "inline"}}>Help</span></NavLink>
    </div>
    </div>
    <div style={{marginLeft: isOpen === true ? "100px" : ""}} id='main' className='ml-[27%] transition-all duration-500'> {children} </div>
    </div>
  )
}

export default SideNav