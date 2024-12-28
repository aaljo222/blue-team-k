import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlidingProfiles.css';

export default function ProfileSlider() {
  const profiles = [
    {
      name: '정순원',
      title: 'Global Marketing',
      image: '/assets/jung.PNG',
    },
    {
      name: '이재오',
      title: `TV 화질 개선 및 영상 신호처리 (삼성전자)
기상청 관측 장비 개발 (진양공업주식회사)
신기술 특허 분석 및 전략 보고 (미래특허)
임베디드 시스템 개발 (네오와인, 포스트테크)
레이저 가공 장비 개발 (비슬로)
다수의 자바 및 파이썬 강의 진행 (그린 컴퓨터 등)`,
      image: '/assets/lee.PNG',
    },
    {
      name: '홍태오',
      title: 'CEO',
      image: '/assets/hong.PNG',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {profiles.map((profile, index) => (
        <div key={index} className="profile-slide">
          <img src={profile.image} alt={profile.name} className="profile-image" />
          <h3 className="profile-name">{profile.name}</h3>
          <p className="profile-title">{profile.title}</p>
        </div>
      ))}
    </Slider>
  );
}
