import React, { PropTypes } from 'react'
import ChannelItem from './ChannelItem'

const ChannelListUI = ({ channelList }) => {
    return (
        <div className="primus-chat-system__box-left-content primus-chat-system__box-list-channel">
            {
                Object.keys(channelList).map(function (key) {
                    return (
                        <ChannelItem
                            channelId={key}
                            key={key} />
                    );
                }, this)
            }
        </div>);
}

ChannelListUI.propTypes = {
  channelList: PropTypes.object.isRequired,
}

export default ChannelListUI
