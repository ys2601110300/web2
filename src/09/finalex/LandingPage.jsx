import React, { useState } from "react";
import ToolBar from "./ToolBar";
import "./LandingPage.css";
import catImg from "./cat.png";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="landing-page">
            <ToolBar
                isLoggedIn={isLoggedIn}
                loginClick={() => setIsLoggedIn(true)}
                logoutClick={() => setIsLoggedIn(false)}
            />

            <main className="landing-content">
                <h1>고양이와 함께하는 하루</h1>
                <p>9장 조건부 렌더링 실습 화면입니다.</p>
                <img src = {catImg} width={200}/>
            </main>
        </div>
    );
}

export default LandingPage;