import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"
import { FaBookOpen } from "react-icons/fa6";
import "./LR.css"
import { AuthContext } from "../../App.jsx"

export default function Login(){
    const [formData, setFormData] = useState({
        email: "", 
        password: "",
    })
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    async function onSubmit(e){
        e.preventDefault()
        try{
            const response = await auth.loginUser(...Object.values(formData))
            if(response !== "Not Logged In"){
                navigate("/", {
                    replace: true
                })
            }
        }catch(error){
            if(error.message === "Empty fields"){

            }else if(error.message === "Email not valid"){

            }else if(error.message === "Wrong email or password"){
                
            }
        }
    }

    return (
        <>
            <main className="lr-main">
                <div className="desktop-hero"></div>
                <div className="form-container">
                    <span className="logo lr-logo">Formalize</span>
                    <form
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    >
                        <h1 className="lr-title">Welcome back!</h1>
                        <h2 className="lr-subtitle">Please log in to continue.</h2>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <button className="lr-button">Enter Formalize</button>
                        <span className="lr-span">
                            Don't have an account? 
                            <NavLink to="/register" className="lr-link">Register here.</NavLink>
                        </span>
                        <FaBookOpen className="top-left-icon" size={50}/>
                    </form>
                </div>
            </main>
        </>
    )
}