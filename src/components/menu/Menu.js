import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Projets</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#experience">Experiences</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#formation">Formations</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}