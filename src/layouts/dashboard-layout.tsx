import { Outlet, Link, Navigate } from 'react-router-dom'
import Sidebar from "../components/Sidebar"
import { Navbar } from '../components/navbar/navbar'
function DashboardLayout() {
    const isLoggedIn = true
    if(!isLoggedIn) {
        return <Navigate to="/" replace />
    }
  return (
     <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
