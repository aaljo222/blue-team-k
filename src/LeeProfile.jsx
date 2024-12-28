import React from "react";
import "./ProfileWithTimeline.css";

export default function LeeProfile() {
  return (
    <div className="profile-container">
      <div className="left-section">
        <div className="profile-image">
          <img src="/assets/lee.PNG" alt="이재오" />
        </div>
        <h2>이재오</h2>
        <h4>CTO & 인공지능, 빅데이터 전문가</h4>
        <p>수원시 영통구 영통동 삼성로 320번길 62</p>
        <p>
          📧 <a href="mailto:aaljo2@naver.com">aaljo2@naver.com</a>
        </p>
        <p>📞 010-7547-3869</p>
        <div className="profile-details">
          <h3>PROFILE</h3>
          <p>실무 경력 23년과 교육 경력 7년을 동시에 겸비한 전문 개발자 및 교육자</p>
          <p>사랑하는 두 딸, 아내와 소소한 행복을 꿈꾸는 평범한 남편이자 아빠</p>
          <p>수학, 알고리즘, Hardware, Software, 인공지능 융합 전문 개발자</p>
        </div>
      </div>
      <div className="right-section">
        <h3>경력</h3>
        <div className="timeline">
          <div className="timeline-item">
            <h4>신기술 특허 분석 및 특허 전략 보고</h4>
            <p>2008/11 - 2013/06 | 미래특허</p>
            <p>
              삼성 종합 기술원 및 삼성전자 신기술 제품 기획 전 특허 관련 특허 분석 및 특허 맵 작성
            </p>
          </div>
          <div className="timeline-item">
            <h4>임베디드 시스템 개발</h4>
            <p>2013/08 - 2015/12 | 네오와인, 포스트테크</p>
            <p>암호 chip 활용 시스템 엔지니어</p>
          </div>
          <div className="timeline-item">
            <h4>레이저 가공 장비 개발</h4>
            <p>2016/01 - 2018/01 | 비슬로</p>
            <p>전장 회로 설계 및 소프트웨어 제어팀장</p>
          </div>
          <div className="timeline-item">
            <h4>다수의 강의</h4>
            <p>2018/02 - 현재</p>
            <p>프로그래밍 및 인공지능 강의</p>
          </div>
        </div>
      </div>
    </div>
  );
}
