import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Project from "./components/projects/Project"
import Contact from "./components/contact/Contact"
import Experiences from "./components/experiences/Experiences"
import "./App.scss"
import { useState, useEffect, useRef } from "react";
import Menu from "./components/menu/Menu";
import Formations from "./components/formations/Formations";
import { init } from 'ityped'


function App() {

  const textRef = useRef();
  useEffect(()=> {
    init( textRef.current,{
      showCursor: false,
      backDelay: 1500,
      backSpeed: 30,
      strings: ["Bienvenu dans mon sit portfolio"]
    })
  }, [])
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <div className="loading-page">
        <h2 ref={textRef}>.</h2>
        
      </div>
      <div>
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
    </div>
  );
}

export default App;
