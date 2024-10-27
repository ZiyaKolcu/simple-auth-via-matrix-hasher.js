import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/auth'
            element={<Auth />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
