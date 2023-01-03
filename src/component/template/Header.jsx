import React from "react"
import AuthApi from "../../AuthApi"
import SwitchTheme from "../switch-theme/SwitchTheme"
import NotificationNavbar from "./NotificationNavbar"
import ProfileNavbar from "./ProfileNavbar"

function Header(props) {
  const Auth = React.useContext(AuthApi)

  return (
    <header className='z-10 py-4 bg-white shadow-md dark:bg-gray-800'>
      <div className='flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300'>
        {/* Mobile hamburger */}
        <button
          id='humbergerButton'
          name='hamburger'
          type='button'
          className='p-1 mr-5 -ml-1 lg:hidden focus:outline-none focus:shadow-outline-purple'
          onClick={props.toggleSideMenu}>
          <span className='hamburger-line origin-top-left'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line origin-bottom-left'></span>
        </button>
        <div className='capitalize font-semibold'>{Auth.pageActive}</div>

        <ul className='flex items-center flex-shrink-0 space-x-6'>
          {/* Theme toggler */}
          <SwitchTheme />

          {/* Notifications menu */}
          <NotificationNavbar />

          {/* Profile menu */}
          <ProfileNavbar />
        </ul>
      </div>
    </header>
  )
}

export default Header
