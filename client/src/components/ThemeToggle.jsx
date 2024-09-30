import { useEffect,useState } from 'react';
import { logo, sun } from '../assets';





const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
    <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
      )}
    </div>
  )
const ThemeToggle = () => {
    const [darkMode,setDarkMode]=useState(false);

    useEffect(()=>{
        const theme=localStorage.getItem("theme")
        if(theme==="dark") setDarkMode(false);
    },[])

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme","dark")
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme","dark")
        }
    },[darkMode])
  return (
    <div onClick={()=>setDarkMode(!darkMode)}>
    <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
    
    </div>
  )}

export default ThemeToggle
