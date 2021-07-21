import { useEffect, useRef } from "react";
import "./topbar.scss";
import { init } from "ityped";


export default function Topbar({ menuOpen, setMenuOpen }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Full-Stack"],
    });
  }, []);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <img src="assets/Photo.jpg" alt="" />
          <h1 className="title">Developpeur web 
          <p>Chun Cheung Duret ( Rachel )</p>
           <span ref={textRef}></span>
          </h1>
       
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
