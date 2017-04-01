import React from 'react';
import {connect} from 'react-redux'
import ChannelItemUserInfoUI from '../components/Channel/ChannelItemUserInfoUI';


function mapStateToProps(state, ownProps) {
    let userId = Object.keys(ownProps.userInThisChannel).filter(function(key) {
      return key != state.app.currentUserId
    })[0];

    return {
      currentUserId: state.app.currentUserId,
      isOnline: ownProps.userInThisChannel[userId],
      receiverId: userId,
      fullName: state.users.userList[userId] ? state.users.userList[userId].fullName : "Unnamed"
    }
}

export default connect(mapStateToProps)(ChannelItemUserInfoUI)
