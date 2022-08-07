import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="body">
            <div className="hs">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}