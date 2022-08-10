import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/app.routes';
import { Login } from './screens/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
