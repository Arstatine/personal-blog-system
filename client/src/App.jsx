import './App.css';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
