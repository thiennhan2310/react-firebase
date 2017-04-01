import React from 'react';
import MesgsItem from './MessagItem'
import * as firebase from 'firebase';
import {connect} from 'react-redux'

class MesgsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: '',
            currentUserId: firebase.auth().currentUser.uid
        };
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log(this.props);
    }

    componentWillMount() {
        let channelId = this.props.selectedChannelId;
        // console.log(this.props);
        if (channelId !== '') {
            const rootRef = firebase.database().ref('messages');
            const speedRef = rootRef.child(channelId);
            // console.log(channelId);
            speedRef.on('value', snap => {
                let messObj = snap.val();
                if (messObj !== null) {
                    let keys = Object.keys(messObj);
                    let listItems = [];
                    for (let i = 0; i < keys.length; i++) {
                        let isShowAvatar = this.isShowAvatar(messObj[keys[i]], messObj[keys[i + 1]]);
                        let isFromMe = this.isFromMe(messObj[keys[i]].from);
                        let isRead = messObj[keys[i]].isRead;
                        listItems.push(
                            <MesgsItem key={keys[i]}
                                       messageId={keys[i]}
                                       channelId={channelId}
                                       isRead={isRead}
                                       messageData={messObj[keys[i]]}
                                       isShowAvatar={isShowAvatar}
                                       isFromMe={isFromMe}
                            />);
                    }
                    this.setState({'listItems': listItems});
                    setTimeout(function () {
                        var objDiv = document.getElementById("primus-chat-system__box-list-mesgs");
                        objDiv.scrollTop = objDiv.scrollHeight;
                    }, 100);
                }
            })

        }
    }

    componentWillReceiveProps(nextProps) {
        let channelId = nextProps.selectedChannelId;
        if (channelId !== '') {
            const rootRef = firebase.database().ref('messages');
            const speedRef = rootRef.child(channelId);
            // console.log(channelId);
            speedRef.on('value', snap => {
                let messObj = snap.val();
                if (messObj !== null) {
                    let keys = Object.keys(messObj);
                    let listItems = [];
                    for (let i = 0; i < keys.length; i++) {
                        let isShowAvatar = this.isShowAvatar(messObj[keys[i]], messObj[keys[i + 1]]);
                        let isFromMe = this.isFromMe(messObj[keys[i]].from);
                        let isRead = messObj[keys[i]].isRead;
                        listItems.push(
                            <MesgsItem key={keys[i]}
                                       messageId={keys[i]}
                                       channelId={channelId}
                                       isRead={isRead}
                                       messageData={messObj[keys[i]]}
                                       isShowAvatar={isShowAvatar}
                                       isFromMe={isFromMe}
                            />);
                    }
                    this.setState({'listItems': listItems});
                    setTimeout(function() {
                        var objDiv = document.getElementById("primus-chat-system__box-list-mesgs");
                        objDiv.scrollTop = objDiv.scrollHeight;
                    }, 100);
                }
            })

        }
    }

    isFromMe(from) {
        return from === this.state.currentUserId;
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
            <div className="primus-chat-system__box-list-mesgs" id="primus-chat-system__box-list-mesgs">
                {this.state.listItems}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.channels;
};

export default connect(mapStateToProps)(MesgsList);
