import React from "react";
import Book from "./Book";
import "./BookList.css";

//  데이터 배열 (HashMap, JSON type)
const books= [
    {
        title: "처음 만난 리액트",
        author: "김소플",
        coverImage : "https://image.yes24.com/goods/172506733/XL"
    },
    {
        title: "데이터 베이스 실습",
        author: "박우창",
        coverImage : "https://image.yes24.com/goods/97538787/XL"
    },
    {
        title: "난생 처음 자바",
        author: "우재남",
        coverImage : "https://image.yes24.com/goods/119842978/XL"
    },
    {
        title: "Whistler",
        author: "Ann Patchett",
        coverImage : "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761863582i/242693052.jpg"
    },
    {
        title: "The Calamity Club",
        author: "Kathryn Stockett",
        coverImage : "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1763049143i/228820257.jpg"
    },
]

function BookList()
{
    return (
        <div className = {"bookListWrapper"}>
            {books.map((book) =>
            {
                return(
                    <Book
                        title = {book.title}
                        author = {book.author}
                        coverImage = {book.coverImage}
                    />
                /*<Book
                    title = {"데이터 베이스 실습"}
                    author = {"박우창"}
                    coverImage = {"https://image.yes24.com/goods/97538787/XL"}
                />,
                <Book
                    title = {"난생 처음 자바"}
                    author = {"우재남"}
                    coverImage = {"https://image.yes24.com/goods/119842978/XL"}
                />*/
                )
            })}

        </div>
    );
}

export default BookList;
