// Products.js: 개별 상품(과일류) 카드 컴포넌트입니다.
// 주요 기능:
// - 상품 이미지를 클릭하면 상세 설명 모달이 표시됩니다.
// - 하트 버튼으로 위시리스트 추가/제거가 가능합니다.
// - Redux로 위시리스트 상태를 관리하며, type='fruit'로 동작합니다.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { addToWishlist, removeFromWishlist } from "../store.js";

const Products = ({ id, title, price, imgUrl, content, rating, reviews }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  // Redux에서 현재 위시리스트 상태 조회
  const wishlist = useSelector((state) => state.wishlist);

  // 현재 항목이 위시리스트에 있는지 확인 (id + type으로 구분)
  const isInWishlist = wishlist.some((item) => item.id === id && item.type === 'fruit');

  // 이미지 클릭으로 모달 열기 (이벤트 버블링 방지)
  const handleOpen = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // 찜하기 토글: 이미 있으면 제거, 없으면 추가
  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist({ id, type: 'fruit' }));
    } else {
      dispatch(addToWishlist({
        id,
        type: 'fruit',
        title,
        imgUrl,
        price,
      }));
    }
  };

  return (
    <div className="col-md-4 product-card">
      <div style={{ position: "relative" }}>
        <img
          src={process.env.PUBLIC_URL + "/" + imgUrl}
          alt={title}
          className="product-img"
          onClick={handleOpen}
        />
        <button
          onClick={handleWishlist}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          {isInWishlist ? "❤️" : "🤍"}
        </button>
      </div>

      <div onClick={() => navigate(`/detail/fruit/${id}`)} style={{ cursor: "pointer" }}>
        <h5 className="product-title">{title}</h5>
        {rating && (
          <div style={{ fontSize: "14px", color: "#f39c12", marginBottom: "5px" }}>
            ⭐ {rating} ({reviews}개 리뷰)
          </div>
        )}
        <p className="product-price">{price}</p>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={process.env.PUBLIC_URL + "/" + imgUrl}
            alt={title}
            style={{ width: "100%", marginBottom: "12px" }}
          />
          {rating && (
            <div style={{ fontSize: "16px", color: "#f39c12", marginBottom: "10px" }}>
              ⭐ {rating} ({reviews}개 리뷰)
            </div>
          )}
          <p className="product-desc">{content}</p>
          <p className="product-price">{price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              navigate(`/detail/fruit/${id}`);
            }}
          >
            상세페이지로
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;
