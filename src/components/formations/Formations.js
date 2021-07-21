import React from 'react'
import FormationDatas from '../../datas/formationsDatas'
import Formation from './Formation'
import './formation.scss'

function Formations() {
    return (
        <div>
            <Formation datas={FormationDatas}/>
            
        </div>
    )
}

export default Formations
