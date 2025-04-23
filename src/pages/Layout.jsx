import { Outlet, NavLink } from "react-router-dom"
import "./Layout.css"

export default function Layout(){
    return(
        <>
            <header>
                <span className="logo">Formalize</span>
                <NavLink to="/login" className="login-link">Login</NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}