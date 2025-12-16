// App.js: 메인 라우터 및 전체 화면 구성의 중심이 되는 컴포넌트입니다.
// 주요 기능:
// - 캠핑/기타용품 데이터(`camp`, `veggie`)를 로컬 state로 관리합니다.
// - 검색, 정렬, 페이징(더보기) 등 상품 목록 관련 로직을 처리합니다.
// - 각 상품 컴포넌트(`Products`, `ComVeggie`)를 렌더링하고 라우트를 정의합니다.
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Badge, Navbar, Container, Nav, Button } from "react-bootstrap";
import data from "./db/camp";
import Products from "./components/Products";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Title from "./components/Title";
import Title2 from "./components/Title2";
import data2 from "./db/veggie";
import ComVeggie from "./components/ComVeggie";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Hero3Section from "./components/Hero3Section";
import MainSlider from "./components/MainSlider";
import Cart from "./components/Cart";
import Board from "./components/Board";
import Wishlist from "./components/Wishlist";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { ToastProvider } from "./components/ToastProvider";

const ProductSkeleton = ({ count = 6 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div className="col-md-4 product-card" key={i}>
          <div className="skeleton-img" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      ))}
    </>
  );
};


function App() {
  const [fruit, setFruit] = useState(data);
  const [veggie] = useState(data2);
  const [displayCount, setDisplayCount] = useState(3);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  // Redux에서 찜하기 개수 조회
  const wishlistCount = useSelector((state) => state.wishlist.length);
  const cartCount = useSelector((state) =>
    (state.cart || []).reduce((sum, item) => sum + (item.count || 0), 0)
  );

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(t);
  }, []);

  const filteredFruit = useMemo(() => {
    return fruit.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
  }, [fruit, input]);

  // 정렬 함수들: 가격/이름으로 `fruit` 배열을 정렬
  const sortByName = () => {
    let sortedFruit = [...fruit].sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    setFruit(sortedFruit);
  };

  const sortByPriceLowToHigh = () => {
    // 가격 포맷이 문자열(예: "159,000원")인 경우 숫자만 추출하여 비교
    const getPrice = (item) => {
      if (!item || item.price === undefined || item.price === null) return 0;
      if (typeof item.price === 'number') return item.price;
      if (typeof item.price === 'string') return Number(item.price.replace(/[^0-9.-]+/g, '')) || 0;
      return 0;
    };
    let sortedFruit = [...fruit].sort((a, b) => getPrice(a) - getPrice(b));
    setFruit(sortedFruit);
  };

  const sortByPriceHighToLow = () => {
    const getPrice = (item) => {
      if (!item || item.price === undefined || item.price === null) return 0;
      if (typeof item.price === 'number') return item.price;
      if (typeof item.price === 'string') return Number(item.price.replace(/[^0-9.-]+/g, '')) || 0;
      return 0;
    };
    let sortedFruit = [...fruit].sort((a, b) => getPrice(b) - getPrice(a));
    setFruit(sortedFruit);
  };

  return (
    <ToastProvider>
      <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
              <img
                src={process.env.PUBLIC_URL + '/img/logo.png'}
                alt="솔바람캠핑"
              style={{ height: 70, width: 'auto' }}
              />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>홈으로</Nav.Link>
          
            <Nav.Link onClick={() => navigate("/cart")}>
              장바구니 {cartCount > 0 && <Badge bg="success">{cartCount}</Badge>}
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/wishlist")}>
              ❤️ 찜하기 {wishlistCount > 0 && `(${wishlistCount})`}
            </Nav.Link>
           <Nav.Link 
  href="https://www.youtube.com/playlist?list=PLvG4OLwrdfHceofXvT2A2xoqRITIslY9-" 
  target="_blank"
>
  설치방법
</Nav.Link>
             <Nav.Link onClick={() => { navigate("/Board");}}> 게시판</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>

              <MainSlider />
              <Title />

              {/* 소개 HeroSection 1 */}
              <HeroSection
                img={process.env.PUBLIC_URL + '/img/hero1.jpg'}
                title="캠핑은 가족이 머무는"
                highlight="'집'이어야 하니까"
                desc={`솔바람캠핑은 '가족을 위한 캠핑'을 고민하며 시작됐습니다.\n혼자서는 무거운 폴대도, 복잡한 설치도 필요 없는 에어텐트.\n아이와 함께하는 캠핑에서 가장 중요한 '안전', '편안함', '시간'을 지키기 위해\n우리는 항상 가족의 입장에서 제품을 설계합니다.`}
              />

              {/* 소개 HeroSection 2 (reverse) */}
              <HeroSection
                img={process.env.PUBLIC_URL + '/img/hero2.jpg'}
                title="한국에서 설계된"
                highlight="사용자 중심 구조"
                desc={`솔바람캠핑의 제품은 한국 디자이너들이 기획·설계됩니다.\n디자인은 감성보다 사용성을 먼저 고려하고,\n구성은 다양한 캠핑 환경에 유연하게 대응할 수 있도록 설계합니다.\n도킹 시스템을 통해 텐트를 연결하거나 나눌 수 있고,\n상황에 따라 형태를 바꾸며 사용할 수 있습니다.\n디자인은 보기 위한 것이 아니라, 쓰는 사람을 중심에 두어야 한다고 믿습니다.`}
                reverse
              />

              <Hero3Section image={process.env.PUBLIC_URL + "/img/hero3.jpg"} />

              {/* 캠핑 용품 BEST 멘트 */}
              <div style={{ textAlign: 'center', margin: '56px 0 32px 0' }}>
                <h2 style={{ fontWeight: 800, fontSize: '2.2rem', marginBottom: 12 }}>캠핑 용품 BEST</h2>
                <p style={{ color: '#444', fontSize: '1.25rem', margin: 0 }}>
                  캠핑도 집처럼 편안하게 즐겨보세요.
                </p>
              </div>

              {/* 검색 + 정렬 */}
              <div className="container">
                <div className="row">
                  <div className="col-md-6" style={{ textAlign: "left" }}>
                    <input
                      placeholder="제품명을 입력하세요"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        width: "250px",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div className="col-md-6" style={{ textAlign: "right" }}>
                    <select
                      onChange={(e) => {
                        if (e.target.value === "low") sortByPriceLowToHigh();
                        if (e.target.value === "high") sortByPriceHighToLow();
                        if (e.target.value === "name") sortByName();
                      }}
                      style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        width: "150px",
                      }}
                    >
                      <option value="">정렬 선택</option>
                      <option value="low">낮은 가격순</option>
                      <option value="high">높은 가격순</option>
                      <option value="name">이름순</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 과일 리스트 */}
              <div className="container" style={{ marginTop: "30px" }}>
                <div className="row">
                  {isLoading ? (
                    <ProductSkeleton count={6} />
                  ) : filteredFruit.length === 0 ? (
                    <div style={{ padding: 40, textAlign: 'center', color: '#666' }}>
                      검색 결과가 없습니다.
                    </div>
                  ) : (
                    filteredFruit.map((item) => <Products key={item.id} {...item} />)
                  )}
                </div>
              </div>

              {/* 채소 리스트 + 더보기 */}
              <div className="container" style={{ marginTop: "50px" }}>
                <div className="row text-center">
                  <Title2 />
                  {displayCount < veggie.length && (
                    <Button
                      variant="outline-success"
                      onClick={() => {
                        setDisplayCount(displayCount + 3);
                      }}
                      style={{ marginBottom: "30px" }}
                    >
                      + 3개 제품 더 보기
                    </Button>
                  )}
                </div>

                <div className="container mt-3">
                  <div className="row">
                    {isLoading ? (
                      <ProductSkeleton count={3} />
                    ) : (
                      veggie.slice(0, displayCount).map((item) => (
                        <ComVeggie key={item.id} {...item} />
                      ))
                    )}
                  </div>
                </div>
              </div>

                <Footer />
            </div>
          }
        />

        {/* 상세페이지 */}
        <Route element={<Layout />}> 
        <Route
          path="/detail/:type/:paramId"
          element={<Detail fruit={fruit} veggie={veggie} />}
        />

        {/* 장바구니 */}
        <Route path="/cart" element={<Cart />} />

        {/* 찜하기 */}
        <Route path="/wishlist" element={<Wishlist />} />

        {/* 회사소개 */}
        <Route path="/board" element={<Board/>} />

        <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
      </div>
    </ToastProvider>
  );
}

export default App;
