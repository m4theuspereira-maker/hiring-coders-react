
import React, { useState } from 'react'
import * as S from './styled'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function App(props) {
    const [usuario, setUsuario] = useState('')
    const [error, setError] = useState(false)
    const history = useHistory()


    const handlerUser = () => {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {

            const repositories = response.data;

            const repositoriesName = []
            repositories.map((repo) => {
                return repositoriesName.push(repo.name)
            })
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
            history.push('/repositories')
        }).catch(err => {
            setError(true)
        })
    }
    return (
        <>
            <S.HOME_CONTAINER>
                <S.CONTENT>
                    <p>{usuario}</p>
                    <h1>{props.title}</h1>
                    <S.INPUT name='usuario' id='usuario' className='usuarioInput' placeholder='user name' value={usuario} onChange={e => setUsuario(e.target.value)} />
                    <S.BUTTON type='buttom' onClick={handlerUser}>search</S.BUTTON>
                </S.CONTENT>
                {
                    error ? <S.ERROR_MSG>Ocorreu um erro</S.ERROR_MSG> : ''
                }
            </S.HOME_CONTAINER>

        </>
    );
}

export default App;
