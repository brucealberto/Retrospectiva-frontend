import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens/Home/Home';
import { Login } from '../screens/Login/Login';
import { Register } from '../screens/Register/Register';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}
