<<<<<<< HEAD
import React, { createContext, useState} from 'react';
import Content from './components/Content.js';

export const DisplayModeContext = createContext();

const Bootstrap = () => {
    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
                crossorigin="anonymous"
            ></link>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                crossorigin="anonymous"
            ></script>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css%22%3E"
            ></link>
        </>
    );
};

const App = () => {
  const [isLight, setIsLight] = useState("light");
  return(
      <DisplayModeContext.Provider value={{isLight, setIsLight}}>
          <Bootstrap />
          <Content variant={isLight}/>
      </DisplayModeContext.Provider>
  )
=======
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
>>>>>>> d82773e6416954b2d4f26b7af1800a1f26f6a02e
}

export default App;