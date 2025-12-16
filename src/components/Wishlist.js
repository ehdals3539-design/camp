// Wishlist.js: 사용자가 찜한 제품 목록을 보여주는 페이지
// - Redux의 `wishlist` 상태를 읽어서 카드 형태로 화면에 보여줌
// - 각 상품 카드에서: (1) 상세페이지 이동 (2) 장바구니 담기 (3) 찜 제거 기능 제공

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';        // Redux 값 읽기/액션 실행
import { useNavigate } from 'react-router-dom';                // 페이지 이동을 위한 Hook
import { Button } from 'react-bootstrap';                      // Bootstrap 버튼 UI
import { removeFromWishlist, addItem } from '../store.js';     // Redux 액션
import '../css/Wishlist.css';                                  // 페이지 스타일
import { useToast } from './ToastProvider';                    // toast 메시지(알림) 기능

function Wishlist() {
  // Redux store에서 wishlist 배열 가져오기
  const wishlist = useSelector((state) => state.wishlist);

  // Redux에 데이터를 변경하는 dispatch 함수
  const dispatch = useDispatch();

  // 다른 페이지로 이동하는 기능
  const navigate = useNavigate();

  // toast 메시지 알림 함수
  const toast = useToast();

  // -----------------------------
  // 장바구니에 추가하는 함수
  // - 상품을 cart 형식에 맞게 변환해서 addItem 액션 실행
  // - 성공 메시지를 toast로 보여줌
  // -----------------------------
  const handleAddToCart = (item) => {
    dispatch(addItem({
      id: item.id,
      imgurl: item.imgUrl.replace('img/', ''), // 이미지 경로 정리
      name: item.title,
      count: 1,                                // 처음 담을 때 기본 수량: 1
      price: item.price,
      type: item.type,
    }));

    // 하단 오른쪽에 성공 메시지 띄우기
    toast.push('장바구니에 담았습니다.', { variant: 'success' });
  };

  // -----------------------------
  // 찜 목록에서 제거하는 함수
  // -----------------------------
  const handleRemoveFromWishlist = (id, type) => {
    dispatch(removeFromWishlist({ id, type }));
  };

  // -----------------------------
  // 실제 화면 렌더링 시작
  // -----------------------------
  return (
    <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <h2 style={{ marginBottom: '30px', fontWeight: 'bold' }}>❤️ 내 찜하기 목록</h2>

      {/* 찜한 상품이 하나도 없을 때 표시되는 영역 */}
      {wishlist.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
          }}
        >
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
            찜한 제품이 없습니다.
          </p>

          {/* 메인 페이지로 이동 버튼 */}
          <Button
            variant="primary"
            onClick={() => navigate('/')}
            style={{ marginRight: '10px' }}
          >
            쇼핑 계속하기
          </Button>
        </div>
      ) : (
        // 찜한 상품이 있을 때: 상품 카드들을 렌더링
        <div className="row">
          {wishlist.map((item) => (
            <div
              key={`${item.id}-${item.type}`}        // 같은 id라도 type이 다르면 구분
              className="col-md-4 product-card"
              style={{ marginBottom: '30px' }}
            >
              {/* 카드 전체 틀 */}
              <div
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                {/* 상품 이미지 (클릭하면 상세페이지로 이동) */}
                <img
                  src={process.env.PUBLIC_URL + '/' + item.imgUrl}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate(`/detail/${item.type}/${item.id}`)}
                />

                {/* 상품 제목/가격/버튼 */}
                <div style={{ padding: '15px' }}>
                  
                  {/* 상품 이름 */}
                  <h5
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      marginBottom: '10px',
                    }}
                  >
                    {item.title}
                  </h5>

                  {/* 별점과 리뷰 수가 있을 경우만 보여줌 */}
                  {item.rating && (
                    <div style={{ fontSize: '14px', color: '#f39c12', marginBottom: '8px' }}>
                      ⭐ {item.rating} ({item.reviews}개 리뷰)
                    </div>
                  )}

                  {/* 상품 가격 */}
                  <p
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#2b7a0b',
                      marginBottom: '15px',
                    }}
                  >
                    {item.price}
                  </p>

                  {/* ‘장바구니 담기’, ‘제거’ 버튼 */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {/* 장바구니 버튼 */}
                    <Button
                      variant="outline-success"
                      onClick={() => handleAddToCart(item)}
                      style={{ flex: 1 }}
                    >
                      장바구니 담기
                    </Button>

                    {/* 찜 제거 버튼 */}
                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemoveFromWishlist(item.id, item.type)}
                      style={{ flex: 1 }}
                    >
                      제거
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
