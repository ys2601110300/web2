import React from "react";

const CATEGORIES = [
    { id: "전체", label: "전체", icon: "🏠" },
    { id: "해변", label: "해변 바로 앞", icon: "🏖️" },
    { id: "한옥", label: "한옥", icon: "🏯" },
    { id: "수영장", label: "멋진 수영장", icon: "🏊" },
    { id: "캠핑", label: "캠핑장", icon: "⛺" },
    { id: "도심", label: "인기 급상승", icon: "🔥" },
    { id: "산", label: "국립공원", icon: "⛰️" },
];

function CategoryBar(props) {
    const { selectedCategory, onSelectCategory } = props;

    return (
        <nav className="category-bar">
            <div className="category-list">
                {CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        className={`category-item ${
                            selectedCategory === category.id ? "active" : ""
                        }`}
                        onClick={() => onSelectCategory(category.id)}
                    >
                        <span className="category-icon">{category.icon}</span>
                        <span className="category-label">{category.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default CategoryBar;