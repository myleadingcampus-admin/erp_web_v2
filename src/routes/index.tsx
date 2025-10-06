import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard-layout'
import PrivateRoutes from './PrivateRoutes'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import ForgetPassword from "../pages/auth/forget-password"
import AuthLayout from '@/layouts/auth-layout'
import SignUp from '../pages/auth/sign-up'
function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
           <Route path="/forget-password" element={<ForgetPassword/>} />
            <Route path="/sign-up" element={<SignUp/>} />
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
