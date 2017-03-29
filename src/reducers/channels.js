/**
 * Created by ThienNhan on 3/26/2017.
 */

 const initialiState = {
  'selectedChannelId': '',
  'channelList': []
 };

const channels = (state = initialiState, action) => {
    switch (action.type) {

        case 'SET_LIST_CHANNEL':
            return Object.assign({}, state, {
                listChannel: action.listChannel
            })
            break;

        case 'SELECT_CHANNEL':
                return Object.assign({}, state, {
                    selectedChannelId: action.selectedChannelId
                })
                break;

        case 'SET_CHANNEL_INFO':
            return Object.assign({}, state, {
                channelList: action.channelInfo
            })
            //return {...state, 'channelList': [...state.channelList, action.channelInfo] }
            // let channelInfo = action.channelInfo;
            // return {...state, ['channelList'] : {...state.channelList , channelInfo }  }
            break;

        default:
            return Object.assign({}, state)
    }

}

export default channels;
