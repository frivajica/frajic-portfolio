import React, { useEffect } from 'react';
import { useViewport } from './hooks/useViewport';
import { BrowserRouter as Router } from 'react-router-dom';
import { Logo } from 'src/components/Logo';
import { Header } from 'src/common/Header';
import { Footer } from 'src/common/Footer';
import { Landing } from 'src/layouts/Landing';
import 'src/App.scss';

const App: React.FC = () => {
  const { isSmallScreen, handleResize } = useViewport(750);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <Router>
      <Logo isSmallScreen={isSmallScreen} />
      <Header isSmallScreen={isSmallScreen} />
      <Landing />
      <Footer />
    </Router>
  );
};

export default App;