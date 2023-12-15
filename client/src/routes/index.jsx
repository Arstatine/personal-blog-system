import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Search,
  Blogs,
  About,
  Category,
  CurrentCategory,
  NotFound,
} from '../views';

function AppRoutes() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/search' element={<Search />} />
      <Route path='/categories'>
        <Route index element={<Category />} />
        <Route path=':id' element={<CurrentCategory />} />
      </Route>
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
