import './App.css';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import { darkMode } from './constant/utils';

function App() {
  return (
    <Router>
      <div className='min-h-screen flex justify-between items-stretch flex-col'>
        <Navbar />
        <div
          className={`grow ${
            darkMode.value
              ? 'bg-dark-bg text-dark-text'
              : 'bg-light-bg text-light-text'
          }`}
        >
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
