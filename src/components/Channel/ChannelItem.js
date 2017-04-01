import React from 'react';
import {connect} from 'react-redux'
import ChannelItemUI from './ChannelItemUI';
import {selectChannel} from '../../actions/channel'

function mapStateToProps(state, ownProps) {

    let channelId = ownProps.channelId;
    let itemData = state.channels.channelList[channelId];
    console.log(itemData);
    return {
      user: itemData.user,
      lastMessage: itemData.lastMessage,
      lastMessageTime: itemData.lastMessageTime,
      isSelected: ownProps.channelId === state.channels.selectedChannelId,
    }
}

function mapDispatchToProps (dispatch, ownProps) {
    return {
        onClick: () => {
          dispatch(selectChannel(ownProps.channelId))
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelItemUI)
