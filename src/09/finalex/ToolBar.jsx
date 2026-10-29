import React from "react";

function ToolBar({ isLoggedIn, loginClick, logoutClick }) {
    return (
        <header className="toolbar">
            <span className="toolbar-logo">🐾 CAT HOUSE</span>

            <div className="toolbar-actions">
                {isLoggedIn && <span>환영합니다!</span>}

                {isLoggedIn ? (
                    <button onClick={logoutClick}>로그아웃</button>
                ) : (
                    <button onClick={loginClick}>로그인</button>
                )}
            </div>
        </header>
    );
}

export default ToolBar;