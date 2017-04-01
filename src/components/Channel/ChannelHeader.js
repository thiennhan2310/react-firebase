import React from 'react';


class ChannelHeader extends React.Component {

    render() {
        return (
            <div className="primus-chat-system__box-left-header primus-chat-system__box-channels">
                <div className="title color-blue">
                    <h4><img src="/assets/img/ico-message.png" width="40" alt="" />All Messages <span className="number-of-all-mesg">(2)</span></h4>
                </div>
                <div className="box-search-channel form-group">
                    <img src="/assets/img/ico-search.svg" className="icon" width="16" alt="" />
                    <input type="text" className="form-control" name="key_word-channel" placeholder="Search Conversations" />
                </div>
            </div>
        )
    }
}

export default ChannelHeader;
