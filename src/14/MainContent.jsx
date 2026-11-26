import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isLight = theme === "light";

    return (
        <>
            <header className="zr-header">
                <div className="zr-logo">Monolith</div>
                <nav className="zr-nav">
                    <span>Collection</span>
                    <span>Projects</span>
                    <span>About</span>
                </nav>
                <button className="zr-toggle" onClick={toggleTheme}>
                    <span className="zr-dot" />
                    {isLight ? "Dark" : "Light"}
                </button>
            </header>

            <main>
                <section className="zr-hero">
                    <div>
                        <p className="zr-eyebrow">Minimal Form &amp; Contrast</p>
                        <h1 className="zr-title">
                            Quiet spaces shaped
                            <br />
                            by light and shadow.
                        </h1>
                    </div>

                    <div className="zr-hero-right">
                        <p className="zr-desc">
                            불필요한 장식을 덜어내고 여백과 명도 대비만으로
                            구성한 미니멀 인터페이스입니다. 아래 버튼으로
                            라이트·다크 테마를 전환해 보세요.
                        </p>
                        <button className="zr-cta" onClick={toggleTheme}>
                            {isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
                        </button>
                    </div>
                </section>

                <section className="zr-grid">
                    <article className="zr-card">
                        <div className="zr-frame">01 / Light</div>
                        <span className="zr-card-num">01</span>
                        <h2 className="zr-card-title">Clarity</h2>
                        <p className="zr-card-text">
                            따뜻한 오프화이트 배경과 짙은 먹색 타이포그래피의 조화.
                        </p>
                    </article>

                    <article className="zr-card">
                        <div className="zr-frame">02 / Space</div>
                        <span className="zr-card-num">02</span>
                        <h2 className="zr-card-title">Proportion</h2>
                        <p className="zr-card-text">
                            얇은 1px 그리드 선과 넓은 여백으로 시선을 정리합니다.
                        </p>
                    </article>

                    <article className="zr-card">
                        <div className="zr-frame">03 / Shadow</div>
                        <span className="zr-card-num">03</span>
                        <h2 className="zr-card-title">Depth</h2>
                        <p className="zr-card-text">
                            다크 모드 전환 시 눈부심을 줄인 매트한 차콜 톤으로 바뀝니다.
                        </p>
                    </article>
                </section>
            </main>

            <footer className="zr-footer">
                <span>© 2026 MONOLITH</span>
                <span>CURRENT MODE — {theme.toUpperCase()}</span>
            </footer>
        </>
    );
}

export default MainContent;