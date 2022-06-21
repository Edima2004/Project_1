import React, {useContext, useState} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
   //? SideBar
   const [openSidebar, setOpenSidebar]= useState(false)
   const [showMsg, setShowMsg] = useState(false)

   const showHideMsg=()=>{
      setShowMsg(!showMsg)
   }

   const showHideSidebar= ()=>{
      setOpenSidebar(!openSidebar)
   }
  return (
    <AppContext.Provider value={{
         openSidebar,
         showHideSidebar,
         showMsg,
         showHideMsg
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext =()=>{
   return useContext(AppContext)
} 
export {AppContext, AppProvider}