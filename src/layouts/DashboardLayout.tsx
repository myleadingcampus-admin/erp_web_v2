import { Outlet, Link } from 'react-router-dom'
import Sidebar from "../components/Sidebar"
function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <section className="flex-1 p-6">
        <Outlet />
      </section>
    </div>
  )
}

export default DashboardLayout
