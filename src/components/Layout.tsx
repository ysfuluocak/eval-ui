import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="container">
            <header className="header"><Header /></header>
            <div className="sidebar"><Sidebar /></div>
            <main className="main-content"><Outlet /></main>
            <footer className="footer"></footer>
        </div>

    )
}

export default Layout