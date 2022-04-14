import React, { useEffect } from "react";
import { useViewport } from "src/hooks/useViewport";
import { Logo } from "src/components/Logo";
import { Header } from "src/common/Header";
import { Footer } from "src/common/Footer";
import { Landing } from "src/layouts/Landing";
import "src/App.scss";

export const Home: React.FC = () => {
  const { isSmallScreen, handleResize } = useViewport(750);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <Logo isSmallScreen={isSmallScreen} />
      <Header isSmallScreen={isSmallScreen} />
      <Landing />
      <Footer />
    </>
  );
};
