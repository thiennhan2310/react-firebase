import React, {Component} from 'react';
import MesgsHeader from '../containers/Message/MessageHeader'
import MesgsBoxSend from '../components/Message/MessagesBoxSendUI'
import MesgsList from '../components/Message/MessageListUI'
import {connect} from 'react-redux'
import * as firebase from 'firebase';

class BoxMesgs extends Component {



    render() {
        if (this.props.channels.selectedChannelId !== '') {
            return (
                <div className="primus-chat-system__box-right primus-chat-system__box-mesgs"
                     id="primus-chat-system__box-right">
                    <MesgsHeader />
                    <MesgsList/>
                    <MesgsBoxSend/>
                </div>
            )
        } else {
            return (
                <div className="primus-chat-system__box-right primus-chat-system__box-mesgs"
                     id="primus-chat-system__box-right">
                </div>
            )
        }

    }
}
const mapStateToProps = (state) => {
    return {channels: state.channels, users: state.users}
}

export default connect(mapStateToProps)(BoxMesgs);
// export default BoxMesgs;
