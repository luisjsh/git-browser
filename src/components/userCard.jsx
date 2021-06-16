import styled from 'styled-components'

import Title from './title'

const Card = styled.div`
    width: 300px;
    max-width: 300px;
    background-color: white;
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(62,4,83,1) 0%, rgba(187,0,255,1) 100%);
    background-size: 4000%;
    box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.2);
    transition: .3s;
    cursor: pointer;
    background-position: left;
    &:hover{
        transform: translateY(-10px);
        background-position: right;
    }
`

const ImageSection = styled.div`
    padding: 1em;
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const userCard = ({handleClick, login, avatar_url})=>{
    return (
        <Card onClick={handleClick}>
            <Title textAlign='center'>{login ? login : 'User title'}</Title>
            <ImageSection>
                <Image src={avatar_url}/>
            </ImageSection>
        </Card>
    )
}

export default userCard