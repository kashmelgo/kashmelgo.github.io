import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/Home/Home';

function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element= {<Home />} />
        <Route path="projects" element = {<Projects />} />
        <Route path="contact" element = {<Contact />} />  
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
