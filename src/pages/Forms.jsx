import React, { useEffect, useState } from "react"
import AuthApi from "../AuthApi"
import MainForms from "../component/forms/MainForms"
import Header from "../component/template/Header"
import Sidebar from "../component/template/Sidebar"

function Forms() {
  const Auth = React.useContext(AuthApi)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  useEffect(() => {
    Auth.setPageActive("forms")
  }, [Auth])

  function toggleSideMenu() {
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar isSideMenuOpen={isSideMenuOpen} />
      <div className='flex flex-col flex-1 w-full'>
        <Header toggleSideMenu={toggleSideMenu} />
        <MainForms />
      </div>
    </div>
  )
}

export default Forms
