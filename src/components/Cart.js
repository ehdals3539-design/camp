// Cart.js: 장바구니 페이지
// - Redux의 `cart` 상태를 읽어 표 형식으로 제품 목록을 보여줌
// - 수량 변경, 제품 삭제, 이름순 정렬 등의 액션을 dispatch 함
import React, { useMemo } from 'react';
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, decreaseCount, deleteItem } from "../store.js";
import { Link } from "react-router-dom";
import "./Footer.css";
import "./Footer.js";
import { useToast } from './ToastProvider';

function Cart() {
  // Redux에서 user, cart 상태를 가져옴
  const { user: { name }, cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const toast = useToast();

  const parsePrice = (raw) => {
    if (raw === undefined || raw === null) return 0;
    if (typeof raw === 'number') return raw;
    if (typeof raw === 'string') return Number(raw.replace(/[^0-9.-]+/g, '')) || 0;
    return 0;
  };

  const subtotal = useMemo(() => {
    return (cart || []).reduce((sum, item) => sum + parsePrice(item.price) * (item.count || 0), 0);
  }, [cart]);

  const total = subtotal;

  // 총액 계산 함수: 각 항목의 (가격 × 수량)을 합산
  const itemCount = (cart || []).reduce((sum, item) => sum + (item.count || 0), 0);

  const smallProdcuctStyle = {
    border: "1px solid #ddd",
    width: "100px",
    height: "80px",
    cursor: "pointer",
  };

  const textverticalAlign = {
    verticalAlign: "middle",
    textAlign: "center",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12" style={{ textAlign: "center" }}>
          <h5 style={{ padding: "50px" }}>{name}의 장바구니</h5>

          {(!cart || cart.length === 0) ? (
            <div style={{
              maxWidth: 560,
              margin: '0 auto',
              padding: '40px 20px',
              border: '1px solid #eee',
              borderRadius: 10,
              background: '#fafafa'
            }}>
              <div style={{ fontSize: 18, marginBottom: 12 }}>장바구니가 비어있어요.</div>
              <div style={{ color: '#666', marginBottom: 18 }}>원하는 캠핑 용품을 담아보세요.</div>
              <Button variant="success" onClick={() => toast.push('메인으로 이동해 쇼핑을 시작해보세요.', { variant: 'dark' })}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>쇼핑 계속하기</Link>
              </Button>
            </div>
          ) : (

            <>
              <Table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>제품이미지</th>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>합계</th>
                    <th>변경</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(({ id, imgurl, name, count, type, price }, i) => (
                    <tr key={i}>
                      <td style={textverticalAlign}>{id}</td>
                      <td>
                        <Link to={`/detail/${type}/${id}`}>
                          <img src={process.env.PUBLIC_URL + `/img/${imgurl}`} style={smallProdcuctStyle} alt={name} />
                        </Link>
                      </td>
                      <td style={textverticalAlign}>{name}</td>
                      <td style={textverticalAlign}>{parsePrice(price).toLocaleString()}원</td>
                      <td style={textverticalAlign}>{count}</td>
                      <td style={textverticalAlign}>{(parsePrice(price) * (count || 0)).toLocaleString()}원</td>
                      <td style={textverticalAlign}>
                        <Button
                          onClick={() => {
                            dispatch(addCount({ id, type }));
                            toast.push('수량 +1', { variant: 'dark' });
                          }}
                          variant="outline-success"
                          style={{ marginRight: "10px" }}
                        >
                          +
                        </Button>
                        <Button
                          onClick={() => {
                            if ((count || 0) <= 1) {
                              dispatch(deleteItem({ id, type }));
                              toast.push('장바구니에서 제거했습니다.', { variant: 'dark' });
                            } else {
                              dispatch(decreaseCount({ id, type }));
                              toast.push('수량 -1', { variant: 'dark' });
                            }
                          }}
                          variant="outline-warning"
                          style={{ marginRight: "10px" }}
                        >
                          -
                        </Button>
                        <Button
                          onClick={() => {
                            dispatch(deleteItem({ id, type }));
                            toast.push('장바구니에서 제거했습니다.', { variant: 'dark' });
                          }}
                          variant="outline-danger"
                        >
                          삭제
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* 요약 */}
              <div style={{
                maxWidth: 720,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 18,
                padding: 18,
                border: '1px solid #eee',
                borderRadius: 10,
                background: '#fff'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div>상품 수</div>
                  <div><b>{itemCount}</b>개</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div>상품 합계</div>
                  <div><b>{subtotal.toLocaleString()}</b>원</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18 }}>
                  <div><b>총 결제금액</b></div>
                  <div><b>{total.toLocaleString()}</b>원</div>
                </div>

                <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 14 }}>
                  <Button
                    variant="success"
                    onClick={() => toast.push('결제는 데모 기능입니다.', { variant: 'dark' })}
                  >
                    결제하기
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
