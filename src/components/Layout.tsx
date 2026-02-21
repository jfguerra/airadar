import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  )
}
