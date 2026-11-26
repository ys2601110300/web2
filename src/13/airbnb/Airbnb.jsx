import React, { useState } from "react";
import Header from "./Header";
import CategoryBar from "./CategoryBar";
import ListingCard from "./ListingCard";
import "./airbnb.css";

const LISTINGS = [
    {
        id: 1,
        location: "제주시, 한국",
        title: "애월 바다가 한눈에 보이는 감성 독채",
        category: "해변",
        date: "12월 1일~6일",
        price: 185000,
        rating: "4.95",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        location: "종로구, 서울",
        title: "서촌 골목의 고즈넉한 프라이빗 한옥",
        category: "한옥",
        date: "12월 10일~13일",
        price: 220000,
        rating: "4.98",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        location: "가평군, 경기도",
        title: "사계절 온수 인피니티 풀빌라",
        category: "수영장",
        date: "12월 15일~18일",
        price: 310000,
        rating: "4.89",
        isGuestFavorite: false,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        location: "강릉시, 강원도",
        title: "안목해변 도보 3분 오션뷰 스튜디오",
        category: "해변",
        date: "12월 20일~22일",
        price: 135000,
        rating: "4.85",
        isGuestFavorite: false,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 5,
        location: "홍천군, 강원도",
        title: "별이 쏟아지는 숲속 프리미엄 글램핑",
        category: "캠핑",
        date: "1월 3일~5일",
        price: 160000,
        rating: "4.92",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 6,
        location: "마포구, 서울",
        title: "연남동 테라스가 있는 모던 복층 하우스",
        category: "도심",
        date: "1월 8일~11일",
        price: 145000,
        rating: "4.91",
        isGuestFavorite: false,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        location: "경주시, 경상북도",
        title: "황리단길 인근 마당 넓은 전통 한옥",
        category: "한옥",
        date: "1월 14일~16일",
        price: 195000,
        rating: "4.97",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 8,
        location: "평창군, 강원도",
        title: "설산 전망 통창 우드 캐빈",
        category: "산",
        date: "1월 20일~23일",
        price: 240000,
        rating: "4.94",
        isGuestFavorite: false,
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=600&q=80",
    },
];

function Airbnb() {
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [searchText, setSearchText] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [likedIds, setLikedIds] = useState([]);

    const handleToggleLike = (id) => {
        if (likedIds.includes(id)) {
            setLikedIds(likedIds.filter((itemId) => itemId !== id));
        } else {
            setLikedIds([...likedIds, id]);
        }
    };

    const filteredListings = LISTINGS.filter((item) => {
        const matchCategory =
            selectedCategory === "전체" || item.category === selectedCategory;
        const matchSearch =
            item.location.includes(searchText) ||
            item.title.includes(searchText);
        return matchCategory && matchSearch;
    });

    return (
        <div className="airbnb-container">
            <Header
                searchText={searchText}
                onSearchChange={setSearchText}
                isLoggedIn={isLoggedIn}
                onToggleLogin={() => setIsLoggedIn(!isLoggedIn)}
            />

            <CategoryBar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <main className="main-content">
                {isLoggedIn && (
                    <div className="welcome-banner">
                        환영합니다! 현재 찜한 숙소는 <strong>{likedIds.length}개</strong>입니다.
                    </div>
                )}

                {filteredListings.length === 0 ? (
                    <div className="empty-state">
                        <p>조건에 맞는 숙소가 없습니다.</p>
                        <button
                            className="reset-btn"
                            onClick={() => {
                                setSelectedCategory("전체");
                                setSearchText("");
                            }}
                        >
                            필터 초기화
                        </button>
                    </div>
                ) : (
                    <div className="listing-grid">
                        {filteredListings.map((item) => (
                            <ListingCard
                                key={item.id}
                                item={item}
                                isLiked={likedIds.includes(item.id)}
                                onToggleLike={handleToggleLike}
                            >
                                <span className="card-price">
                                    ₩{item.price.toLocaleString()}
                                </span>
                                <span className="card-night"> /박</span>
                            </ListingCard>
                        ))}
                    </div>
                )}
            </main>

            <footer className="airbnb-footer">
                <p>© 2026 Airbnb Clone · React 과제용 화면</p>
            </footer>
        </div>
    );
}

export default Airbnb;