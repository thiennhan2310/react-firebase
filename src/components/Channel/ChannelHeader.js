import React from 'react';


class ChannelHeader extends React.Component {

    render() {
        return (
            <div className="primus-chat-system__box-left-header">
                <div className="title color-blue">
                    <img src="" alt=""/>
                    <h4>All Messages <span className="number-of-all-mesg">(79)</span></h4>
                </div>
            </div>
        )
    }
}

export default ChannelHeader;