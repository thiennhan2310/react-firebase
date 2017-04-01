import React from 'react';
import moment from "moment";
// import * as firebase from 'firebase';
import {connect} from 'react-redux'
import MessageHeaderUI from '../../components/message/MessageHeaderUI'

class MessageHeader extends React.Component {

}
const mapStateToProps = (state) => {
    let receiverInfo = state.users.userList[state.users.receiverId];
    return {receiverInfo : receiverInfo }
}

export default connect(mapStateToProps)(MessageHeaderUI);
