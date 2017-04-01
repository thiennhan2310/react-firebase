/**
 * Created by ThienNhan on 4/1/2017.
 */
import * as firebase from 'firebase'

export const SET_MESSAGE = 'SET_MESSAGE';

const setMessage = (messages) => {
    return {
        type: 'SET_MESSAGE',
        messages: messages
    }
}


export function getMessages(channelId) {
    return dispatch => {
        const rootRef = firebase.database().ref('messages');
        const speedRef = rootRef.child(channelId);

        speedRef.on('value', snap => {
            let messages = snap.val();
            dispatch(setMessage(messages))
        })

    }
}