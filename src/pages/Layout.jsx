import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom"
import "./Layout.css"
import { AuthContext } from "../App";


export default function Layout(){
    const auth = useContext(AuthContext)
    return(
        <>
            <header>
                <span className="logo">Formalize</span>
                {
                    !(auth.currentUser())? 
                    <NavLink to="/login" className="login-link">Login</NavLink>:''
                }
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}