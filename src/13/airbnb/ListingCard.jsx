import React from "react";

function ListingCard(props) {
    const { item, isLiked, onToggleLike, children } = props;

    return (
        <div className="listing-card">
            <div className="card-img-wrapper">
                <img src={item.image} alt={item.title} className="card-img" />

                {/* 조건부 렌더링: 게스트 선호 배지 */}
                {item.isGuestFavorite && (
                    <span className="favorite-badge">게스트 선호</span>
                )}

                {/* 찜하기 버튼 */}
                <button
                    className={`like-btn ${isLiked ? "liked" : ""}`}
                    onClick={() => onToggleLike(item.id)}
                    aria-label="찜하기"
                >
                    {isLiked ? "♥" : "♡"}
                </button>
            </div>

            <div className="card-info">
                <div className="card-header">
                    <h3 className="card-location">{item.location}</h3>
                    <span className="card-rating">★ {item.rating}</span>
                </div>
                <p className="card-title">{item.title}</p>
                <p className="card-date">{item.date}</p>
                {/* 13장 합성(children): 가격 등 추가 정보 표시 */}
                <div className="card-footer">{children}</div>
            </div>
        </div>
    );
}

export default ListingCard;