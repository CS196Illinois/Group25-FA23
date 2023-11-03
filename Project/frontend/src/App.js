import logo from './logo.svg';
import './App.css';
import ShowEvents from './components/ShowEvents';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShowEvents />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
