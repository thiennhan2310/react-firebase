import React from 'react';
import MesgsItem from './MesgsItem'
import * as firebase from 'firebase';


class MesgsList extends React.Component {

    constructor() {
        super();
        this.state = {
            listItems: '',
            currentUserId: firebase.auth().currentUser.uid
        };
    }


    componentWillMount() {
        const rootRef = firebase.database().ref('messages');
        const speedRef = rootRef.child('channel1adsfasdfwerqwer');

        speedRef.on('value', snap => {
            let messObj = snap.val();
            let keys = Object.keys(messObj);
            let listItems = [];

            for (let i = 0; i < keys.length; i++) {
                let isShowAvatar = this.isShowAvatar(messObj[keys[i]], messObj[keys[i + 1]]);
                let isFromMe = this.isFromMe(messObj[keys[i]].from);

                listItems.push(
                    <MesgsItem key={keys[i]} messageId={keys[i]} messageData={messObj[keys[i]]} isShowAvatar={isShowAvatar} isFromMe={isFromMe}/>);
            }
            this.setState({'listItems': listItems});
        })
    }

    isFromMe(from) {
        return from === this.state.currentUserId;
    }

    isShowAvatar(currentMess, nextMess) {
        if (nextMess == undefined) {
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

export default MesgsList;