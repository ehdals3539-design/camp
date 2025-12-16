// Title2.js: 기타용품 TOP 영역의 타이틀 컴포넌트입니다.
// 주요 기능:
// - 중앙 정렬된 제목과 간단한 설명을 함께 보여줍니다.
// - 스타일은 csst1 객체로 지정합니다.
import React from "react";

const Title2 = () => {
  let csst1 = {
    marginTop: "70px",
  };
  return (
    <>
      <h3 style={csst1}>기타용품 TOP</h3>
      <p>캠핑에 있으면 좋은 추천제품</p>
    </>
  );
};

export default Title2;
