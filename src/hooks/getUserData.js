import {useState, useEffect} from 'react'
import {Octokit} from '@octokit/core'
import {debounce} from 'lodash'

const useUserData = (queryValues)=>{
    const [handler, setHandler] = useState({
        data: false,
        loading: false,
        error: false
    })

    useEffect(()=>{
        const search = debounce(async ()=>{
            setHandler({data: false, loading: true, error: false})
            const octokit = new Octokit()

            await octokit.request(`GET ${queryValues}`,{
                user: queryValues
            })
                .then( async response => {
                    setHandler({ data: response.data, loading: false, error: false})
                })
                .catch(e =>{
                    setHandler({
                        error: true, loading: false, data: false
                    })
                })
        }, 1000)

        search()
    },[queryValues])

    return handler
}

export default useUserData