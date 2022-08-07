import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div className="body">
            <div className="hs">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}