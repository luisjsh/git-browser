import styled from 'styled-components'

import Spinner from './spinner.svg'

const Page = styled.div`
    padding: 1em;
`

const Loading = ()=>{
    return(
        <Page>
            <img src={Spinner} alt='spinner'/>
        </Page>
    )
}

export default Loading