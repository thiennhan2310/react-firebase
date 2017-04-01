import * as firebase from 'firebase'

const setNotification = (totalMessageUnRead) => {
    return {
        type: 'SET_NOTIFICATION',
        totalMessageUnRead: totalMessageUnRead
    }
}

export function getTotalNotification(userId) {
    // first parameter allway is dispatch for call another function
    return (dispatch) => {
        const userRef = firebase.database().ref('users/'+userId+'/channels').orderByChild("isRead").equalTo(false);
        userRef.on('value', snap => {
            let channelInfo = snap.val()
            // console.log('NotificationMessage Action');
            // console.log(channelInfo);
            // console.log(Object.keys(channelInfo).length);

            let totalMessageUnRead = Object.keys(channelInfo).length;
             dispatch(setNotification(totalMessageUnRead))
        });

    }
}
