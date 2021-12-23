import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './common/Header'
import { Footer } from './common/Footer'
import { Landing } from './layouts/Landing'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Landing />
      <Footer />
    </Router>
  );
};

export default App;