import { Outlet } from "react-router-dom"
import "./Layout.css"

export default function Layout(){
    return(
        <>
            <header><span className="logo">Formalize</span></header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}