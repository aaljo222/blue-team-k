import React from "react";
import "./ProfileWithTimeline.css";

export default function HongProfile() {
  return (
    <div className="profile-container">
      <div className="left-section">
        <div className="profile-image">
          <img src="/assets/hong.PNG" alt="홍태오" />
        </div>
        <h2>홍태오</h2>
        <h4>CEO</h4>
        <p>서울시 용산구 한남대로 45길 12</p>
        <p>
          📧 <a href="mailto:hongtaeo@company.com">hongtaeo@company.com</a>
        </p>
        <p>📞 010-1234-5678</p>
        <div className="profile-details">
          <h3>PROFILE</h3>
          <p>성공적인 기업 경영자로서 혁신적인 리더십을 발휘</p>
          <p>팀 관리와 사업 전략 개발 전문가</p>
          <p>15년 이상의 기업 관리 경험</p>
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
