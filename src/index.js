import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multi, { BoaNoite} from './componentes/Multiplus'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/FIlho'
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome='Pedro' sobrenome='Silva' />
            <Filho nome='Carla' sobrenome='Silva' />
            <Filho nome='Paulo' sobrenome='Silva' />
        </Pai>
       
    </div>,

document.getElementById('root'))