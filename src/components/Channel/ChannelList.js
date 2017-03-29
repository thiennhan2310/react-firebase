import React from 'react';
import ChannelItem from  './ChannelItem'
import * as firebase from 'firebase';
// import {selectChannel, getListChannel} from '../../actions'
import {connect} from 'react-redux'
import moment from 'moment'
import {selectChannel, getListChannelBy} from '../../actions/channel'

class ChannelList extends React.Component {


    constructor () {
        super();
        this.state = {
            listChannel : [],
            lastestChannelId: '',
            currentUserId: firebase.auth().currentUser.uid
        };

    }

    componentWillMount () {
        // this.props.dispatch(getListChannelBy(this.state.currentUserId));
        this.props.dispatch(getListChannelBy(this.state.currentUserId));
    }

    componentWillReceiveProps (nextProps) {
        //console.log(nextProps.channels.channelList);

        // let newChannelIdSelected = Object.keys(nextProps.channels[0])[0];
        // if (newChannelIdSelected !== this.props.channels.selectedChannelId)
        //     this.setLastestChannel(Object.keys(nextProps.channels[0])[0]);
    }

    render() {
        let channelList = this.props.channelList;
        return (
            <div className="primus-chat-system__box-left-content
                primus-chat-system__box-list-channel">
                {
                    Object.keys(channelList).map(function (key) {
                        var channelItem = channelList[key];
                         //console.log(channelItem);
                        return (
                            <ChannelItem
                                channelId={key}
                                key={key} />
                        );
                    }, this)
                }
            </div>
        )
    }

    setLastestChannel (lastestChannelId) {
        // var lastestChannelId = '';
        // var channelItem = '';
        // Object.keys(listChannel).map(function (key) {
        //     if (channelItem === '') {
        //         lastestChannelId = key;
        //         channelItem = listChannel[key];
        //     }
        //     else {
        //         var channelItemTemp = listChannel[key];
        //         // console.log(channelItem.lastMessageTime);
        //         // console.log(channelItemTemp.lastMessageTime);
        //         var m =  moment.utc(channelItem.lastMessageTime);
        //         var issafter = m.isAfter(channelItemTemp.lastMessageTime);
        //         if (!issafter) {
        //             lastestChannelId = key;
        //             channelItem = listChannel[key];
        //         }
        //     }
        //     return lastestChannelId;
        // }, this);
        this.setState ({ 'lastestChannelId' : lastestChannelId });
        this.dispatchChannel(lastestChannelId);
    }

    dispatchChannel(channelId) {
        // console.log('channel ID -----'+channelId);
        this.props.dispatch(selectChannel(channelId));
    }
}

function mapStateToProps(state) {
    return state.channels
}
export default connect(mapStateToProps)(ChannelList)
