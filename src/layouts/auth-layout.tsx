import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
  const isLoggedIn = true
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />
  }
  return (

    <main>
      <Outlet />
    </main>

  )
}

export default AuthLayout