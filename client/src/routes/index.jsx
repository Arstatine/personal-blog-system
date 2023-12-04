import { Routes, Route } from 'react-router-dom';
import { Home } from '../views';

function AppRoutes() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
