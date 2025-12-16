// MainSlider.js: 메인 페이지 상단의 이미지 슬라이더(캐러셀) 컴포넌트입니다.
// 주요 기능:
// - 여러 장의 이미지를 자동/수동으로 넘기며 보여줍니다.
// - 각 슬라이드는 이미지, 제목, 강조문구, 부제목을 포함합니다.
// - 좌우 버튼, 페이드 효과, 자동 전환 타이머 등 다양한 UI 효과를 제공합니다.
import React, { useState, useEffect, useRef } from "react";
import "./MainSlider.css";

const slides = [
  {
    img: process.env.PUBLIC_URL + "/img/slider.jpg",
    title: "자연 속에서 누리는 쉼",
    highlight: "감성 캠핑의 시작",
    sub: "Feel the healing in nature"
  },
  {
    img: process.env.PUBLIC_URL + "/img/slider3.jpg",
    title: "밤하늘 아래 따뜻한 불빛",
    highlight: "함께하는 추억",
    sub: "Make memories under the stars"
  },
  {
    img: process.env.PUBLIC_URL + "/img/slider2.jpg",
    title: "가족과 함께하는 특별한 하루",
    highlight: "행복한 캠핑 라이프",
    sub: "Family, comfort, and joy"
  },
  {
    img: process.env.PUBLIC_URL + "/img/slider1.jpg",
    title: "여유로운 오후, 자연과 하나되어",
    highlight: "프리미엄 캠핑",
    sub: "Relax and enjoy premium camping"
  },
];

function MainSlider() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev
  const timerRef = useRef();

  const next = () => {
    if (animating) return;
    setDirection(1);
    setPrevIdx(idx);
    setIdx((idx + 1) % slides.length);
    setAnimating(true);
  };
  const prev = () => {
    if (animating) return;
    setDirection(-1);
    setPrevIdx(idx);
    setIdx((idx - 1 + slides.length) % slides.length);
    setAnimating(true);
  };

  // 자동 전환
  useEffect(() => {
    timerRef.current = setTimeout(next, 3000);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line
  }, [idx]);

  // 애니메이션 끝나면 상태 초기화
  useEffect(() => {
    if (animating) {
      const t = setTimeout(() => setAnimating(false), 500);
      return () => clearTimeout(t);
    }
  }, [animating]);

  return (
    <div className="main-slider-xfade-wrap">
      {/* 이전 슬라이드 */}
      {animating && (
        <div
          className={`main-slider-xfade-slide${direction === 1 ? ' slide-x-left' : ' slide-x-right'}`}
          style={{ backgroundImage: `url(${slides[prevIdx].img})` }}
        >
          <div className="slider-overlay">
            <h2>
              {slides[prevIdx].title}
              <br />
              <span className="slider-highlight">{slides[prevIdx].highlight}</span>
            </h2>
            <p className="slider-sub">{slides[prevIdx].sub}</p>
          </div>
        </div>
      )}
      {/* 현재 슬라이드 */}
      <div
        className={`main-slider-xfade-slide${animating ? (direction === 1 ? ' slide-x-in-right' : ' slide-x-in-left') : ''}`}
        style={{ backgroundImage: `url(${slides[idx].img})` }}
      >
        <div className="slider-overlay">
          <h2>
            {slides[idx].title}
            <br />
            <span className="slider-highlight">{slides[idx].highlight}</span>
          </h2>
          <p className="slider-sub">{slides[idx].sub}</p>
        </div>
        <button className="slider-btn prev" onClick={prev}>&lt;</button>
        <button className="slider-btn next" onClick={next}>&gt;</button>
      </div>
    </div>
  );
}

export default MainSlider;
