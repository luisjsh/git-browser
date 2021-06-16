import styled from 'styled-components'
import {useParams} from 'react-router-dom'

import useSearchSingleUser from '../../hooks/useSearchSingleUser'
import useUserData from '../../hooks/getUserData'


import Loading from '../../components/loading'

import Title from '../../components/title'
import PageSection from '../../components/page-section'
import RepositoryCard from '../../components/repository-card'

const Page = styled.div`
    padding: 1em;
    display: grid; 
    align-items: center;
    justify-content: center;
    grid-gap: 1em;
`

const PageHeader = styled.header`
    display: grid; 
    text-align: center;
    font-size: 30px;
    grid-template-columns: 1fr 1fr;
`

const PageBodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
` 

const PageBody = styled.section`
    background-color: grey;
    border-radius: 1em;
    font-size: 25px;
`

const ProfileImage = styled.img`
    max-width: 300px;
    max-height: 400px;
`


const UserPage = ()=>{
    const {id} = useParams()
    const {data, loading, error} = useSearchSingleUser(id)
    const userRepos = useUserData(data.repos_url)
    const userOrg = useUserData(data.organizations_url)
    console.log(userOrg)
    if(loading) return (
        <Page>
            <Loading />
        </Page>)
    
    if(error) return ('error')


    return (
        <Page>
            <PageHeader>
                <Title fontSize='30px;'>
                    Username: {data && data.login}
                </Title>
                <ProfileImage src={data.avatar_url}/>
            </PageHeader>
            <PageBodyWrapper>
                <PageBody>
                    {userRepos.loading && <Loading />}
                    {userRepos.error && 'error'}
                    {userRepos.data && 
                        <PageSection title='Repositories' textAlign='center'>
                        {
                            userRepos.data.map((repo, id)=>(
                                <RepositoryCard key={id} {...repo}/>
                            ))
                        }
                        </PageSection>

                    }
                </PageBody>
                <PageBody>
                    {userOrg.loading && <Loading />}
                    {userOrg.error && 'error'}
                    {userOrg.data && 
                        <PageSection title='Organizations' textAlign='center'>
                        {
                            userOrg.data.map((repo, id)=>(
                                <RepositoryCard key={id} name={repo.login} {...repo}/>
                            ))
                        }
                        </PageSection>

                    }
                </PageBody>
            </PageBodyWrapper>
        </Page>
      
    )
}

export default UserPage