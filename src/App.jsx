import { useEffect } from 'react';
import { useViewport } from './hooks/useViewport'
import { BrowserRouter as Router } from 'react-router-dom';
import { Logo } from './components/Logo';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { Landing } from './layouts/Landing';
import './assets/stylesheets/App.scss';

function App() {
  const { isSmallScreen, handleResize } = useViewport(750);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize])

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