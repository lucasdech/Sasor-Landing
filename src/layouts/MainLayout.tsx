import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { usePageAnimations } from "../hooks/usePageAnimations";

export function MainLayout() {
  const rootRef = usePageAnimations();

  return (
    <div ref={rootRef}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
