import React, {Component} from 'react';
import BoxChannels from './BoxChannels';
import BoxMesgs from './BoxMessage';
// import {connect} from 'react-redux'

class ChatSystem extends Component {

    render() {
        return (
            <section className="primus-chat-system__container">
                <div className="primus-chat-system__box container">
                    <BoxChannels/>
                    <BoxMesgs/>
                </div>
            </section>
        )
    }
}

export default ChatSystem;
