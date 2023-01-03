import { Navigate, Outlet } from "react-router-dom"

const ProtectRouteAuth = (props) => {
  const auth = props.auth

  if (!auth) {
    return <Navigate to='/'></Navigate>
  }

  return <Outlet />
}

export default ProtectRouteAuth
