import { Outlet, Navigate } from 'react-router-dom'

function PublicRoutes() {
  const isAuth = false 

  return !isAuth ? <Outlet /> : <Navigate to="/dashboard" replace />
}

export default PublicRoutes
