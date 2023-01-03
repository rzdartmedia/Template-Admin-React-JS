import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import AuthApi from "../../AuthApi"
import SidebarMobile from "./SidebarMobile"

function Sidebar(props) {
  const Auth = React.useContext(AuthApi)
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false)

  function togglePagesMenu() {
    setIsPagesMenuOpen(!isPagesMenuOpen)
  }

  return (
    <div>
      {/* Desktop sidebar */}
      <aside className='h-screen z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block flex-shrink-0'>
        <div className='py-4 text-gray-500 dark:text-gray-400'>
          <NavLink
            to={"/dashboard"}
            className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'>
            Windmill
          </NavLink>
          <ul className='mt-6'>
            <li className='relative px-6 py-3'>
              {Auth.pageActive === "dashboard" && (
                <span
                  className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
                  aria-hidden='true'></span>
              )}
              <NavLink
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active'
                to={"/dashboard"}>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
                </svg>
                <span className='ml-4'>Dashboard</span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className='relative px-6 py-3'>
              {Auth.pageActive === "forms" && (
                <span
                  className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
                  aria-hidden='true'></span>
              )}
              <NavLink
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active'
                to={"/forms"}>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
                </svg>
                <span className='ml-4'>Forms</span>
              </NavLink>
            </li>
            <li className='relative px-6 py-3'>
              <button
                className='inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none'
                onClick={togglePagesMenu}
                aria-haspopup='true'>
                <span className='inline-flex items-center'>
                  <svg
                    className='w-5 h-5'
                    aria-hidden='true'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'></path>
                  </svg>
                  <span className='ml-4'>Pages</span>
                </span>
                <svg
                  className={`w-4 h-4 ${
                    isPagesMenuOpen ? "svg-dropdown" : "svg-updown"
                  }`}
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </button>
              {isPagesMenuOpen && (
                <div className='dropdown-animation'>
                  <ul
                    className='p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900'
                    aria-label='submenu'>
                    <li className='px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                      <a className='w-full' href='pages/login.html'>
                        Login
                      </a>
                    </li>
                    <li className='px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                      <a className='w-full' href='pages/create-account.html'>
                        Create account
                      </a>
                    </li>
                    <li className='px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                      <a className='w-full' href='pages/forgot-password.html'>
                        Forgot password
                      </a>
                    </li>
                    <li className='px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                      <a className='w-full' href='pages/404.html'>
                        404
                      </a>
                    </li>
                    <li className='px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                      <a className='w-full' href='pages/blank.html'>
                        Blank
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <div className='px-6 my-6'>
            <button className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'>
              Create account
              <span className='ml-2' aria-hidden='true'>
                +
              </span>
            </button>
          </div>
        </div>
      </aside>
      {/* Desktop sidebar end */}

      {/* Mobile Sidebar */}
      <SidebarMobile
        isSideMenuOpen={props.isSideMenuOpen}
        togglePagesMenu={togglePagesMenu}
        isPagesMenuOpen={isPagesMenuOpen}
      />
      {/* Mobile Sidebar End */}
    </div>
  )
}

export default Sidebar
