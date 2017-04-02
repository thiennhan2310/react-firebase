import React from 'react';
import {connect} from 'react-redux'
import MessageListUI from "../../components/message/MessageListUI";

class MessageList extends React.Component {
}

const mapStateToProps = (state) => {

    return {messages: state.messages.messages, users: state.users.userList, currentUserId: state.app.currentUserId};
};

export default connect(mapStateToProps)(MessageListUI);
