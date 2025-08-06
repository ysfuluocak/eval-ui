import Header from "./Header"
import Aside from "./Aside"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="container">
            <header className="header"><Header /></header>
            <aside className="sidebar"><Aside /></aside>
            <main className="main-content"><Outlet /></main>
            <footer className="footer"></footer>
        </div>

    )
}

export default Layout