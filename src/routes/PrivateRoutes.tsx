import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes() {
  const isAuth = false 

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoutes
