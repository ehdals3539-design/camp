import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

// ------------------------------
// ToastContext 생성
// - 다른 컴포넌트들이 '토스트 보여줘!' 라고 요청할 때 사용되는 통로
// ------------------------------
const ToastContext = createContext(null);

// ------------------------------
// ToastProvider
// - 화면 전체를 감싸며 토스트 메시지를 실제로 보여주는 역할
// - children: 감싸고 있는 모든 하위 컴포넌트들
// ------------------------------
export function ToastProvider({ children }) {

  // toasts 배열 상태
  // - 현재 화면에 표시되어야 하는 토스트 메시지 목록을 저장함
  const [toasts, setToasts] = useState([]);

  // ------------------------------
  // push() — 토스트 추가 함수
  // - 다른 컴포넌트가 메시지를 보여주고 싶을 때 호출함
  // - message: 토스트에 보여줄 글
  // - options: (variant, delay) 같은 설정값
  // ------------------------------
  const push = useCallback((message, options = {}) => {

    // 토스트를 구분하기 위한 고유 ID 생성
    const id = `${Date.now()}_${Math.random().toString(16).slice(2)}`;

    // 새로운 토스트 객체 생성
    const toast = {
      id,
      message,
      variant: options.variant || 'dark',              // 색상 테마
      delay: typeof options.delay === 'number'         // 몇 초 뒤 자동 제거할지
        ? options.delay
        : 1800,
    };

    // 기존 toasts 배열에 새 토스트 추가
    setToasts((prev) => [...prev, toast]);
  }, []);

  // ------------------------------
  // remove() — 특정 토스트 제거
  // - 토스트가 닫힐 때 실행됨
  // ------------------------------
  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // ------------------------------
  // api 객체
  // - 외부에서 사용할 함수들만 내보냄
  // - 현재는 push()만 제공
  // - useMemo로 감싸서 불필요한 리렌더링 방지
  // ------------------------------
  const api = useMemo(() => ({ push }), [push]);

  // ------------------------------
  // 실제 Provider 렌더링
  // - value로 push 기능을 전달해서 하위 컴포넌트들이 토스트 호출 가능
  // - ToastContainer가 화면 구석에 토스트들을 보여줌
  // ------------------------------
  return (
    <ToastContext.Provider value={api}>
      {/* 화면에서 Provider로 감싼 모든 컴포넌트 렌더링 */}
      {children}

      {/* 토스트가 보여지는 위치(오른쪽 아래) */}
      <ToastContainer
        position="bottom-end"
        className="p-3"
        style={{ zIndex: 9999 }}
      >
        {/* toasts 배열을 순회하며 각각의 Toast 컴포넌트 렌더링 */}
        {toasts.map((t) => (
          <Toast
            key={t.id}
            bg={t.variant}          // 색상 테마
            onClose={() => remove(t.id)}   // 닫기 버튼 클릭 시 삭제
            delay={t.delay}         // 자동 닫힘 시간
            autohide                // 자동으로 닫히도록 설정
          >
            {/* 토스트 내부 텍스트 */}
            <Toast.Body style={{ color: '#fff' }}>{t.message}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}

// ------------------------------
// useToast 훅
// - 다른 컴포넌트에서 토스트 기능(push)을 쉽게 사용하도록 도와줌
// ------------------------------
export function useToast() {
  const ctx = useContext(ToastContext);

  // Provider 밖에서 사용하면 오류 발생시키기
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return ctx; // { push } 반환
}
