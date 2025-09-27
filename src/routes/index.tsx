import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard-layout'
import PrivateRoutes from './PrivateRoutes'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import AuthLayout from '@/layouts/auth-layout'
function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/dashboard/profile" element={<h1>Profile</h1>} />
           <Route path="*" element={<h1>NotFound</h1>} />
      </Route>

     
    </Routes>
  )
}

export default AppRoutes
