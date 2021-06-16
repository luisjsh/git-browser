import styled from 'styled-components'
import {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

import useSearch from '../../hooks/useSearch'

import Title from '../../components/title'
import UserCard from '../../components/userCard'
import CustomInput from '../../components/custom-input'

import NoUser from './no-user'
import Loading from '../../components/loading'

const Page = styled.div`
    padding: 1em;
    background-color: black;
    display: grid;
    grid-gap: 1em;
    justify-items: center;
`

const PageHeader = styled.div`
    align-items: center;
    display: grid;
    width: 60%;
`

const PageSection = styled.div`
    padding: 1em;
    height: 300px;
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;

`

const CardsWrapper = styled.div`
    display: grid; 
    grid-gap: 1em;
    width: 100%;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
`

const Homepage = ({usersData})=>{
    const history = useHistory()
    const [formData, setFormData] = useState('')
    const {loading, error} =  useSearch(formData)

    const handleChange = (event)=>{
        event.preventDefault()
        let { value } = event.target;
        setFormData(value);
    }

    const handleRedirect = (userName)=>{
        history.push(`/user/${userName}`)
    }

    return (
        <Page>
            <PageHeader>
                <Title main='title' textAlign='center'>Search user on github</Title>
                <CustomInput type='text' handleChange={handleChange} />
            </PageHeader>
            <PageSection>
                {loading && <Loading/>}
                {error && <NoUser />}
                {usersData && usersData.length > 0 &&
                    <CardsWrapper>      
                    {
                        usersData.map((user, id)=>(
                            <UserCard key={id} handleClick={()=>handleRedirect(user.login)} {...user}/>
                        ))
                    }
                    </CardsWrapper>
                }
            </PageSection>
        </Page>
    )
}

const mapStatetoProps = ({usersData})=>{
    return ({
        usersData
    })
}

export default connect (mapStatetoProps) (Homepage);