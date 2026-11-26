import { useContext, useState, useMemo } from "react";
import ThemeContext from "./ThemeContext";
import ondeImg from "./images/furn_01_onde.jpg";
import linaImg from "./images/furn_02_lina.jpg";
import kantImg from "./images/furn_03_kant.jpg";
import ruheImg from "./images/furn_04_ruhe.jpg";
import solImg from "./images/furn_05_sol.jpg";
import feldImg from "./images/furn_06_feld.jpg";

const FURNITURE_LIST = [
    {
        id: 1,
        num: "01",
        name: "ONDE Sideboard",
        category: "Storage",
        year: 2026,
        price: 3800000,
        desc: "정교한 수직 결이 살아있는 오크 원목 사이드보드.",
        image: ondeImg,
    },
    {
        id: 2,
        num: "02",
        name: "LINA Dining Table",
        category: "Table",
        year: 2025,
        price: 4200000,
        desc: "가늘게 테이퍼링된 다리가 돋보이는 월넛 다이닝 테이블.",
        image: linaImg,
    },
    {
        id: 3,
        num: "03",
        name: "KANT Lounge Chair",
        category: "Chair",
        year: 2026,
        price: 1950000,
        desc: "애쉬 원목 프레임과 오트밀 린넨 쿠션의 라운지 체어.",
        image: kantImg,
    },
    {
        id: 4,
        num: "04",
        name: "RUHE Platform Bed",
        category: "Bed",
        year: 2024,
        price: 3400000,
        desc: "낮은 비례로 침실에 여백을 더하는 오크 플랫폼 침대.",
        image: ruheImg,
    },
    {
        id: 5,
        num: "05",
        name: "SOL Pendant Lamp",
        category: "Lighting",
        year: 2025,
        price: 980000,
        desc: "무광 세라믹 갓과 원목 소켓을 조합한 펜던트 조명.",
        image: solImg,
    },
    {
        id: 6,
        num: "06",
        name: "FELD Shelving Unit",
        category: "Storage",
        year: 2023,
        price: 2650000,
        desc: "열린 그리드 구조로 공간을 정돈하는 원목 선반 유닛.",
        image: feldImg,
    },
];

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [sortBy, setSortBy] = useState("default");
    const [layout, setLayout] = useState("3col");
    const isLight = theme === "light";

    const sortedItems = useMemo(() => {
        const list = [...FURNITURE_LIST];
        switch (sortBy) {
            case "name-asc":
                return list.sort((a, b) => a.name.localeCompare(b.name));
            case "price-asc":
                return list.sort((a, b) => a.price - b.price);
            case "price-desc":
                return list.sort((a, b) => b.price - a.price);
            case "year-desc":
                return list.sort((a, b) => b.year - a.year || a.id - b.id);
            default:
                return list.sort((a, b) => a.id - b.id);
        }
    }, [sortBy]);

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

                {/* 정렬 툴바 */}
                <div className="zr-toolbar">
                    <span className="zr-count">06 ITEMS</span>

                    <div className="zr-toolbar-controls">
                        <select
                            className="zr-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            aria-label="정렬 기준"
                        >
                            <option value="default">기본순 (01–06)</option>
                            <option value="name-asc">이름순 (A–Z)</option>
                            <option value="price-asc">가격 낮은순</option>
                            <option value="price-desc">가격 높은순</option>
                            <option value="year-desc">최신순 (연도)</option>
                        </select>

                        <div className="zr-layout-group">
                            <button
                                type="button"
                                className={`zr-layout-btn ${layout === "3col" ? "is-active" : ""}`}
                                onClick={() => setLayout("3col")}
                            >
                                3열
                            </button>
                            <button
                                type="button"
                                className={`zr-layout-btn ${layout === "2col" ? "is-active" : ""}`}
                                onClick={() => setLayout("2col")}
                            >
                                2열
                            </button>
                        </div>
                    </div>
                </div>

                {/* 가구 6종 그리드 */}
                <section className="zr-grid" data-layout={layout}>
                    {sortedItems.map((item) => (
                        <article className="zr-card" key={item.id}>
                            <div className="zr-frame">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="zr-card-meta">
                                <span>{item.num} / {item.category}</span>
                                <span>{item.year}</span>
                            </div>
                            <h2 className="zr-card-title">{item.name}</h2>
                            <p className="zr-card-text">{item.desc}</p>
                            <p className="zr-card-price">
                                ₩{item.price.toLocaleString("ko-KR")}
                            </p>
                        </article>
                    ))}
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