import React from "react";
import Book from "./Book";
import "./Book.css";

function Library(props){
    return(
        <div className="library-container">
            <Book name = "처음 만난 파이썬" numOfPage = {300} imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaIQ3KumWiEo3vwW_-8OOY1yeiifn79OHg-XtZOo7VQ&s=10"/>
            <Book name = "처음 만난 AWS" numOfPage = {400} imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5LfpSnHPRDYMVheq3oAnu826UXaw9kkqw-y-2CtHnCo5dZuTnQq1mtWN&s=10"/>
            <Book name = "처음 만난 React" numOfPage = {500} imgUrl = "https://cdn-prod.hanbit.co.kr/books/B9365371874_l.jpg"/>
            <Book name = "처음 만난 자바스크립트" numOfPage = {250} imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3EzXxtbQ_3gK9I-c8-21Kn1Yp-TSVBcXDsnueaxYJw&s"/>
            <Book name = "처음 만난 HTML/CSS" numOfPage = {100} imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQn6FDgeoWbQyI_rXbgFjQtalgeq1OaBnFtyhjZlrw6w&s"/>
        </div>
    );
}

export default Library;