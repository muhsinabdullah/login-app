import React, {useState } from "react";
import loginImg from '../assets/login1.jpg'
import usersImg from '../assets/users.png'
import menuImg from '../assets/menu.png'
import crossImg from '../assets/cross.png'
import Button from  './Button'
function App() {
    const Links =[
        {name: "Home",link:"/"},
        {name: "SERVICE",link:"/"},
        {name: "ABOUT",link:"/"},
        {name: "BLOG SITE",link:"/"},
        {name: "CONTACT",link:"/"},
    ];
const[open, setOpen]= useState(false);

    return (
      <><div className=" shadow-md w-full fixed top-0 left-0">
        <div className=" md:flex items-center justify-between bg-gray-700 py-4 md:px-10 px-7">
            <div className=" font-bold text-2xl cursor-pointer flex items-center  text-white">
                <span className=" text-3xl text-white mr-1 pt-2">
                <img className=" bg-white rounded-3xl mr-3" src={usersImg} alt="logo"/>
                </span>
                User Dashboard
            </div>
            <div onClick={()=> setOpen(!open)} className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
               
            {open ? (
                <img src={crossImg} alt="cross"/>
            ):(
                <img src={menuImg} alt="menu" />
            )}
        </div>
        <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static
         bg-gray-600 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
         transition-all duration-500 ease-in ${open ? ' top-20':' top-[-490px]'} md:opacity-100 opacity-80`}>
            {
               Links.map((Link)=>(
                <li key={Link.name} className=" md:ml-8 text-xl md:my-0 my-7">
                    <a  href={Link.link} className=" text-white hover:text-blue-600 duration-500">{Link.name}</a>
                </li>
               ))
            }
            <Button> Get Started </Button>
        </ul>
        </div>
        </div>
        
        <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className=" hidden sm:block">
                    <img className=" w-full h-full object-cover" src={loginImg} alt="" />
                </div>
                <div className=" bg-gray-800 flex flex-col justify-center">
                    <form className=" max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8">
                        <h2 className=" text-4xl dark:text-white font-bold text-center"> SIGN IN</h2>
                        <div className=" flex flex-col text-gray-400 py-2">
                            <label>User Name</label>
                            <input className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
                        </div>
                        <div className=" flex flex-col text-gray-400 py-2">
                            <label>Password</label>
                            <input className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" />
                        </div>
                        <div className=" flex justify-between text-gray-400 py-2">
                            <p className=" flex items-center"><input className=" mr-2" type="checkbox" /> Remeber Me</p>
                            <p>Forgot Password</p>
                        </div>
                        <button className=" w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 text-white rounded-lg font-semibold  focus:ring-2 focus:outline-none focus:ring-white focus:ring-offset-2 ">SIGN IN</button>
                    </form>
                </div>
            </div></>
    );
  }
  
  export default App;
  
  