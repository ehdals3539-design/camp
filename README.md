<img width="1919" height="1079" alt="스크린샷 2025-12-22 100948" src="https://github.com/user-attachments/assets/3236ffb4-4a14-4330-9610-1602a6bcd915" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101004" src="https://github.com/user-attachments/assets/4aed23ca-e254-4bdc-80e7-55cf570eab5f" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101008" src="https://github.com/user-attachments/assets/bf2024b8-3cff-43f9-a854-b523c346d405" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101011" src="https://github.com/user-attachments/assets/9ced0512-73c5-4d89-ae42-a2c7a3b34699" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101014" src="https://github.com/user-attachments/assets/9d120f31-5b45-42cd-9199-54f8f3d3c702" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101017" src="https://github.com/user-attachments/assets/688f5265-5e6e-4692-97bb-ea4c932f7159" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101020" src="https://github.com/user-attachments/assets/add13d72-0d58-4a87-834a-6f4ee83fe85d" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101023" src="https://github.com/user-attachments/assets/f97669c4-5818-43c5-ab03-0262a1393ea5" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101026" src="https://github.com/user-attachments/assets/66458f75-35e5-40be-baad-7526511f5542" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101029" src="https://github.com/user-attachments/assets/b27399c3-0921-4f9d-b02b-d0db7b65f679" />
<img width="1919" height="1079" alt="스크린샷 2025-12-22 101032" src="https://github.com/user-attachments/assets/1d35d82f-4bcf-4ae5-a625-d69c3b10bb5b" />
# 🏕️ 솔바람캠핑 (Camp E-Commerce Platform)

<div align="center">

![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.30.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**가족을 위한 캠핑 용품 쇼핑몰 웹 애플리케이션**

[🌐 Live Demo](https://ehdals3539-design.github.io/camp) | [📊 PPT 발표자료](./PPT_발표자료_가이드.md)

</div>

---

## 📖 프로젝트 소개

**솔바람캠핑**은 가족 중심의 캠핑 문화를 지향하는 온라인 쇼핑몰입니다. 
"캠핑은 가족이 머무는 '집'이어야 한다"는 철학을 바탕으로, 사용자 친화적인 UI/UX와 실용적인 기능을 제공하는 React 기반 SPA(Single Page Application)입니다.

### 🎯 프로젝트 목표

- ✅ **사용자 중심 설계**: 직관적인 UI/UX로 누구나 쉽게 사용 가능
- ✅ **실무 수준 구현**: 실제 커머스 사이트 수준의 기능 구현
- ✅ **확장 가능한 구조**: 컴포넌트 기반 아키텍처로 유지보수성 확보
- ✅ **최신 기술 활용**: React 19, Redux Toolkit 등 최신 기술 스택 적용

---

## ✨ 주요 기능

### 🛍️ 상품 관리 시스템
- **실시간 검색**: 제품명 기반 즉시 검색
- **다양한 정렬**: 가격순(오름차순/내림차순), 이름순 정렬
- **카테고리 분류**: 캠핑 용품 / 기타 용품 분리
- **페이지네이션**: "더보기" 버튼으로 점진적 로딩
- **스켈레톤 UI**: 로딩 중 사용자 경험 향상

### 🛒 장바구니 시스템
- **Redux 상태 관리**: 전역 상태로 모든 페이지에서 접근 가능
- **LocalStorage 영속화**: 새로고침해도 데이터 유지
- **실시간 수량 조절**: +/- 버튼으로 즉시 수량 변경
- **중복 처리**: 같은 상품 추가 시 자동 수량 증가
- **실시간 카운트**: 네비게이션 바에 총 개수 표시

### ❤️ 찜하기 시스템
- **위시리스트 관리**: 관심 상품 저장 및 관리
- **Redux 연동**: 장바구니와 동일한 상태 관리 패턴
- **빠른 장바구니 담기**: 찜 목록에서 바로 장바구니 추가

### 💬 게시판 시스템
- **CRUD 완벽 구현**: 생성, 읽기, 수정, 삭제 모두 지원
- **댓글 & 대댓글**: 2단계 댓글 시스템
- **조회수 자동 증가**: 게시글 클릭 시 자동 카운트
- **유효성 검사**: 빈 값 제출 방지 및 에러 메시지 표시
- **댓글 수정/삭제**: 댓글과 대댓글 모두 편집 가능

### 🎨 브랜드 스토리텔링
- **Hero Section**: 브랜드 가치와 철학 전달
- **메인 슬라이더**: 시각적 임팩트 제공
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험

---

## 🛠 기술 스택

### Frontend
```
React 19.2.1          - UI 컴포넌트 기반 개발
React Router 6.30.2   - SPA 라우팅
Redux Toolkit 2.11.1  - 전역 상태 관리
React Redux 9.2.0     - React-Redux 연결
Bootstrap 5.3.8       - UI 프레임워크
React Bootstrap       - React용 Bootstrap 컴포넌트
Styled Components     - CSS-in-JS 스타일링
Axios 1.13.2          - HTTP 통신
```

### Development & Deployment
```
Create React App     - 프로젝트 초기 설정
GitHub Pages         - 정적 사이트 배포
gh-pages            - 자동 배포 도구
```

### Testing
```
Jest                 - 단위 테스트
React Testing Library - React 컴포넌트 테스트
```

---

## 🏗️ 프로젝트 구조

```
camp/
├── public/
│   ├── img/              # 이미지 리소스
│   └── index.html
├── src/
│   ├── components/       # 재사용 가능한 컴포넌트
│   │   ├── Board.js      # 게시판 (CRUD + 댓글)
│   │   ├── Cart.js       # 장바구니
│   │   ├── Wishlist.js   # 찜하기
│   │   ├── Detail.js     # 상품 상세
│   │   ├── Products.js   # 상품 카드
│   │   ├── HeroSection.js # 브랜드 소개
│   │   └── ...
│   ├── db/               # 데이터 모델
│   │   ├── camp.js       # 캠핑 용품 데이터
│   │   └── veggie.js     # 기타 용품 데이터
│   ├── css/              # 스타일 파일
│   ├── App.js            # 메인 라우터
│   ├── store.js          # Redux 상태 관리
│   └── index.js          # 앱 진입점
├── package.json
└── README.md
```

---

## 💻 코드 하이라이트

### Redux Toolkit을 활용한 효율적인 상태 관리

```javascript
// store.js - 장바구니 상태 관리
let cart = createSlice({
  name: 'cart',
  initialState: Array.isArray(persistedCart) ? persistedCart : [],
  reducers: {
    // 장바구니에 제품 추가 (중복 시 수량 증가)
    addItem(state, action) {
      let num = state.findIndex(
        (a) => a.id === action.payload.id && a.type === action.payload.type
      );
      if (num !== -1) {
        state[num].count++;  // 이미 있으면 수량만 증가
      } else {
        state.push(action.payload);  // 없으면 새로 추가
      }
    },
    // 수량 조절
    addCount(state, action) {
      const { id, type } = action.payload;
      let num = state.findIndex((a) => a.id === id && a.type === type);
      if (num !== -1) state[num].count++;
    },
    decreaseCount(state, action) {
      const { id, type } = action.payload;
      let num = state.findIndex((a) => a.id === id && a.type === type);
      if (num !== -1 && state[num].count > 1) {
        state[num].count--;
      } else {
        state.splice(num, 1);  // 수량 1일 때는 삭제
      }
    }
  }
});
```

### useMemo를 활용한 검색 성능 최적화

```javascript
// App.js - 검색 결과 메모이제이션
const filteredFruit = useMemo(() => {
  return fruit.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );
}, [fruit, input]);  // fruit 또는 input 변경 시에만 재계산
```

### LocalStorage 영속화

```javascript
// store.js - 상태 영속화
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('camp_cart', JSON.stringify(state.cart));
    localStorage.setItem('camp_wishlist', JSON.stringify(state.wishlist));
  } catch (e) {
    // 에러 무시
  }
});
```

---

## 🚀 시작하기

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/ehdals3539-design/camp.git

# 프로젝트 디렉토리 이동
cd camp

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

개발 서버가 실행되면 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

---

## 📊 프로젝트 통계

| 항목 | 내용 |
|------|------|
| **총 컴포넌트 수** | 22개 |
| **Redux Slices** | 3개 (user, cart, wishlist) |
| **라우트 수** | 6개 (홈, 상세, 장바구니, 찜하기, 게시판, 404) |
| **주요 기능** | 5개 (상품관리, 장바구니, 찜하기, 게시판, 라우팅) |
| **React Hooks 활용** | useState, useEffect, useMemo, useSelector, useDispatch |

---

## 🎯 프로젝트 강점

### 1️⃣ 체계적인 상태 관리
- Redux Toolkit으로 보일러플레이트 코드 최소화
- LocalStorage 연동으로 데이터 영속성 확보
- 타입 안전성 향상

### 2️⃣ 사용자 중심 설계
- useMemo를 활용한 검색 성능 최적화
- 스켈레톤 UI로 체감 로딩 시간 단축
- 유효성 검사 및 사용자 피드백

### 3️⃣ 확장 가능한 구조
- 컴포넌트 기반 아키텍처
- 재사용 가능한 컴포넌트 설계
- 명확한 폴더 구조

### 4️⃣ 실무 수준의 기능
- 장바구니 중복 처리 로직
- 댓글 시스템의 CRUD
- 조회수 자동 증가
- 정렬/검색/필터링

---

## 🔧 향후 개선 계획

### 백엔드 연동
- [ ] Node.js + Express 또는 Spring Boot 백엔드 구축
- [ ] RESTful API 설계 및 연동
- [ ] 데이터베이스 연동 (MongoDB, MySQL)
- [ ] Axios를 활용한 API 통신 구현

### 인증/인가 시스템
- [ ] JWT 기반 로그인/회원가입
- [ ] 사용자별 장바구니/찜하기 분리
- [ ] 관리자 권한 시스템

### 결제 시스템
- [ ] 포트원(PortOne) 또는 토스페이먼츠 연동
- [ ] 주문 내역 관리
- [ ] 배송 추적 기능

### 성능 최적화
- [ ] React.lazy, Suspense로 코드 스플리팅
- [ ] 이미지 최적화 (WebP, lazy loading)
- [ ] 번들 사이즈 최적화
- [ ] Lighthouse 점수 90점 이상 목표

### 테스트 자동화
- [ ] Jest + React Testing Library 단위 테스트
- [ ] E2E 테스트 (Cypress, Playwright)
- [ ] 테스트 커버리지 80% 이상

### 접근성 개선
- [ ] ARIA 속성 추가
- [ ] 키보드 네비게이션 지원
- [ ] 스크린 리더 호환성
- [ ] WCAG 2.1 AA 수준 준수

### SEO 최적화
- [ ] React Helmet으로 메타 태그 관리
- [ ] SSR (Next.js 전환 고려)
- [ ] Sitemap 생성
- [ ] Open Graph 태그 추가

---

## 📚 배운 점

### React 생태계 이해
- React Hooks의 효율적인 활용 (useState, useEffect, useMemo)
- React Router를 통한 SPA 구현
- Redux Toolkit의 상태 관리 패턴

### 상태 관리의 중요성
- 전역 상태와 로컬 상태의 적절한 분리
- LocalStorage를 활용한 데이터 영속화
- Redux의 불변성 원칙

### 사용자 중심 개발
- UX를 고려한 기능 설계 (스켈레톤 UI, 로딩 상태)
- 유효성 검사 및 에러 처리
- 반응형 디자인

### 컴포넌트 설계
- 재사용 가능한 컴포넌트 구조
- Props와 State의 적절한 활용
- 컴포넌트 분리 원칙

---

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다.

---

## 📞 연락처

- **GitHub**: [@ehdals3539-design](https://github.com/ehdals3539-design)
- **프로젝트 링크**: [https://github.com/ehdals3539-design/camp](https://github.com/ehdals3539-design/camp)
- **Live Demo**: [https://ehdals3539-design.github.io/camp](https://ehdals3539-design.github.io/camp)

---

## 🙏 감사의 말

이 프로젝트는 React와 Redux를 학습하며 실무 수준의 웹 애플리케이션을 구현하기 위해 제작되었습니다. 
피드백과 제안은 언제나 환영합니다!

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요! ⭐**

Made with ❤️ by ehdals3539-design

</div>
