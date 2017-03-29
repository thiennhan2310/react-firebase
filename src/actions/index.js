import fetch from 'isomorphic-fetch'

const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        token: token
    }
}


export function getToken(userId) {
    // first parameter allway is dispatch for call another function
    return (dispatch) => {
        return fetch('https://restful-node-mongo.herokuapp.com/user/token/' + userId)
            .then(response => response.json())
            .then(json => {
                dispatch(setToken(json.data.token))
            })
    }
}
