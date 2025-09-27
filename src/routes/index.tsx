import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import DashboardLayout from '../layouts/DashboardLayout'



import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
function AppRoutes() {
  return (
    <Routes>
      {/* Public Layout  */}
      <Route element={<MainLayout />}>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>

      {/* Private (Dashboard) Layout */}
      <Route element={<PrivateRoutes />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/dashboard/profile" element={<h1>Profile</h1>} />
        </Route>
      </Route>

      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  )
}

export default AppRoutes
