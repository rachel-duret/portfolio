import "./intro.scss";
import { Person, Mail  } from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Intro() {
 

  return (
    <div className="intro" id="intro">
     
      <div className="infoContainer">
        <div className="left">
           <div className="itemContainer">
            <Person className="icon" /> 
            <a href="tel:+33751697562">+33 751697562</a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:chuncheung.ku@gmail.com">chuncheung.ku@gmail.com</a>
          </div>
          <div className="itemContainer">
            <HomeIcon className="icon" />
            <span>Sartrouville</span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <a href="https://github.com/rachel-duret">https://github.com/rachel-duret</a>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href="https://www.linkedin.com/in/rachelduret">https://www.linkedin.com/in/rachelduret</a>
          </div>
       
        </div>
        <div className="right">
          <h2>Technologies</h2>
          <div className="imgContainer" >
            <div className="front">
              <img src="./assets/html.png" alt="" />
              <img src="./assets/css.png" alt="" />
              <img src="./assets/js.png" alt="" />
              <img src="./assets/react.png" alt="" />
            </div>
            <div className="back">
              <img src="./assets/nodejs.png" alt="" />
              <img src="./assets/mysql.png" alt="" />
              <img src="./assets/mongo.png" alt="" />
            </div>           
          </div>
        </div>
      </div>
     {/*  <div className="aboutMe">
        <p>
        Après une reconversion dans l’informatique, je recherche aujourd’hui un poste de développeuse web full-stack ou front-end.
      Mes expériences professionnelles dans le business (finance et développement commercial) m’ont permis de développer des compétences tels que la patience, l’autonomie, et la recherche de solutions tout en travaillant en équipe. Aujourd’hui, je souhaite trouver des missions de développement web dans un environnement dynamique et apprenant.
        </p> 
      </div> */}
      
    </div>
  );
}
