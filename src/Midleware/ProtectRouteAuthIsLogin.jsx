import { Navigate, Outlet } from "react-router-dom"

const ProtectRouteAuthIsLogin = (props) => {
  const auth = props.auth

  if (auth) {
    return <Navigate to='/dashboard'></Navigate>
  }

  return <Outlet />
}

export default ProtectRouteAuthIsLogin
