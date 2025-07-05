import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/projects/WeatherApp';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects/weather" element={<Weather></Weather>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
