import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // 라우트가 바뀔 때마다 문서 맨 위로 스크롤합니다.
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);
  return null;
}
