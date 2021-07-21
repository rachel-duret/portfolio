import React from 'react'

function Experiences({ datas }) {
    return (
        <div className="experience" id="experience">
          <div className="h2">
             <h2 className="h2">Expériences Professionelles</h2>
          </div>
         
          {datas.map(item => (
            <div className="row" key={item.id}>
              <div className="item">
                <span className="date">{item.date}</span>
                <span className="date">{item.societe}</span>
                <span className="location">{item.location}</span>
              </div>
              <div className="titles">
                <h3 className="title">{item.title}</h3>
              
                <ul className="missions" >
                    {item.mission.map( mission => (
                        <li className="mission" key={mission.id}>{mission.title}</li>
                    ))}
                </ul>
              </div>
            </div>      

          ))}
            
    </div>
    )
}

export default Experiences
