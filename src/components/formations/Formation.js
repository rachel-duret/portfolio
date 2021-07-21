import React from 'react'


function Formation({ datas}) {
    return (
        <div className="formation" id="formation">
          <div className='h2'>
            <h2 className="h2">Formation</h2>
          </div>
           
            {datas.map(item => (
                <div className="row" key={item.id}>
                  <div className="item">
                    <p className="date">{item.date}</p>
                    <p className="location">{item.societe}</p>
                  </div>
                  <div className="item">
                    <h3 className="title">{item.title}</h3>
                   
                  </div>
                </div>      

            ))}
                
        </div>
    )
}

export default Formation