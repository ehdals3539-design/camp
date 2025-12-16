

// Detail.js: 상품의 상세 정보를 보여주는 페이지입니다.
// 주요 기능:
// - URL에서 상품 종류(type: fruit/veggie)와 상품 id(paramId)를 받아 해당 상품을 찾아서 보여줍니다.
// - 상품의 이미지, 이름, 가격, 설명, 옵션, 연관상품, 주문 버튼 등을 표시합니다.
// - 장바구니에 상품을 담거나, 주문 확인, 문의, 유튜브 설치법 등 다양한 부가 기능을 제공합니다.
//
// React, Redux, React Router, styled-components, react-bootstrap 등 다양한 라이브러리를 활용합니다.


// React의 주요 훅과 라이브러리 import
import React, { useState, useEffect } from "react"; // 상태관리와 생명주기
import { useParams, useNavigate, Link } from "react-router-dom"; // URL 파라미터, 페이지 이동, 링크
import { Button } from "react-bootstrap"; // 부트스트랩 버튼
import styled from "styled-components"; // CSS-in-JS 스타일링
import { useDispatch } from "react-redux"; // Redux 액션 디스패치
import { addItem } from "../store.js"; // 장바구니에 상품 추가 액션
import { useToast } from "./ToastProvider"; // 토스트 알림
import "./Footer.css"; // 푸터 스타일


// =======================
// 스타일 컴포넌트 (styled-components 사용)
// =======================
// 배너 영역 스타일
const Banner = styled.div`
  padding: 20px;
`;

// 배너 버튼 스타일 (배경에 이미지 적용)
const BannerBtn = styled.button`
  color: white;
  font-size: 30px;
  width: 100%;
  padding: 100px 100px;
  border: 1px solid #ccc;
  background-image: url(${process.env.PUBLIC_URL + "/img/banner.jpg"});
  background-size: cover;
  background-position: center;
`;

// =======================
// 연관상품 컴포넌트
// =======================
// 현재 상품과 관련된(비슷한) 다른 상품 3개를 랜덤으로 보여주는 컴포넌트입니다.
// 상품 클릭 시 해당 상세페이지로 이동합니다.
function RelatedProducts({ fruits, veggies, id }) {
  const navigate = useNavigate(); // 페이지 이동 함수
  const [fade, setFade] = useState(false); // 페이드 아웃 효과

  // 현재 상품을 제외한 전체 상품 목록
  const all = [...fruits, ...veggies].filter((x) => x.id !== id);
  // 3개를 무작위로 추출
  const picks = [...all].sort(() => Math.random() - 0.5).slice(0, 3);

  // 상품 클릭 시 페이드 아웃 후 상세페이지로 이동
  const handleClick = (t, itemId) => {
    setFade(true);
    setTimeout(() => {
      navigate(`/detail/${t}/${itemId}`);
      setFade(false);
    }, 350);
  };

  return (
    <div style={{ margin: "56px 0 32px 0", transition: "opacity 0.35s", opacity: fade ? 0 : 1 }}>
      <h5 style={{ fontWeight: 700, marginBottom: 20 }}>
        이 상품과 함께 보면 좋은 상품
      </h5>
      <div
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          paddingBottom: 8,
        }}
      >
        {picks.map((item) => {
          const t = fruits.find((f) => f.id === item.id) ? "fruit" : "veggie";
          return (
            <div
              key={item.id}
              style={{
                minWidth: 180,
                background: "#fafafa",
                borderRadius: 16,
                boxShadow: "0 2px 8px #0001",
                padding: 12,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => handleClick(t, item.id)}
            >
              <img
                src={process.env.PUBLIC_URL + "/" + item.imgUrl}
                alt={item.title}
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 12,
                  marginBottom: 8,
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  background: "#f8f8f8",
                }}
              />
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 4,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#888",
                  marginBottom: 2,
                }}
              >
                {item.price}
              </div>
              <div style={{ fontSize: 13, color: "#f7b500" }}>
                ★ 4.7{" "}
                <span style={{ color: "#888", fontWeight: 400 }}>(123)</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// =======================
// 메인 상세 컴포넌트
// =======================
// 실제 상세 페이지를 구성하는 메인 컴포넌트입니다.
// 상품 정보, 옵션, 주문, 연관상품, 탭 등 모든 UI와 로직이 포함되어 있습니다.
function Detail(props) {
  // URL에서 type(상품 종류)과 paramId(상품 id) 추출
  // 예: /detail/veggie/3 => type='veggie', paramId='3'
  const { type, paramId } = useParams();

  const dispatch = useDispatch(); // Redux 액션 디스패치 함수
  const toast = useToast(); // 토스트 알림 함수

  const [tap, setTap] = useState(0); // 탭 상태 (0: 상품정보, 1: 리뷰, 2: 상세설명)
  const [fade2, setFade2] = useState(""); // 페이드 인 효과

  // 페이지 진입 시 페이드 인 효과 적용
  useEffect(() => {
    setFade2("end");
    return () => setFade2("");
  }, []);

  // 부모 컴포넌트에서 전달받은 상품 데이터
  const fruits = props.fruit || [];
  const veggies = props.veggie || [];

  // URL 파라미터에 따라 해당 상품 찾기
  let selproduct;
  if (type === "veggie") {
    selproduct = veggies.find((x) => x.id === Number(paramId));
  } else if (type === "fruit") {
    selproduct = fruits.find((x) => x.id === Number(paramId));
  } else {
    // 예외 처리: type이 없을 때 전체에서 검색
    const items = [...fruits, ...veggies];
    selproduct = items.find((x) => x.id === Number(paramId));
  }

  // 상품이 없으면 안내 메시지
  if (!selproduct) {
    return <div style={{ padding: 30 }}>해당 제품이 존재하지 않습니다.</div>;
  }

  // 상품 정보 구조 분해
  const { id, imgUrl, title, content, price } = selproduct;

  return (
    <div className={"container start " + fade2}>
      {/* 상단 배너 */}
      <Banner>
        <BannerBtn>솔바람캠핑의 편안함을 즐기세요.</BannerBtn>
      </Banner>

      {/* 상단: 상품 이미지와 기본 정보 */}
      <div className="row">
        <div className="col-md-6">
          {/* 상품 이미지 */}
          <img
            src={process.env.PUBLIC_URL + "/" + imgUrl}
            width="100%"
            alt={title}
            style={{ borderRadius: "24px" }}
          />
        </div>
        <div className="col-md-6">
          {/* 상품명, 평점, 리뷰, 인증/안심구매 뱃지 */}
          <h4 className="pt-5" style={{fontWeight:900, fontSize:26, marginBottom:6, lineHeight:1.3}}>{title}</h4>
          <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:12}}>
            {/* 평점, 리뷰수, 인증/안심구매 뱃지 */}
            <span style={{fontSize:15, color:'#f7b500', fontWeight:800}}>★ {selproduct.rating ? selproduct.rating.toFixed(1) : '5.0'}</span>
            <span style={{fontSize:15, color:'#222', fontWeight:600}}>
              ({selproduct.reviews ? selproduct.reviews : 0}건)
            </span>
            <span style={{fontSize:13, color:'#fff', background:'#2b7a0b', borderRadius:4, padding:'2px 8px', fontWeight:700, marginLeft:8}}>정품인증</span>
            <span style={{fontSize:13, color:'#fff', background:'#1e90ff', borderRadius:4, padding:'2px 8px', fontWeight:700}}>안심구매</span>
          </div>
          {/* 상품 설명 */}
          <div style={{fontSize:15, color:'#888', marginBottom:18}}>{content}</div>
          <hr style={{margin:'10px 0 18px 0', border:0, borderTop:'1px solid #eee'}} />
          {/* 가격 표시 */}
          <div style={{display:'flex', alignItems:'flex-end', gap:12, marginBottom:2}}>
            <span style={{fontSize:32, fontWeight:900, color:'#222'}}>
              {typeof price === 'number' ? price.toLocaleString() : (parseInt(String(price).replace(/[^0-9]/g, '')) || 0).toLocaleString()}
              <span style={{fontSize:18, fontWeight:600}}>원</span>
            </span>
          </div>
          {/* 배송 안내 */}
          <div style={{fontSize:15, color:'#888', marginBottom:10, marginTop:2}}>
            5,000원 기본배송 상품 <span style={{fontSize:13, color:'#bbb'}}>※ 도서산간지역은 추가 배송비가 발생할 수 있습니다.</span>
          </div>
          {/* 포인트 적립 안내 */}
          <div style={{fontSize:15, color:'#2b7a0b', fontWeight:700, marginBottom:8}}>
            구매 시 2% 포인트 적립
          </div>
          {/* 도착 안내 */}
          <div style={{fontSize:15, color:'#1e90ff', fontWeight:600, marginBottom:18}}>
            오늘 주문 시 내일 도착 (일부 지역 제외)
          </div>
          {/* 옵션 선택: 색상만 선택 가능 */}
          <div style={{marginBottom:14}}>
            <div style={{display:'flex', alignItems:'center', gap:16}}>
              <div style={{minWidth:80, color:'#888', fontWeight:600}}>색상</div>
              <select style={{padding:'7px 12px', borderRadius:6, border:'1px solid #ddd', fontSize:15, minWidth:220}}>
                <option>[필수] 옵션을 선택해 주세요 -</option>
                <option>화이트</option>
                <option>베이지</option>
                <option>카키</option>
              </select>
            </div>
          </div>
          <hr style={{margin:'18px 0 18px 0', border:0, borderTop:'1px solid #eee'}} />
          {/* 추가구성상품 예시 (고정) */}
          <div style={{marginBottom:18}}>
            <div style={{fontWeight:700, fontSize:15, marginBottom:8}}>추가구성상품</div>
            <div style={{display:'flex', alignItems:'center', gap:12, background:'#fafafa', borderRadius:8, padding:'10px 12px', marginBottom:8}}>
              <img src={process.env.PUBLIC_URL + '/img/hero2.jpg'} alt="추가구성" style={{width:60, height:60, borderRadius:8, objectFit:'cover', background:'#eee'}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:600, fontSize:15}}>쿠디 에어타프 tpu 세트 우레탄창 우레탄문 방풍막</div>
                <div style={{fontSize:14, color:'#888'}}>119,000원 <span style={{color:'#1e90ff', fontWeight:600, marginLeft:8}}>무료배송</span></div>
              </div>
              <select style={{padding:'6px 10px', borderRadius:6, border:'1px solid #ddd', fontSize:14, minWidth:120}}>
                <option>[필수] 옵션 선택</option>
                <option>TPU창</option>
                <option>방풍막</option>
              </select>
            </div>
          </div>
          {/* 주문 버튼: 장바구니에 상품 추가 */}
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                addItem({
                  id: id, // 상품 id
                  imgurl: imgUrl.replace("img/", ""), // 이미지 경로
                  name: title, // 상품명
                  count: 1, // 수량(기본 1)
                  price: price, // 가격
                  type: type || "fruit", // 상품 종류
                })
              );
              toast.push("장바구니에 담았습니다.", { variant: "success" }); // 알림 표시
            }}
            style={{ minWidth: 120, fontWeight: 600, fontSize: 16, marginRight: 10 }}
          >
            주문하기
          </Button>
          {/* 주문제품 확인(장바구니 페이지로 이동) */}
          <Link to="/cart">
            <Button variant="outline-success" style={{ minWidth: 120, fontWeight: 600, fontSize: 16 }}>주문제품 확인하기</Button>
          </Link>
          {/* 유튜브 설치법, 1:1 문의 링크 */}
          <div style={{marginTop:18, fontSize:14, color:'#888'}}>
            <a
              href="https://www.youtube.com/playlist?list=PLvG4OLwrdfHceofXvT2A2xoqRITIslY9-"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:'#1e90ff', textDecoration:'underline', marginRight:12}}
            >
              설치방법 보기
            </a>
            <a
              href="/Board"
              style={{color:'#2b7a0b', textDecoration:'underline'}}
              onClick={e => {
                e.preventDefault();
                window.location.href = '/camp/Board';
              }}
            >
              1:1 문의
            </a>
          </div>
        </div>  
      </div>

      {/* 중단: 특징 아이콘 섹션 (현재 비어 있음) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          margin: "48px 0 32px 0",
        }}
      >
      </div>

      {/* 연관상품 컴포넌트 */}
      <RelatedProducts fruits={fruits} veggies={veggies} id={id} />

      {/* 탭 영역: 상품정보/리뷰/상세설명 */}
      <TabContent tap={tap} />
    </div>
  );
}


// =======================
// 탭 컨텐츠 (상품정보/리뷰/상세설명)
// =======================
// 탭 번호(tap)에 따라 다른 내용을 보여주는 컴포넌트입니다.
function TabContent({ tap }) {
  const [fade, setFade] = useState(""); // 페이드 인 효과

  useEffect(() => {
    // 탭이 바뀔 때마다 페이드 인 효과 적용
    const timer = setTimeout(() => setFade("end"), 10);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [tap]);

  return (
    <div className={"tab-content " + fade} style={{ margin: "40px 0" }}>
      {tap === 0 && <div>상품 정보 영역입니다.</div>}
      {tap === 1 && <div>리뷰 영역입니다.</div>}
      {tap === 2 && <div>상세 설명 영역입니다.</div>}
    </div>
  );
}

// 이 파일의 기본 내보내기: Detail 컴포넌트
export default Detail;
