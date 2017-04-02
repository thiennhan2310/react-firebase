import React, { PropTypes } from 'react'
import FirebaseAvatar from '../../containers/FirebaseAvatar'

const ChannelItemUserInfo = ({ receiverId, fullName, isOnline }) => {
    return (
        <div>
            <FirebaseAvatar userId={receiverId} class_name={"avatar-of-channel"} />
            <div className="line__info-channel">
                <i className={ "status-of-channel fa fa-circle " + isOnline ? 'online' : 'offline'} aria-hidden="true"></i>
                <h5 className="name-of-channel">{ fullName }</h5>
                <span className="number-of-channel-mesg badge">2</span>
            </div>
        </div>);
}

ChannelItemUserInfo.propTypes = {
  // url: PropTypes.string.isRequired,
  receiverId: PropTypes.string.isRequired,
  fullName  : PropTypes.string.isRequired,
  isOnline  : PropTypes.bool.isRequired,
}

export default ChannelItemUserInfo
