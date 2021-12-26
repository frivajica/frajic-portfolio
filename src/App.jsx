import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './common/Header'
import { Footer } from './common/Footer'
import { Landing } from './layouts/Landing'
import './/assets/stylesheets/App.scss';

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