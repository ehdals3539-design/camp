# 🏕️ 솔바람캠핑

<div align="center">

![솔바람캠핑 로고](https://img.shields.io/badge/솔바람캠핑-가족을_위한_캠핑-4CAF50?style=for-the-badge)

**React Camping Shopping Mall**

가족 중심의 캠핑 용품 쇼핑몰 웹 애플리케이션

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://ehdals3539-design.github.io/camp)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/ehdals3539-design/camp)

</div>

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [코드 하이라이트](#-코드-하이라이트)
- [프로젝트 강점](#-프로젝트-강점)
- [향후 계획](#-향후-계획)
- [배운 점](#-배운-점)

---

## 📖 프로젝트 소개

<div align="center">

![솔바람캠핑 로고](./public/img/screenshots/10-logo.png)

</div>

### 🎯 프로젝트 개요

**솔바람캠핑**은 "가족을 위한 캠핑"이라는 컨셉으로 제작된 React 기반 쇼핑몰 웹 애플리케이션입니다.

> **"캠핑은 가족이 머무는 '집'이어야 한다"**

사용자 친화적인 UI/UX와 실용적인 기능을 제공하는 SPA(Single Page Application)로, 실제 커머스 사이트 수준의 기능을 구현했습니다.

### � 핵심 가치

- ✅ **사용자 중심 설계** - 직관적인 인터페이스와 편리한 기능
- ✅ **실무 수준 구현** - 장바구니, 찜하기, 게시판 등 완벽한 CRUD
- ✅ **확장 가능한 구조** - 컴포넌트 기반 아키텍처
- ✅ **최신 기술 활용** - React 19, Redux Toolkit

### 📊 배포 정보

- **Live Demo**: https://ehdals3539-design.github.io/camp
- **GitHub Repository**: https://github.com/ehdals3539-design/camp

---

## ✨ 주요 기능

### 1️⃣ 상품 관리 시스템

<div align="center">

![메인 페이지](./public/img/screenshots/01-main-page.png)
*메인 페이지 - 상품 검색, 정렬, 필터링 기능*

</div>

<table>
<tr>
<td width="50%">

**🔍 검색 & 정렬**
- 실시간 제품명 검색
- 가격순/이름순 정렬
- 카테고리별 필터링

</td>
<td width="50%">

**📄 페이지네이션**
- "더보기" 버튼 방식
- 스켈레톤 로딩 UI
- 사용자 경험 최적화

</td>
</tr>
</table>

### 2️⃣ 장바구니 시스템

<div align="center">

![장바구니](./public/img/screenshots/07-cart.png)
*장바구니 - Redux 상태 관리 및 실시간 수량 조절*

</div>

- **Redux 전역 상태 관리** - 모든 페이지에서 접근 가능
- **LocalStorage 영속화** - 새로고침해도 데이터 유지
- **실시간 수량 조절** - +/- 버튼으로 즉시 변경
- **중복 상품 처리** - 자동 수량 증가 로직
- **실시간 카운트** - 네비게이션 바에 개수 표시

### 3️⃣ 찜하기 시스템

- **위시리스트 관리** - 관심 상품 저장
- **Redux 연동** - 장바구니와 동일한 패턴
- **빠른 담기** - 찜 목록에서 바로 장바구니 추가

### 4️⃣ 게시판 시스템

<div align="center">

![게시판](./public/img/screenshots/05-board.png)
*게시판 - CRUD 및 댓글/대댓글 시스템*

</div>

- **완벽한 CRUD** - 생성, 읽기, 수정, 삭제
- **댓글 & 대댓글** - 2단계 댓글 시스템
- **조회수 자동 증가** - 게시글 클릭 시 카운트
- **유효성 검사** - 빈 값 제출 방지

### 5️⃣ 브랜드 스토리텔링

- **Hero Section** - 브랜드 가치 전달
- **메인 슬라이더** - 시각적 임팩트
- **반응형 디자인** - 모든 디바이스 최적화

---

## 📸 주요 화면

<div align="center">

### 상품 상세 페이지
![상품 상세](./public/img/screenshots/06-detail-page.png)
*React Router를 활용한 동적 라우팅 및 상품 상세 정보*

### 모달 UI
![모달](./public/img/screenshots/04-modal.png)
*React Bootstrap Modal을 활용한 상품 상세 모달*

</div>

---

## 🛠 기술 스택

<div align="center">

![기술 스택](./public/img/screenshots/08-tech-stack.png)

</div>

### Frontend

<div align="center">

![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.30.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.13.2-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

</div>

| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 19.2.1 | UI 컴포넌트 기반 개발 |
| **React Router DOM** | 6.30.2 | SPA 라우팅 |
| **Redux Toolkit** | 2.11.1 | 전역 상태 관리 |
| **React Redux** | 9.2.0 | React-Redux 연결 |
| **Bootstrap** | 5.3.8 | UI 프레임워크 |
| **React Bootstrap** | 2.10.10 | React용 Bootstrap |
| **Styled Components** | 6.1.19 | CSS-in-JS 스타일링 |
| **Axios** | 1.13.2 | HTTP 통신 |

### Development & Deployment

- **Create React App** - 프로젝트 초기 설정
- **GitHub Pages** - 정적 사이트 배포
- **gh-pages** - 자동 배포 도구

### Testing

- **Jest** - 단위 테스트
- **React Testing Library** - 컴포넌트 테스트

---

## 🏗️ 프로젝트 구조

```
camp/
├── public/
│   ├── img/                    # 이미지 리소스
│   │   ├── camp/              # 캠핑 용품 이미지
│   │   └── veggie/            # 기타 용품 이미지
│   └── index.html
│
├── src/
│   ├── components/             # 재사용 가능한 컴포넌트
│   │   ├── Board.js           # 게시판 (CRUD + 댓글)
│   │   ├── Cart.js            # 장바구니
│   │   ├── Wishlist.js        # 찜하기
│   │   ├── Detail.js          # 상품 상세
│   │   ├── Products.js        # 상품 카드
│   │   ├── HeroSection.js     # 브랜드 소개
│   │   ├── Navbar.js          # 네비게이션
│   │   └── ScrollToTop.js     # 스크롤 최상단 이동
│   │
│   ├── db/                     # 데이터 모델
│   │   ├── camp.js            # 캠핑 용품 데이터
│   │   └── veggie.js          # 기타 용품 데이터
│   │
│   ├── css/                    # 스타일 파일
│   │   ├── App.css
│   │   ├── Board.css
│   │   └── ...
│   │
│   ├── App.js                  # 메인 라우터
│   ├── store.js                # Redux 상태 관리
│   └── index.js                # 앱 진입점
│
├── package.json
└── README.md
```

---

## 🚀 시작하기

### 📦 설치

```bash
# 저장소 클론
git clone https://github.com/ehdals3539-design/camp.git

# 프로젝트 디렉토리 이동
cd camp

# 의존성 설치
npm install
```

### 💻 실행

```bash
# 개발 서버 실행 (http://localhost:3000)
npm start

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

---

## 💻 코드 하이라이트

### 1️⃣ Redux Toolkit - 장바구니 상태 관리

```javascript
// store.js
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
    
    // 수량 증가
    addCount(state, action) {
      const { id, type } = action.payload;
      let num = state.findIndex((a) => a.id === id && a.type === type);
      if (num !== -1) state[num].count++;
    },
    
    // 수량 감소 (1개일 때는 삭제)
    decreaseCount(state, action) {
      const { id, type } = action.payload;
      let num = state.findIndex((a) => a.id === id && a.type === type);
      if (num !== -1 && state[num].count > 1) {
        state[num].count--;
      } else {
        state.splice(num, 1);
      }
    }
  }
});
```

**💡 핵심 포인트**
- Redux Toolkit의 `createSlice`로 보일러플레이트 최소화
- 중복 상품 자동 처리 로직
- 불변성 유지하면서 직관적인 코드 작성

---

### 2️⃣ useMemo - 검색 성능 최적화

```javascript
// App.js
const filteredFruit = useMemo(() => {
  return fruit.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );
}, [fruit, input]);  // fruit 또는 input 변경 시에만 재계산
```

**💡 핵심 포인트**
- `useMemo`로 불필요한 재계산 방지
- 검색 성능 최적화
- 사용자 입력에 즉각 반응

---

### 3️⃣ LocalStorage - 데이터 영속화

```javascript
// store.js
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('camp_cart', JSON.stringify(state.cart));
    localStorage.setItem('camp_wishlist', JSON.stringify(state.wishlist));
  } catch (e) {
    console.error('LocalStorage 저장 실패:', e);
  }
});
```

**💡 핵심 포인트**
- Redux 상태 변경 시 자동으로 LocalStorage 저장
- 새로고침해도 장바구니/찜하기 데이터 유지
- 에러 처리로 안정성 확보

---

### 4️⃣ 게시판 CRUD - 댓글 시스템

```javascript
// Board.js - 댓글 추가
const handleAddComment = (postId) => {
  if (!newComment.trim()) {
    alert('댓글 내용을 입력해주세요.');
    return;
  }
  
  const comment = {
    id: Date.now(),
    content: newComment,
    author: '사용자',
    date: new Date().toLocaleDateString()
  };
  
  // 게시글에 댓글 추가
  setPosts(posts.map(post => 
    post.id === postId 
      ? { ...post, comments: [...post.comments, comment] }
      : post
  ));
  
  setNewComment('');
};
```

**💡 핵심 포인트**
- 유효성 검사로 빈 댓글 방지
- 불변성 유지하면서 상태 업데이트
- 실시간 UI 반영

---

## 🎯 프로젝트 강점

<div align="center">

![기획 의도 및 요구사항](./public/img/screenshots/09-project-goals.png)

</div>

### 1️⃣ 체계적인 상태 관리

```
Redux Toolkit 활용
├── 보일러플레이트 코드 50% 감소
├── LocalStorage 연동으로 데이터 영속성
└── 타입 안전성 향상
```

**✨ 성과**: 코드 유지보수성 대폭 향상

---

### 2️⃣ 사용자 중심 설계

```
React Hooks 최적화
├── useMemo로 검색 성능 개선
├── 스켈레톤 UI로 체감 로딩 시간 단축
└── 유효성 검사 및 즉각적인 피드백
```

**✨ 성과**: 사용자 경험(UX) 극대화

---

### 3️⃣ 확장 가능한 구조

```
컴포넌트 기반 아키텍처
├── 재사용 가능한 컴포넌트 설계
├── 명확한 폴더 구조
└── 관심사의 분리 (SoC)
```

**✨ 성과**: 유지보수 및 기능 확장 용이

---

### 4️⃣ 실무 수준의 기능

- ✅ 장바구니 중복 처리 로직
- ✅ 댓글 시스템의 완벽한 CRUD
- ✅ 조회수 자동 증가
- ✅ 정렬/검색/필터링

**✨ 성과**: 실제 커머스 사이트 수준 구현

---

## � 프로젝트 통계

<div align="center">

| 항목 | 내용 |
|:----:|:----:|
| **총 컴포넌트 수** | 22개 |
| **Redux Slices** | 3개 (user, cart, wishlist) |
| **라우트 수** | 6개 |
| **주요 기능** | 5개 |
| **React Hooks** | 5종 활용 |

</div>

---

## 🔧 향후 계획

<div align="center">

### 배포 과정

![배포 설정](./public/img/screenshots/02-deployment.png)
*GitHub Pages 배포를 위한 package.json 설정*

![배포 결과](./public/img/screenshots/03-deployment-result.png)
*성공적인 배포 완료*

</div>

### 🎯 단기 계획 (1-3개월)

#### 1. 백엔드 연동
```
목표: 실시간 데이터 동기화
├── Node.js + Express 백엔드 구축
├── RESTful API 설계
├── MongoDB 데이터베이스 연동
└── Axios API 통신 구현
```

#### 2. 인증/인가 시스템
```
목표: 개인화된 쇼핑 경험
├── JWT 기반 로그인/회원가입
├── 사용자별 장바구니/찜하기 분리
└── 관리자 권한 시스템
```

#### 3. 결제 시스템
```
목표: 실제 결제 기능 구현
├── 포트원(PortOne) 연동
├── 주문 내역 관리
└── 배송 추적 기능
```

---

### 🚀 중장기 계획 (3-6개월)

#### 4. 성능 최적화
```
목표: 초기 로딩 속도 50% 개선
├── React.lazy, Suspense 코드 스플리팅
├── 이미지 최적화 (WebP, lazy loading)
├── 번들 사이즈 최적화
└── Lighthouse 점수 90점 이상
```

#### 5. 테스트 자동화
```
목표: 코드 품질 및 안정성 향상
├── Jest 단위 테스트 작성
├── E2E 테스트 (Cypress)
└── 테스트 커버리지 80% 이상
```

#### 6. 접근성 개선
```
목표: 모든 사용자에게 동등한 경험
├── ARIA 속성 추가
├── 키보드 네비게이션 지원
├── 스크린 리더 호환성
└── WCAG 2.1 AA 수준 준수
```

#### 7. SEO 최적화
```
목표: 검색 엔진 최적화
├── React Helmet 메타 태그 관리
├── SSR (Next.js 전환 고려)
├── Sitemap 생성
└── Open Graph 태그 추가
```

---

## 📚 배운 점

### 💡 기술적 성장

#### React 생태계 이해
- **React Hooks** - useState, useEffect, useMemo의 효율적 활용
- **React Router** - SPA 구현 및 라우팅 관리
- **Redux Toolkit** - 전역 상태 관리 패턴 학습

#### 상태 관리의 중요성
- **전역 vs 로컬 상태** - 적절한 상태 분리 전략
- **데이터 영속화** - LocalStorage 활용
- **불변성 원칙** - Redux의 핵심 개념 이해

#### 사용자 중심 개발
- **UX 고려** - 스켈레톤 UI, 로딩 상태 관리
- **유효성 검사** - 에러 처리 및 사용자 피드백
- **반응형 디자인** - 모든 디바이스 대응

#### 컴포넌트 설계
- **재사용성** - DRY 원칙 적용
- **Props vs State** - 적절한 데이터 흐름
- **관심사의 분리** - 컴포넌트 책임 분리

---

### 🎓 프로젝트 회고

#### 잘한 점
✅ Redux Toolkit으로 효율적인 상태 관리 구현  
✅ 사용자 경험을 고려한 UI/UX 설계  
✅ 컴포넌트 재사용성을 고려한 구조 설계  
✅ LocalStorage로 데이터 영속성 확보  

#### 아쉬운 점
⚠️ 백엔드 연동 미구현 (프론트엔드만 완성)  
⚠️ 테스트 코드 부족  
⚠️ 접근성(Accessibility) 고려 부족  
⚠️ 성능 최적화 여지 존재  

#### 개선 방향
🎯 백엔드 API 연동으로 실시간 데이터 동기화  
🎯 테스트 자동화로 코드 품질 향상  
🎯 성능 최적화로 사용자 경험 개선  
🎯 접근성 개선으로 포용적인 웹 구현  

---

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. **Fork** the Project
2. Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

---

## 📝 라이선스

이 프로젝트는 **개인 학습 목적**으로 제작되었습니다.

---

## 📞 연락처

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-ehdals3539--design-181717?style=for-the-badge&logo=github)](https://github.com/ehdals3539-design)

**프로젝트 링크**: [https://github.com/ehdals3539-design/camp](https://github.com/ehdals3539-design/camp)

**Live Demo**: [https://ehdals3539-design.github.io/camp](https://ehdals3539-design.github.io/camp)

</div>

---

## 🙏 감사의 말

이 프로젝트는 **React와 Redux를 학습**하며 실무 수준의 웹 애플리케이션을 구현하기 위해 제작되었습니다.

피드백과 제안은 언제나 환영합니다! 🙌

---

<div align="center">

### ⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요! ⭐

![GitHub stars](https://img.shields.io/github/stars/ehdals3539-design/camp?style=social)
![GitHub forks](https://img.shields.io/github/forks/ehdals3539-design/camp?style=social)

**Made with ❤️ by ehdals3539-design**

</div>
