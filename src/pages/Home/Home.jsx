import { FaQuestion, FaCalendar, FaUser, FaLightbulb, FaPoll } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Home.css'

export default function Home(){
    return(
        <div className="template-selection-container">
            <h1 className="template-selection-title">Let's create a form</h1>
            <div className="templates">
                <div className="template-container">
                    <h2 className="template-title">Single question</h2>
                    <NavLink className="template-link"><FaQuestion className="template-icon"/></NavLink>
                </div>
                <div className="template-container">
                    <h2 className="template-title">Assistance confirmation</h2>
                    <NavLink className="template-link"><FaCalendar className="template-icon"/></NavLink>
                </div>
                <div className="template-container">
                    <h2 className="template-title">Contact Data</h2>
                    <NavLink className="template-link"><FaUser className="template-icon"/></NavLink>
                </div>
                <div className="template-container">
                    <h2 className="template-title">Quiz</h2>
                    <NavLink className="template-link"><FaLightbulb className="template-icon"/></NavLink>
                </div>
                <div className="template-container">
                    <h2 className="template-title">Poll</h2>
                    <NavLink className="template-link"><FaPoll className="template-icon"/></NavLink>
                </div>
            </div>
        </div>
    )
}