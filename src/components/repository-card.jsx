import styled from 'styled-components'

import Title from './title'

const Card = styled.div`
    padding: 1em;
    display: grid;
    background-color: #b3b3b3;
    border-radius: 10px;
    grid-gap: 1em;
`

const RepositoryCard = ({name, html_url, description})=>{
    return(
        <Card>
            <Title redirect={html_url} textAlign='center'>{name}</Title>
            {description && <span>{description}</span>}
        </Card>
    )
}

export default RepositoryCard