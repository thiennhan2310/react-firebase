import React from 'react';
import MesgsItem from './MessagItem'
import * as firebase from 'firebase';
import {connect} from 'react-redux'
import {getMessages} from '../../actions/messages'
import MessageListUI from "../../components/message/MessageListUI";

class MessageList extends React.Component {
}

const mapStateToProps = (state) => {

    return {messages: state.messages.messages, users: state.users.userList, currentUserId: state.app.currentUserId};
};

export default connect(mapStateToProps)(MessageListUI);
