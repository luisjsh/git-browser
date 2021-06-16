import styled from 'styled-components'

import nouser from './no-user.png'
import Title from '../../components/title'

const Wrapper = styled.div`
    display: grid;
    grid-gap: 1em;
    justify-items: center;
`

const NoUser = ()=>{
    return (
        <Wrapper>
            <img src={nouser} width='100px' height='100px' alt="no-user"/>
            <Title>There´s no user with that nickname, please try again</Title>
        </Wrapper>
    )
}

export default NoUser