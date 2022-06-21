import React from 'react'
import {MdClear} from 'react-icons/md'
import {Link} from 'react-router-dom'
import { sideBar } from './data'
import { useGlobalContext } from './context'

const SideBar = () => {
   const {showHideSidebar}= useGlobalContext()
  return (
    <aside>
      <div className='home-top sidebar-top'>
         <img src="../Frame 37.svg" alt="logo" />
         <MdClear className='fatimes' onClick={showHideSidebar}/>
      </div>
      <div className='sidebar-bottom'>
         {sideBar.map((side)=>{
            const {name, id, link}= side;
            return(
               <a className='sidebar-link' href ={link}>
                  <p key={id}>{name}</p>
               </a>
            )
         })}
         
      </div>
      <div className="bottom"></div>
    </aside>
  )
}

export default SideBar