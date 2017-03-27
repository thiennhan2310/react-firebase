/**
 * Created by ThienNhan on 3/27/2017.
 */
import * as firebase from 'firebase';

export const selectChannel = (channelId) => {
    return {
        type: 'SELECT_CHANNEL',
        channelId: channelId
    }
}

const setMessage = (messObj) => {
    return {
        type: 'SET_MESSAGE',
        messObj: messObj
    }
}


export function getMessages(channelId) {
    return dispatch => {
        const rootRef = firebase.database().ref('messages');
        const speedRef = rootRef.child(channelId);

        speedRef.on('value', snap => {
            let messObj = snap.val();
            dispatch(setMessage(messObj))
        })

    }
}