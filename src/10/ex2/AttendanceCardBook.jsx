import React from "react";
import img1 from "../imgs/img1.png";
import "./AttendanceCardBook.css"; // CSS 파일 임포트

const students = [
    {
        id: 1,
        name: "장원영",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: img1,
    },
    {
        id: 2,
        name: "안유진",
        grade: 2,
        major: "메카트로닉스",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "김리즈",
        grade: 1,
    major: "스마트정보통신",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        id: 4,
        name: "박레이",
        grade: 3,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        id: 5,
        name: "이가을",
        grade: 1,
        major: "시각디자인",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        id: 6,
        name: "최이서",
        grade: 1,
        major: "메타버스콘텐츠",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

function AttendanceCardBook() {
    return (
        <div className="attendance-container">
            <h2 className="attendance-title">학생 출석부</h2>
            <div className="card-grid">
                {students.map((student) => (
                    <div key={student.id} className="student-card">
                        <img
                            src={student.avatar}
                            alt={student.name}
                            className="student-avatar"
                        />
                        <div className="student-info">
                            <h3 className="student-name">{student.name}</h3>
                            <p className="student-detail">
                                {student.grade}학년 &nbsp;|&nbsp; {student.major}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceCardBook;