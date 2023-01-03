import React, { useState } from "react"
import AuthApi from "../AuthApi"
import Cookies from "js-cookie"
import ValidatorAuthentication from "../app/validator/authentication"
import AuthenticationService from "../app/Services/AuthenticationService"
import UserService from "../app/Services/UserService"
import { bgOffice, bgOfficeDark } from "../assets/images"
import { Link } from "react-router-dom"

function Authentication() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const authenticationService = new AuthenticationService()
  const userService = new UserService()

  const Auth = React.useContext(AuthApi)

  async function login(e) {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    // validation form
    const { errors: errorValidate, formIsValid } =
      ValidatorAuthentication.validatePostAuthentication({
        email,
        password,
      })

    if (!formIsValid) {
      setErrors(errorValidate)
      setLoading(false)
      return false
    }

    const result = await authenticationService.postAuthentication({
      email,
      password,
    })

    if (result.status === "success") {
      Cookies.set("refreshToken", result.data.refreshToken, { expires: 7 }) // expired 7 day

      const accessToken = result.data.accessToken
      const { data } = await userService.getUserById({ accessToken })
      const user = data.user
      const dataUser = JSON.stringify({
        name: user.name,
        email: user.email,
        no_handphone: user.no_handphone,
      })

      Cookies.set("user", dataUser, { expires: 7 })

      Auth.setAuth(true)
      setLoading(false)
    } else {
      alert(result.message)
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='h-32 md:h-auto md:w-1/2'>
            <img
              aria-hidden='true'
              className='object-cover w-full h-full dark:hidden'
              src={bgOffice}
              alt='Office'
            />
            <img
              aria-hidden='true'
              className='hidden object-cover w-full h-full dark:block'
              src={bgOfficeDark}
              alt='Office'
            />
          </div>
          <div className='flex items-center justify-center p-6 md:my-20 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Login
              </h1>
              <form onSubmit={(e) => login(e)}>
                <label className='block text-sm'>
                  <span className='text-gray-700 dark:text-gray-400'>
                    Email
                  </span>
                  <input
                    className='block w-full mt-1 border border-gray-300 rounded-md px-2 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-blue-600 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='jhondoe@gmail.com'
                  />
                  <div className='text-error'>{errors.email}</div>
                </label>
                <label className='block mt-4 text-sm'>
                  <span className='text-gray-700 dark:text-gray-400'>
                    Password
                  </span>
                  <input
                    className='block w-full mt-1 border border-gray-300 rounded-md px-2 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-blue-600 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input'
                    placeholder='***************'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className='text-error'>{errors.password}</div>
                </label>

                <button
                  className='flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 dark:text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'
                  disabled={loading ? true : false}
                  type='submit'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-door-open'
                    viewBox='0 0 16 16'>
                    <path d='M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z' />
                    <path d='M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z' />
                  </svg>
                  <p className='ml-1 font-bold text-[15px]'>
                    {loading ? "Login is loading ..." : "Login"}
                  </p>
                </button>
              </form>
              <hr className='my-8' />

              <p className='mt-4'>
                <Link
                  className='text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline'
                  href='#'>
                  Forgot your password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
