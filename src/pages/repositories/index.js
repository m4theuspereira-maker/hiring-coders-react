import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import * as S from './styled'


const repositories = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [repositories, setRepositories] = useState([])
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null ){
        console.log(repositories)
        repositoriesName = JSON.parse(repositoriesName)
        setRepositories(repositoriesName)
        localStorage.clear()
        }else{
            history.push("/")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <S.CONTAINER>
                <S.TITLE>Repositório</S.TITLE>
                <S.LIST>
                    {
                        repositories.map(repo => {
                            return (
                                <S.LISTITEM> {repo}</S.LISTITEM>
                            )
                        })
                    }
                </S.LIST>
                <S.HOMELINK to="/">Voltar</S.HOMELINK>
            </S.CONTAINER>
        </>
    )
}

export default repositories