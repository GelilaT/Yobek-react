import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    
  );
}

export default App;
