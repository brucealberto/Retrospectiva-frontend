import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens/Home/Home';
import { Login } from '../screens/Login/Login';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}
