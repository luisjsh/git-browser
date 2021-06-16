import styled from 'styled-components'
import Title from './title'

import nodata from './no-data.png'

const Section = styled.section`
    padding: 1em;
    display: grid;
    grid-gap: 1em;
`

const NoData = styled.div`
    padding: 1em; 
    display: grid;
    grid-gap: 1em;
    align-items: center;
    justify-items: center;
`


const PageSection = ({title, children, textAlign})=>{
    return (
        <Section>
            <Title textAlign={textAlign}>{title ? title : ''}</Title>
            {children.length > 0 ? children : 
                <NoData>
                    <img src={nodata} loading='lazy' alt='no-data'/>
                    <h1>There are no {title} on this users github</h1>
                </NoData>
            }

        </Section>
    )
}

export default PageSection