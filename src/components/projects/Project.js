import { useEffect, useState } from "react";
import ProjectList from "../projectList/ProjectList";
import "./project.scss";
import {
  openclassroomProjets,
  appClone,
  webPortfolio,
} from "../../datas/projectsData";

export default function Project() {
  const [selected, setSelected] = useState("openclassroom");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "openclassroom",
      title: "Openclassroom Projets",
    },
    {
      id: "webApp clone",
      title: "App Clone",
    },
    {
      id: "web",
      title: "Web App",
    }, 
  ];

  useEffect(() => {
    switch (selected) {
      case "openclassroom":
        setData(openclassroomProjets);
        break;
      case "webApp clone":
        setData(appClone);
        break;
      case "web":
        setData(webPortfolio);
        break;  
      default:
        setData(appClone);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h2>Projects</h2>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
         
            <a href={d.url}>
               <div className="item">
                 <img src={d.img} alt="" />
                 <h3>{d.title}</h3>
              </div>
            </a>
           
         
        ))}
      </div>
    </div>
  );
}
