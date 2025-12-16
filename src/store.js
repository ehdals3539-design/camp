// store.js: Redux 전역 상태 관리 설정 파일입니다.
// 주요 기능:
// - Redux Toolkit의 configureStore, createSlice로 상태를 효율적으로 관리합니다.
// - 장바구니(cart), 위시리스트(wishlist) 등 주요 상태를 slice로 분리해 관리합니다.
// - localStorage를 활용한 상태 영속화(새로고침해도 데이터 유지) 기능이 포함되어 있습니다.
import { configureStore, createSlice } from '@reduxjs/toolkit'

const safeJsonParse = (text, fallback) => {
  try {
    const parsed = JSON.parse(text);
    return parsed ?? fallback;
  } catch (e) {
    return fallback;
  }
};

const loadPersisted = () => {
  if (typeof window === 'undefined') return { cart: null, wishlist: null };
  // demo/개발 중 남아있는 장바구니를 '최초 1회' 비우기
  // (사용자가 담은 이후에는 정상적으로 persist 동작)
  const clearedOnce = localStorage.getItem('camp_cart_cleared_v1') === '1';
  let cart = safeJsonParse(localStorage.getItem('camp_cart'), null);
  if (!clearedOnce) {
    cart = [];
    try {
      localStorage.setItem('camp_cart', JSON.stringify([]));
      localStorage.setItem('camp_cart_cleared_v1', '1');
    } catch (e) {
      // ignore
    }
  }
  const wishlist = safeJsonParse(localStorage.getItem('camp_wishlist'), null);
  return { cart, wishlist };
};

const { cart: persistedCart, wishlist: persistedWishlist } = loadPersisted();

// store.js: Redux 상태 정의
// - `user`: 간단한 사용자 정보(예: 이름, 나이)
// - `cart`: 장바구니 항목 배열. 각 항목은 {id, imgurl, name, count, type}
// - `wishlist`: 사용자가 찜한 항목들을 저장
// createSlice를 사용해 상태와 리듀서(액션 포함)를 함께 정의
// 액션은 컴포넌트에서 dispatch로 호출 가능
// 예: dispatch(addItem({ id, imgurl, name, count, type }))
let user = createSlice({
    name : 'user',
    initialState : { name : '홍길동', age : 20 }, // 처음 상태 값
    reducers :{
      changeName(state){ // 이름을 '손오공'으로 바꾸는 함수
        state.name = '손오공'
      },

    // 나이를 전달받은 숫자만큼 올려주는 함수
      increase(state, action){
        state.age += action.payload
      }
    }
  })

// 위에서 만든 함수들 밖에서도 쓸 수 있게 내보내기
export let { changeName, increase } = user.actions
// 'cart'라는 이름의 상태 만들기 (장바구니)
let cart = createSlice({
    name : 'cart',
    initialState : Array.isArray(persistedCart) ? persistedCart : [],
    reducers : {
    // 제품 수량 1개 늘리기
     addCount(state, action) {  
        // action.payload should be an object: { id, type }
        const { id, type } = action.payload;
        let num = state.findIndex((a) => a.id === id && a.type === type);
      if (num === -1) return;
      state[num].count++;
    },
      // 제품 수량 1개 줄이기 (0개 이하는 알림 띄움)
    decreaseCount(state, action) {
      const { id, type } = action.payload;
      let num = state.findIndex((a) => a.id === id && a.type === type);
      if (num === -1) return;
      if (state[num].count > 1) {
        state[num].count--;
      } else {
        // count가 1이면 - 는 삭제로 동작
        state.splice(num, 1);
      }
    },
    // 장바구니에 제품 추가하기, 이미 있으면 수량만 +1, 없으면 새로 추가
    addItem(state, action) {
      // action.payload should include { id, type }
      let num = state.findIndex((a) => a.id === action.payload.id && a.type === action.payload.type);
      if (num !== -1) {
        state[num].count++;
      } else {
        state.push(action.payload);
      }
    },
 // 장바구니에서 제품 삭제하기
    deleteItem(state, action) {
      const { id, type } = action.payload;
      let num = state.findIndex((a) => a.id === id && a.type === type);
      if (num !== -1) state.splice(num, 1);
    },
      // 이름순으로 제품 정렬하기
    sortName(state, action) {
      state.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    }
  })


// cart 함수들도 밖에서 쓸 수 있게 내보내기
export let { addCount, decreaseCount, addItem, deleteItem, sortName } = cart.actions;

// 'wishlist'라는 이름의 상태 만들기 (찜하기)
let wishlist = createSlice({
  name: 'wishlist',
  initialState: Array.isArray(persistedWishlist) ? persistedWishlist : [],
  reducers: {
    // 위시리스트에 제품 추가
    addToWishlist(state, action) {
      let num = state.findIndex((a) => a.id === action.payload.id && a.type === action.payload.type);
      if (num === -1) {
        state.push(action.payload);
      }
    },
    // 위시리스트에서 제품 제거
    removeFromWishlist(state, action) {
      const { id, type } = action.payload;
      let num = state.findIndex((a) => a.id === id && a.type === type);
      if (num !== -1) state.splice(num, 1);
    },
    // 위시리스트 전체 초기화
    clearWishlist(state) {
      return [];
    }
  }
});

export let { addToWishlist, removeFromWishlist, clearWishlist } = wishlist.actions;

// 실제로 Redux에 등록해주는 부분
const store = configureStore({
    reducer: {
      user: user.reducer,
      cart: cart.reducer,
      wishlist: wishlist.reducer,
    },
  });

// cart / wishlist localStorage persist
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('camp_cart', JSON.stringify(state.cart));
    localStorage.setItem('camp_wishlist', JSON.stringify(state.wishlist));
  } catch (e) {
    // ignore
  }
});

export default store;
  

  /*
createSlice: 상태랑 관련 함수들 한 번에 만들기
reducers: 상태를 바꿔주는 함수들
action.payload: 함수에 보낼 값
configureStore: 만든 상태들을 Redux에 등록하는 역할
  */