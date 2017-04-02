import React from 'react';
// import ChannelItem from  './ChannelItem'
import * as firebase from 'firebase';
// import {selectChannel, getListChannel} from '../../actions'
import {connect} from 'react-redux'
import moment from 'moment'
import {selectChannel, getListChannelBy} from '../../actions/channel'
import ChannelItem from  './ChannelItem'

// import React from 'react';
// import {connect} from 'react-redux'
// import ChannelListUI from './ChannelListUI';
// import {selectChannel, getListChannelBy} from '../../actions/channel'
// import moment from 'moment'
//
//
//
// function mapStateToProps(state, ownProps) {
//
//     return {
//       state: state,
//       channelList: state.channels.channelList,
//     }
// }
//
// function mapDispatchToProps (dispatch, ownProps) {
//     console.log(ownProps);
//     dispatch(getListChannelBy(this.state.app.currentUserId))
//     return {
//         }
//  }


// export default connect(mapStateToProps, mapDispatchToProps)(ChannelListUI)



class ChannelList extends React.Component {


    constructor () {
        super();
        this.state = {
            // listChannel : [],
            lastestChannelId: '',
            currentUserId: firebase.auth().currentUser.uid
        };

    }

    componentWillMount () {
        // this.props.dispatch(getListChannelBy(this.state.currentUserId));
        this.props.dispatch(getListChannelBy(this.state.currentUserId));
    }

    componentWillReceiveProps (nextProps) {
        let newChannelIdSelected = nextProps.selectedChannelId;
        if (nextProps.channelList !== this.props.channelList) {

            this.setLastestChannel(nextProps.channelList);
        }

    }

    render() {
        let channelList = this.props.channelList;
        return (
            <div className="primus-chat-system__box-left-content primus-chat-system__box-list-channel">
                {
                    Object.keys(channelList).map(function (key) {
                        // var channelItem = channelList[key];
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

    setLastestChannel (listChannel) {

        var channelItem = '';
         Object.keys(listChannel).map(function (key) {
             var lastestChannelId = '';
            if (channelItem === '') {
                lastestChannelId = key;
                channelItem = listChannel[key];
            }
            else {
                var channelItemTemp = listChannel[key];
                // console.log(channelItem.lastMessageTime);
                // console.log(channelItemTemp.lastMessageTime);
                var m =  moment.utc(channelItem.lastMessageTime);
                var issafter = m.isAfter(channelItemTemp.lastMessageTime);
                if (!issafter) {
                    lastestChannelId = key;
                    channelItem = listChannel[key];
                }
            }
            // return lastestChannelId;
            if (lastestChannelId !== '') {
                console.log('lastestChannelId '+lastestChannelId);
                this.setState ({ 'lastestChannelId' : lastestChannelId });
                this.dispatchChannel(lastestChannelId);
            }

        }, this);

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
