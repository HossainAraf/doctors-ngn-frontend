import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import DoctorList from './Components/DoctorList';
import Nav from './Components/Nav/Nav';
import AddContent from './Components/AddContent';
import DoctorForm from './Components/Forms/DoctorForm';
import Footer from './Components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="App flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-content" element={<AddContent />} />
          <Route path="/add-doctor" element={<DoctorForm />} />
          <Route path="/ambulance" />
          <Route path="/emergency" />
          <Route path="/doctors/:specificationId" element={<DoctorList />} />
          <Route path="/clinics" />
          <Route path="/hospitals" />
          <Route path="/pharmacy" />
          <Route path="/blood-bank" />
          <Route path="/disclaimer" />
          <Route path="/about" />
          <Route path="/contact" />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
