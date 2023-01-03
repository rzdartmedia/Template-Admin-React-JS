import React, { useEffect, useState } from "react"
import AuthApi from "../AuthApi"
import MainDashboard from "../component/dashboard/MainDashboard"
import Header from "../component/template/Header"
import Sidebar from "../component/template/Sidebar"

function Dashboard() {
  const Auth = React.useContext(AuthApi)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  useEffect(() => {
    Auth.setPageActive("dashboard")
  }, [Auth])

  function toggleSideMenu() {
    const hamburger = document.getElementById("humbergerButton")
    hamburger.classList.toggle("hamburger-active")
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar isSideMenuOpen={isSideMenuOpen} />
      <div className='flex flex-col flex-1 w-full'>
        <Header toggleSideMenu={toggleSideMenu} />
        <MainDashboard />
      </div>
    </div>
  )
}

export default Dashboard
