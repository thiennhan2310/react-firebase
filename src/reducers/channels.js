/**
 * Created by ThienNhan on 3/26/2017.
 */
import {SET_LIST_CHANNEL, SELECT_CHANNEL, SET_CHANNEL_INFO} from '../actions/channel';

const initialState = {
  'selectedChannelId': '',
    'channelList': {}
 };

const channels = (state = initialState, action) => {
    switch (action.type) {

        case SET_LIST_CHANNEL: {
            return Object.assign({}, state, {
                listChannel: action.listChannel
            });

        }
        case SELECT_CHANNEL: {
            return Object.assign({}, state, {
                selectedChannelId: action.selectedChannelId
            });

        }
        case SET_CHANNEL_INFO: {
            return Object.assign({}, state, {
                channelList: action.channelInfo
            });
            //return {...state, 'channelList': [...state.channelList, action.channelInfo] }
            // let channelInfo = action.channelInfo;
            // return {...state, ['channelList'] : {...state.channelList , channelInfo }  }

        }
        default:
            return Object.assign({}, state);
    }

}

export default channels;
