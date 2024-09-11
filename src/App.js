import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home/Home';
import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ambulance" />
          <Route path="/emergency" />
          <Route path="/doctors" />
          <Route path="/clinics" />
          <Route path="/hospitals" />
          <Route path="/pharmacy" />
          <Route path="/blood-bank" />
          <Route path="/disclaimer" />
          <Route path="/about" />
          <Route path="/contact" />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
