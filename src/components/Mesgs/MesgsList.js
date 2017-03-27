import React from 'react';
import MesgsItem from './MesgsItem'
import * as firebase from 'firebase';
import {connect} from 'react-redux'
import {getMessages} from '../../actions/message'
class MesgsList extends React.Component {

    constructor() {
        super();
        this.state = {
            listItems: '',
            currentUserId: firebase.auth().currentUser.uid
        };
    }


    componentWillMount() {
        this.props.dispatch(getMessages('channel1adsfasdfwerqwer'))
    }

    isFromMe(from) {
        return from === this.state.currentUserId;
    }

    componentWillReceiveProps(nextProps) {
        let messObj = nextProps.message.messObj;
        let keys = Object.keys(messObj);
        let listItems = [];

        for (let i = 0; i < keys.length; i++) {
            let isShowAvatar = this.isShowAvatar(messObj[keys[i]], messObj[keys[i + 1]]);
            let isFromMe = this.isFromMe(messObj[keys[i]].from);
            let isRead = messObj[keys[i]].isRead;
            listItems.push(
                <MesgsItem key={keys[i]}
                           messageId={keys[i]}
                           channelId={nextProps.channels.channelId}
                           isRead={isRead}
                           messageData={messObj[keys[i]]}
                           isShowAvatar={isShowAvatar}
                           isFromMe={isFromMe}
                />);
        }
        this.setState({'listItems': listItems});

    }

    isShowAvatar(currentMess, nextMess) {
        if (nextMess === undefined) {
            //current Message is the last message
            return true;
        }

        let nextMessFrom = nextMess.from;
        let currentMessFrom = currentMess.from;

        return nextMessFrom !== currentMessFrom;
    }

    render() {
        return (
            <div className="primus-chat-system__box-list-mesgs">
                {this.state.listItems}
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return state;
}


export default connect(mapStateToProps)(MesgsList)
