import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import './components/home/Home.css'
import './components/navbar/Navbar.css';
import {BrowserRouter as Router, Routes, Route, Link, unstable_HistoryRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
   <Navbar />
   <Footer />
    </div>
  );
}

export default App;
