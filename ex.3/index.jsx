import React from 'react'
import ReactDOM from 'react-dom'
import Componente, { Segundo } from './componente'

ReactDOM.render(
    
    <div>
        <Componente value='Donald' />
        <Segundo value='Donald' />
    </div>
    , document.getElementById('app'))