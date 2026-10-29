import React, {useState} from "react";
import LoginButton from "./Element";
import LogoutButton from "./Element2";
import Greeting from "../ex1/Rendering2";
import "./Element.css";

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick}/>
    }
    else{
        button = <LoginButton onClick={handleLoginClick}/>
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <span className="login-icon">
                    {isLoggedIn ? "👋" : "🔒"}
                </span>

                <Greeting isLoggedIn={isLoggedIn} />

                <p>
                    {isLoggedIn
                        ? "환영합니다. 오늘도 좋은 하루 보내세요!"
                        : "로그인하고 서비스를 이용해 보세요."}
                </p>

                <div className="login-actions">
                    {button}
                </div>
            </div>
        </div>
    );
}

export default LoginControl;