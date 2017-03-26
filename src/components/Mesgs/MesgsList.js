import React from 'react';
import MesgsItem from './MesgsItem'
import * as firebase from 'firebase';

class MesgsList extends React.Component {
    constructor() {
        super();
        this.state = {
            listItems: ''
        };
    }

    componentWillMount() {

        const rootRef = firebase.database().ref('messages');
        const speedRef = rootRef.child('channel1adsfasdfwerqwer');

        speedRef.on('value', snap => {
            snap = snap.val();
            let keys = Object.keys(snap);
            let listItems = [];
            for (let i = 0; i < keys.length; i++) {
                listItems.push(<MesgsItem key={keys[i]} messageData={snap[keys[i]]}/>);
            }
            this.setState({'listItems': listItems});
        })
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