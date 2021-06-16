import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

import Title from './title'

const Nav = styled.nav`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
`

const Navbar = ()=>{
    const history = useHistory()

    const handleRedirect = ()=>{
        history.push('/')
    }

    return (
        <Nav>
            <Title navbar='t' handleClick={handleRedirect}>
                
            </Title>
        </Nav>
    )
}

export default Navbar