import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Project from "./components/projects/Project"
import Contact from "./components/contact/Contact"
import Experiences from "./components/experiences/Experiences"
import "./App.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Formations from "./components/formations/Formations";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro />
       <Project/>
       <Experiences />
       <Formations />
       <Contact />
     </div>
    </div>
  );
}

export default App;
