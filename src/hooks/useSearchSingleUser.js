import {useState, useEffect} from 'react'
import {Octokit} from '@octokit/core'

const useSearch = (queryValues)=>{
    const [handler, setHandler] = useState({
        data: false,
        loading: true,
        error: false
    })

    useEffect(()=>{
        const search = async ()=>{
            setHandler({data: false, loading: true, error: false})
            const octokit = new Octokit()
            await octokit.request(`GET https://api.github.com/users/{user}`,{
                user: queryValues
            })
                .then( async response => {
                    let {
                        login, 
                        avatar_url, 
                        url, 
                        html_url, 
                        organizations_url, 
                        repos_url} = response.data

                    setHandler({ data: {
                        login, 
                        avatar_url, 
                        url, 
                        html_url, 
                        organizations_url, 
                        repos_url}, loading: false, error: false})
                })
                .catch(e =>{
                    setHandler({
                        error: true, loading: false, data: false
                    })
                })
        }

        search()
    },[queryValues])

    return handler
}

export default useSearch