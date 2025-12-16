import React from "react";
import "./HeroSection.css";

// HeroSection 컴포넌트
// 이 컴포넌트는 "이미지 + 제목 + 설명"으로 구성된 소개 섹션을 만드는 역할.
// props 설명:
// - img: 보여줄 이미지 경로
// - title: 제목 문장
// - highlight: 강조해서 보여줄 단어 또는 문장
// - desc: 아래에 들어가는 설명 글
// - reverse: true면 레이아웃을 반대로(이미지와 텍스트의 위치를 반대로) 배치함
function HeroSection({ img, title, highlight, desc, reverse }) {
  return (
    // 섹션 전체를 감싸는 태그
    // reverse 값이 true면 클래스에 'hero-reverse' 추가해서 레이아웃 반전
    <section className={`hero-section${reverse ? ' hero-reverse' : ''}`}>
      
      {/* 왼쪽(또는 오른쪽)에 배치될 이미지 영역 */}
      <div className="hero-img-wrap">
        {/* 실제 보여줄 이미지 */}
        <img className="hero-img" src={img} alt="소개" />
      </div>

      {/* 이미지 옆에 배치되는 텍스트 영역 */}
      <div className="hero-text">
        <h2>
          {/* 제목 */}
          {title}
          <br />
          {/* 강조 문구: CSS로 색상이나 굵기 등을 강조함 */}
          <span className="hero-highlight">{highlight}</span>
        </h2>

        {/* 소개 설명 문장 */}
        <p className="hero-desc">{desc}</p>
      </div>
    </section>
  );
}

export default HeroSection;
