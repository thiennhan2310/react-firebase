


const initialiState = {

 'userList': []
};

const users = (state = initialiState, action) => {
    switch (action.type) {

        case 'SET_USER_INFO':
            let userInfo = action.userInfo;
            return {...state, ['userList'] : {...state.userList ,[action.userId]: userInfo }  }
            break;

        default:
            return Object.assign({}, state)
    }

}

export default users;
