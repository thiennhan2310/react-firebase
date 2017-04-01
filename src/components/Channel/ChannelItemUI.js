import React, { PropTypes } from 'react'
import moment from "moment";
import ChannelItemUserInfo from './ChannelItemUserInfo'



const ChannelItemUI = ({ user, lastMessage, lastMessageTime, isSelected, onClick }) => {
    var m =  moment.utc(lastMessageTime);
    var iscurrentDate = m.isSame(new Date(), "day");
    var lastMessageTimeConverted;
    if(iscurrentDate){
        lastMessageTimeConverted = m.format('LT');
    } else {
        lastMessageTimeConverted = m.format('MM/DD hh:mm');
    }
    return (
        <div className={"primus-chat-system__box-list-channel-item "+ (isSelected ? 'selected' : '')}
            onClick={ onClick } >
            <ChannelItemUserInfo userInThisChannel={user} />
            <div className="line__info-last-mesg-of-channel">
                <p className="last-mesg">{ lastMessage }</p>
                <p className="last-mesg-time">{ lastMessageTimeConverted }</p>
            </div>
        </div>
        );
}

ChannelItemUI.propTypes = {
  user: PropTypes.object.isRequired,
  lastMessage: PropTypes.string.isRequired,
  lastMessageTime: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ChannelItemUI
