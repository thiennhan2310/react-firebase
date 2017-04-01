import {SET_USER_INFO, SET_CURRENT_USER} from '../actions/user';


const initialiState = {
    'userList': {}
};

const users = (state = initialiState, action) => {
    switch (action.type) {

        case SET_USER_INFO:
        case SET_CURRENT_USER:
            let userInfo = action.userInfo;
            return {...state, ['userList'] : {...state.userList ,[action.userId]: userInfo }  };

        default:
            return Object.assign({}, state)
    }

}

export default users;
