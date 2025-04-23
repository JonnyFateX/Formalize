import { NavLink } from "react-router-dom"
import { FaBookOpen } from "react-icons/fa6";
import "./Login.css"

export default function Login(){

    function onClick(e){
        e.preventDefault()
    }

    return (
        <>
            <main className="login-main">
                <span className="logo login-logo">Formalize</span>
                <div className="form-container">
                    <form>
                        <h1 className="login-title">Welcome back!</h1>
                        <h2 className="login-subtitle">Please log in to continue.</h2>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <button onClick={onClick} className="login-button">Enter Formalize</button>
                        <span className="register-span">
                            Don't have an account? 
                            <NavLink to="/register" className="register-link">Register here.</NavLink>
                        </span>
                        <FaBookOpen className="top-left-icon" size={50}/>
                    </form>
                </div>
            </main>
        </>
    )
}