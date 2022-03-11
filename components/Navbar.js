import Image from "next/image"
import avatar from "../temp/avatar.svg"
import {BsPerson} from "react-icons/bs"
const style = {
  wrapper: `h-16 w-full bg-indigo-600/80 text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

const currentAccount =  '0xcd8a1dD9C5A2C0bA750c07ff72900A457160CDFC'

const Navbar = () => {
  return (
    <div className={style.wrapper}>

      <div className={style.leftMenu}>
        <div className={style.logo}>Cuber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>

      <div className={style.rightMenu}>
        <div className={style.menuItem}>help</div>
        <div className={style.menuItem}>Usernamo</div>
        <div className={style.userImageContainer}> <Image className={style.userImage} src={avatar} width={40} height={40} ></Image></div>
      </div>
      {currentAccount? (
        <div>{currentAccount.slice(0,6)}....{currentAccount.slice(38)} </div>)
        :(
          <div className={style.loginButton}>
          <BsPerson/>
           <span className={style.loginText}>please login</span>
           </div>
        )}
    </div>
  )
}

export default Navbar