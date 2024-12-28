import React from "react";
import "./ProfileWithTimeline.css";

export default function JungProfile() {
  return (
    <div className="profile-container">
      <div className="left-section">
        <div className="profile-image">
          <img src="/assets/jung.png" alt="정순원" />
        </div>
        <h2>정순원</h2>
        <h4>Global Marketing</h4>
        <p>서울시 강남구 테헤란로 152</p>
        <p>
          📧 <a href="mailto:jsw@marketing.com">jsw@marketing.com</a>
        </p>
        <p>📞 010-9876-5432</p>
        <div className="profile-details">
          <h3>PROFILE</h3>
          <p>마케팅 전문가로서 15년 이상의 경험</p>
          <p>국제 마케팅 캠페인을 성공적으로 이끈 경험</p>
          <p>고객 관계 관리와 시장 분석 전문가</p>
        </div>
      </div>
      <div className="right-section">
        <h3>경력</h3>
        <div className="timeline">
          {/* Timeline items here */}
        </div>
      </div>
    </div>
  );
}
