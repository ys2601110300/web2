import React from "react";

function Header(props) {
    const { searchText, onSearchChange, isLoggedIn, onToggleLogin } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <header className="airbnb-header">
            <div className="header-inner">
                {/* 로고 */}
                <div className="logo">
                    <span className="logo-icon">⌂</span>
                    <span className="logo-text">airbnb</span>
                </div>

                {/* 검색바 */}
                <form className="search-bar" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="여행지나 숙소 이름을 검색해보세요 (예: 제주, 서울)"
                        value={searchText}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                    <button type="submit" className="search-btn">
                        검색
                    </button>
                </form>

                {/* 우측 메뉴 (조건부 렌더링) */}
                <div className="user-menu">
                    <span className="host-text">당신의 공간을 에어비앤비하세요</span>
                    <button className="login-btn" onClick={onToggleLogin}>
                        {isLoggedIn ? "로그아웃" : "로그인"}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;