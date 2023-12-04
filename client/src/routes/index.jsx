import { Routes, Route } from 'react-router-dom';
import { Home, Search, Blogs } from '../views';

function AppRoutes() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route index path='/blogs' element={<Blogs />} />
      <Route index path='/search' element={<Search />} />
    </Routes>
  );
}

export default AppRoutes;
