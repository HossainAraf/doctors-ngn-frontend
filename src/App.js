import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="App">
          <Routes>
            <Route path="/" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
