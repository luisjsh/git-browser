const INITIAL_STATE = {
    usersData: []
}

const usersReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'SET_USERS':
                return {
                    usersData: action.payload
                }    
        default:
            return state
    }
}

export default usersReducer