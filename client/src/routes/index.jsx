import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Search,
  Blogs,
  About,
  Category,
  CurrentCategory,
} from '../views';

function AppRoutes() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/search' element={<Search />} />
      <Route path='/category'>
        <Route index element={<Category />} />
        <Route path=':id' element={<CurrentCategory />} />
      </Route>
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
