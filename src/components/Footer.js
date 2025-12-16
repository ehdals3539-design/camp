import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_inner">

        {/* 로고 */}
        <div className="footer_logo">
          <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" />
     
        </div>

        {/* 회사 정보 */}
        <div className="footer_info">
          <p><strong>대표자</strong> 홍길동</p>
          <p><strong>주소</strong> 경상남도 창원시 마산회원구 …</p>
          <p><strong>사업자등록번호</strong> 123-45-67890</p>
          <p><strong>이메일</strong> solbaram@naver.com</p>
        </div>

        {/* 은행 정보 */}
        <div className="footer_bank">
          <h3>Bank Info</h3>
          <p>농협은행  **123-1234-1234-12**</p>
          <p>예금주 : 솔바람캠핑</p>
        </div>

        {/* 고객센터 */}
        <div className="footer_cs">
          <h3>CS Center</h3>
          <p className="cs_tel">070-0000-0000</p>
          <p>평일 AM 9:00 ~ PM 18:00</p>
          <p>토요일, 공휴일 휴무</p>
          <button className="cs_btn">문의하기</button>
        </div>
      </div>

      {/* 맨 아래 라인 */}
      <div className="footer_copy">
        © 2025 솔바람캠핑. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
