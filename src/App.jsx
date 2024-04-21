import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import SubscriptionPage from './pages/SubscriptionPage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/subscription' element={<SubscriptionPage />} />
      </Routes>
    </Router>
  );
}