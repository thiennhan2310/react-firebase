import React from 'react';
import moment from "moment";
// import * as firebase from 'firebase';
import {connect} from 'react-redux'
import MessageHeaderUI from '../../components/message/MessageHeaderUI'

class MessageHeader extends React.Component {

}
const mapStateToProps = (state) => {
    return {receiverInfo: state.users.receiverInfo}
}

export default connect(mapStateToProps)(MessageHeaderUI);
