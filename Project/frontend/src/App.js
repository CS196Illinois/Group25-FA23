import './App.css';
import ShowEvents from './components/ShowEvents';
import NavBar from './components/NavBar';
import {AuthProvider} from './context/AuthContext'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import PrivateRoutes from './utils/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <NavBar />
          <Routes>
            {/* This sets up private routes */}
            {/* <Route element={<PrivateRoutes />}>
              <Route path="/" element={<ShowEvents />} />
            </Route> */}

            <Route path="/" element={<ShowEvents />} />
            <Route path="/login/" element={<LoginPage />} />
            <Route path="/register/" element={<RegisterPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
