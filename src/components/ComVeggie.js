// ComVeggie.js: 기타용품(veggie)용 단일 상품 카드 컴포넌트입니다.
// 주요 기능:
// - 구조와 동작은 `Products.js`와 유사하며 type='veggie'로 동작합니다.
// - 상품 이미지 클릭 시 상세 모달이 열리고, 하트 버튼으로 위시리스트 추가/제거가 가능합니다.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { addToWishlist, removeFromWishlist } from "../store.js";

const ComVeggie = ({ id, imgUrl, title, content, price, rating, reviews }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  // Redux에서 위시리스트를 가져와 현재 항목 포함 여부 확인
  const wishlist = useSelector((state) => state.wishlist);

  // 위시리스트 비교는 id + type 조합으로 수행
  const isInWishlist = wishlist.some((item) => item.id === id && item.type === 'veggie');

  // 이미지 클릭 시 상세 모달 오픈
  const handleOpen = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // 찜하기 토글 (veggie 타입)
  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist({ id, type: 'veggie' }));
    } else {
      dispatch(addToWishlist({
        id,
        type: 'veggie',
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

      <div onClick={() => navigate(`/detail/veggie/${id}`)} style={{ cursor: "pointer" }}>
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
          <div style={{
            width: "100%",
            aspectRatio: "1/1",
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: "12px",
            background: "#000",
            minHeight: "320px"
          }}>
            <img
              src={process.env.PUBLIC_URL + "/" + imgUrl}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: "50%"
              }}
            />
          </div>
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
              navigate(`/detail/veggie/${id}`);
            }}
          >
            상세페이지로
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ComVeggie;
