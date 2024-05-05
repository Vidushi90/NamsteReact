import { useState } from "react";
import { LOGO_URL } from "../utils/constants"

const Header = () => {
    const [btnLogin, setbtnLogin] = useState(["Login"])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className="loginbtn"
                    onClick={()=>{
                        btnLogin == "Login" ? setbtnLogin("Logout") : setbtnLogin("Login");
                    }}>{btnLogin}</button></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;