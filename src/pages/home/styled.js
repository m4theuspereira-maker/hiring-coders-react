import styled from 'styled-components'


export const HOME_CONTAINER = styled.div`    
display: flex;
flex-direction:column;
align-items: center; 
justify-content: center;
height: 100vh; 
width: 100vw;
`

export const CONTENT = styled.div`
    width: 100vw;
    display: flex;
    align-items: center; 
    justify-content: center;
`

export const INPUT = styled.input`
border: 1px solid #ddd; 
height: 1.5rem; 
padding: 0 .5rem; 
border-radius: .25rem 0 0 .25rem; 

&:focus,
&:active{
    outline: none; 
    box-shadow: none;
}
`

export const BUTTON = styled.button`
height: 1.5rem;
border: 1px solid #000; 
background: #000; 
color: #fff;
border-radius: 0 .25rem .25rem 0; 
`

export const ERROR_MSG = styled.span`
display:block;
font-size:0.65rem;
color: red; 
font-weight: 600;
margin-top: 1rem;

`

