
import React, { useState } from 'react'
import * as S from './styled'
import axios from 'axios'

function App(props) {
    const [usuario, setUsuario] = useState('')

    const handlerUser = () => {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
    }
    return (
        <> <S.CONTAINER>
            <p>{usuario}</p>
            <h1>{props.title}</h1>
            <S.INPUT name='usuario' id='usuario' className='usuarioInput' placeholder='user name' value={usuario} onChange={e => setUsuario(e.target.value)} />
            <S.BUTTON type='buttom' onClick={handlerUser}>search</S.BUTTON>
        </S.CONTAINER>
        </>
    );
}

export default App;
