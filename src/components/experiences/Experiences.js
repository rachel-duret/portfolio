import React from 'react'
import dataExperiences from '../../datas/experiencesData'
import Experience from './Experience'
import './experiences.scss'


function Experiences() {
    return (
        <>
         <Experience datas={dataExperiences} />
            
        </>
    )
}

export default Experiences
