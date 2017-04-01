/**
 * Created by ITTEAM on 3/28/2017.
 */
/**
 * Created by ThienNhan on 3/27/2017.
 */
import {SET_TOKEN, SET_CURRENT_USER} from '../actions/app';

const initialiState = {
    'token': '',
};
const app = (state = initialiState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {
                token: action.token
            });
        case SET_CURRENT_USER:
            return {
              ...state,
              isLoggedIn: true,
              currentUserId: action.userId
            }
        default:
            return state;
    }

}


export default app;
