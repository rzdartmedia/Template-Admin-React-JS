import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"

import AuthApi from "./AuthApi"
import React, { useEffect, useState } from "react"
import Authentication from "./pages/Authentication"
import ProtectRouteAuthIsLogin from "./Midleware/ProtectRouteAuthIsLogin"
import ProtectRouteAuth from "./Midleware/ProtectRouteAuth"
import Cookies from "js-cookie"
import NotFound from "./pages/NotFound"
import Forms from "./pages/Forms"

function App() {
  const [auth, setAuth] = useState(false)
  const [pageActive, setPageActive] = useState("dashboard")
  const readCookie = () => {
    const refreshToken = Cookies.get("refreshToken")
    if (refreshToken) {
      setAuth(true)
    }
  }

  useEffect(() => {
    readCookie()
  }, [])

  return (
    <AuthApi.Provider value={{ auth, setAuth, pageActive, setPageActive }}>
      {/* <BrowserRouter basename='FeMongoose'> */}
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectRouteAuthIsLogin auth={auth} />}>
            <Route index element={<Authentication />} />
          </Route>
          <Route element={<ProtectRouteAuth auth={auth} />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/forms' element={<Forms />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthApi.Provider>
  )
}

export default App
