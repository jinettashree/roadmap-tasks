import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Projects from './practise/projects';
// import Home from './practise/home';
// import Articles from './practise/articles';
// import Contacts from './practise/contacts';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Fields from './forms/fields';  
//import SinglePageCv from './single-pagecv/singlePageCv';
import HoverButton from './tool-tip/page';

function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} /> 
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/articles" element={<Articles />} />
    //     <Route path="/contacts" element={<Contacts />} />
    //   </Routes>
    // </Router>
    //<Fields/>
    //<SinglePageCv />
    <HoverButton />
  )
}

export default App
