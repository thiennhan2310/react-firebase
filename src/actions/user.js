import * as firebase from 'firebase'

export const setUserInfo = (userId, userInfo) => {
    return {
        type: 'SET_USER_INFO',
        userInfo: userInfo,
        userId: userId
    }
}

export function getUserInfomation(userId) {
    //console.log(userId);
    return (dispatch) => {
        const rootRef = firebase.database().ref('users');
        const childRef = rootRef.child(userId);
        childRef.once('value', snap => {
            let userInfo = snap.val()
            //console.log(userInfo);
            dispatch(setUserInfo(userId, userInfo))
        });
    }
}
