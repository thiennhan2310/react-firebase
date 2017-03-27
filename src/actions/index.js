import fetch from 'isomorphic-fetch'

export const selectChannel = (channelId) => {
    return {
        type: 'SELECT_CHANNEL',
        channelId: channelId
    }
}

const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        token: token
    }
}


export function getToken(userId) {
    return dispatch => {
        return fetch('https://restful-node-mongo.herokuapp.com/user/token/' + userId)
            .then(response => response.json())
            .then(json => {
                dispatch(setToken(json.data.token))
            })
    }
}