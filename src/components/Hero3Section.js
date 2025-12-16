import React from "react";
import "./Hero3Section.css";

// Hero3Section 컴포넌트
// → 캠핑 홈페이지에서 큰 배너 이미지와 소개 문구를 보여주는 영역
// → 전달받은 image(이미지 경로)를 화면에 표시함
function Hero3Section({ image }) {
  return (
    // 화면 전체를 감싸는 섹션(영역)
    <section className="hero3-section">

      {/* 배너 이미지가 들어가는 영역 */}
      <div className="hero3-img-wrap">
        {/* 실제로 보여줄 이미지. props로 받은 image 값을 src로 사용 */}
        <img className="hero3-img" src={image} alt="캠핑 배너" />
      </div>

      {/* 텍스트(제목, 설명, 특징 리스트 등)를 담아두는 영역 */}
      <div className="hero3-text">

        {/* 큰 제목: 강조할 단어는 span으로 스타일 따로 적용 */}
        <h2>
          <span className="hero-highlight">아이디어와 기술</span>로,<br />
          캠핑의 방식을 다시 설계합니다.
        </h2>

        {/* 제목 아래의 설명 문장 부분 */}
        <p className="hero3-desc">
          기술은 사람을 편하게 만들기 위해 존재해야 한다는 철학 아래,<br />
          기능과 감성을 모두 만족시키는 제품을 직접 개발합니다.
        </p>

        {/* 핵심 특징 3가지를 bullet 리스트로 정리 */}
        <div className="hero3-box">
          <ul>
            <li>세계 최초 에어텐트 전용 공기 유지 펌프 개발</li>
            <li>국내 최다 에어텐트 디자인 보유</li>
            <li>독보적인 공기가구, 도킹 화로대, 확장형 도킹 시스템까지</li>
          </ul>
        </div>

        {/* 마지막에 강조하는 문장 (하단 문구) */}
        <p className="hero3-foot">
          솔바람캠핑은 ‘좋은 아이디어’가 사람을 편하게 만들 수 있다는 믿음으로<br />
          오늘도 새로운 캠핑을 상상합니다.
        </p>
      </div>
    </section>
  );
}

export default Hero3Section;
