import {SET_USER_INFO, SET_CURRENT_USER, SET_RECEIVER_USER} from '../actions/user';


const initialiState = {
    'userList': {},
    'receiverInfo': {}
};

const users = (state = initialiState, action) => {
    switch (action.type) {

        case SET_USER_INFO:
        case SET_CURRENT_USER:
            let userInfo = action.userInfo;
            return {...state, ['userList'] : {...state.userList ,[action.userId]: userInfo }  };
        case SET_RECEIVER_USER :
            return Object.assign({}, state, {
                'receiverInfo': {'userId': action.receiverId, ...action.receiverInfo}
            })
        default:
            return Object.assign({}, state)
    }

}

export default users;
