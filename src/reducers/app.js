/**
 * Created by ITTEAM on 3/28/2017.
 */
/**
 * Created by ThienNhan on 3/27/2017.
 */
const app = (state = [], action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return Object.assign({}, state, {
                token: action.token
            });
        default:
            return Object.assign({}, state)
    }

}


export default app;