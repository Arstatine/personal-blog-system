import './App.css';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
