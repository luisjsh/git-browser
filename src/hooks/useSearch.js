import {useState, useEffect} from 'react'
import {Octokit} from '@octokit/core'

import store from '../redux/store'

const useSearch = (queryValues)=>{
    const [handler, setHandler] = useState({
        loading: true,
        error: false
    })

    useEffect(()=>{
        const search = async ()=>{
            setHandler({loading: true, error: false})
            const octokit = new Octokit()
            const queryValuesReformated = queryValues.split('').join('')

            await octokit.request(`GET https://api.github.com/search/users?q=`+queryValuesReformated+"in:user ")
                .then( async response => {
                    setHandler({loading: false, error: false});
                    store.dispatch(setUsers(response.data.items));
                })
                .catch(e =>{
                    setHandler({
                        error: true, loading: false 
                    })
                    store.dispatch(setUsers([]))
                })
        }

        search()
    },[queryValues])

    return handler
}

const setUsers=(users)=>{
    return {
        type:"SET_USERS", 
        payload: users
    }
}

export default useSearch