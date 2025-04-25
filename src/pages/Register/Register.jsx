import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"
import { FaBookOpen } from "react-icons/fa6";
import "../Login/LR.css"
import { AuthContext } from "../../App.jsx"

export default function Register(){
    const [formData, setFormData] = useState({
        name: "",
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
            const response = await auth.createUser(...Object.values(formData))
            if(response === "User Created"){
                navigate("/login", {
                    replace: true
                })
            }
        }catch(error){
            if(error.message === "Empty fields"){

            }else if(error.message === "Email not valid"){

            }else if(error.message === "Email already in use"){
                
            }
        }
    }

    return (
        <>
            <main className="lr-main reverse-order">
                <div className="desktop-hero hero2"></div>
                <div className="form-container">
                    <span className="logo lr-logo">Formalize</span>
                    <form
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    >
                        <h1 className="lr-title">Let's get to work!</h1>
                        <h2 className="lr-subtitle">Please fill every field.</h2>
                        <div className="input-container">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name"/>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <button className="lr-button">Create account</button>
                        <span className="lr-span">
                            Already have an account? 
                            <NavLink to="/login" className="lr-link">Login here.</NavLink>
                        </span>
                        <FaBookOpen className="top-left-icon" size={50}/>
                    </form>
                </div>
            </main>
        </>
    )
}