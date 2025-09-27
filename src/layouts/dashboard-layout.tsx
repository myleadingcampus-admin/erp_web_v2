import { Outlet, Link, Navigate } from 'react-router-dom'
import Sidebar from "../components/Sidebar"
function DashboardLayout() {
    const isLoggedIn = true
    if(!isLoggedIn) {
        return <Navigate to="/" replace />
    }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
