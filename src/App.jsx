import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <div>

    {/* Navigation */}
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/Projects">Projects</Link> |{" "}
      <Link to="/Contacts">Contacts</Link>
    </nav>

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contacts" element={<Contacts />} />
    </Routes>

    </div>
  );
}
export default App
