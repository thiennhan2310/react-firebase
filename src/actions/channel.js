import * as firebase from 'firebase'

const setListChannel = (listChannelArr) => {
    return {
        type: 'SET_LIST_CHANNEL',
        listChannel: listChannelArr
    }
}

const setChannelInfo = (channelInfo) => {
    return {
        type: 'SET_CHANNEL_INFO',
        // channelId: channelId,
        channelInfo: channelInfo
    }
}

export const selectChannel = (channelId) => {
    return {
        type: 'SELECT_CHANNEL',
        selectedChannelId: channelId,
    }
}


export function getListChannelBy(userId) {
    // first parameter allway is dispatch for call another function
    // console.log("uid: " + userId);
    return (dispatch) => {
        const rootRef = firebase.database().ref('users');
        const childRef = rootRef.child(userId);
        childRef.on('value', snap => {
            var userInfo = snap.val();
            var listChannel = userInfo.channels;
            let listChannelArr= Object.keys(listChannel);
            // dispatch(setListChannel(listChannelArr))

                //let channelId = listChannelArr[i];
                const channelRef = firebase.database().ref('channels').orderByChild("user/"+userId).equalTo(true);
                channelRef.on('value', snap => {
                    let channelInfo = snap.val()

                     let recieverIds = Object.keys(channelInfo).map(key => {
                         return Object.keys(channelInfo[key].user).filter(uid => {
                            return uid != userId;
                        });
                    })
                    recieverIds = flatten(recieverIds);
                    dispatch(setChannelInfo(snap.val()))
                });

        });
    }
}

const flatten = arr => arr.reduce(
    (acc, val) => acc.concat(
        Array.isArray(val) ? flatten(val) : val
    ),
    []
);

function getChannelInfomation(dispatch, channelId) {
    const rootRef = firebase.database().ref('channels');
    const childRef = rootRef.child(channelId);
    childRef.once('value', snap => {
        let channelInfo = snap.val()
        dispatch(setChannelInfo(channelId, channelInfo))
    });
}
