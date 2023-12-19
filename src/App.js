import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
