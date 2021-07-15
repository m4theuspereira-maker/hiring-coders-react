import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CONTAINER = styled.div`
    width: 100%;
    max-width: 991px;
    margin:  0 auto;
`

export const TITLE = styled.h1`
text-align: center; 
font-size: 2rem; 
font-family: sans-serif;
color: #333;
`;

export const LIST = styled.ul`
list-style: none;
padding: 0; 
margin: 0;
font-family: sans-serif;
`;
export const LISTITEM = styled.li`
margin: .5rem 0;
background: #000;
color: #fff;
padding: .5rem;
`

export const HOMELINK = styled(Link)`
display:block;
width:4rem;
text-align:center; 
margin: 2rem auto;
background-color: #000;
padding:.5rem 0;
color:#fff;
text-decoration:none;
`
