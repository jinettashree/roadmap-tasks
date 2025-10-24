import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './practise/projects';
import Home from './practise/home';
import Articles from './practise/articles';
import Contacts from './practise/contacts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default App
