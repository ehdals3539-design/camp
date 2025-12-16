// index.js: 리액트 앱의 진입점(Entry Point) 파일입니다.
// 주요 기능:
// - ReactDOM을 통해 App 컴포넌트를 #root에 렌더링합니다.
// - Redux Provider로 전역 상태를, BrowserRouter로 라우팅을 제공합니다.
// - basename을 camp로 지정해 서브폴더 배포도 지원합니다.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store= {store}>
  <BrowserRouter basename='/camp' future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
  
    <App />
    </BrowserRouter>
    </Provider>
);

