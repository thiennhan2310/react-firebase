import React from 'react';
import {connect} from 'react-redux'
import moment from "moment";
import * as firebase from 'firebase'
import ChannelItemUserInfo from '../../containers/ChannelItemUserInfo'
import {selectChannel} from '../../actions/channel'

class ChannelItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'currentUserId':  firebase.auth().currentUser.uid
        }
    }

    componentWillMount () {
        //console.log(this.props.channelId);
        //this.getChannelInfomation(this.props.channelId);
        // this.props.dispatch(getChannelInfomation())
        let channelId = this.props.channelId;
        let itemData = this.props.channels.channelList[channelId];

        // let consultantId = consultantId || 67;
        // let candidateId = candidateId || 27;
        // if ( candidateId != '') {
        //     if (itemData.user[consultantId] !== undefined && itemData.user[candidateId] !== undefined) {
        //         this.dispatchChannel(channelId);
        //     }
        // }

    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        // this.props.dispatch(getChannelInfomation(nextProps.channelId))

        //this.getChannelInfomation(this.props.channelId);
    }

    // getChannelInfomation( channelId) {
    //     const rootRef = firebase.database().ref('channels');
    //     const childRef = rootRef.child(channelId);
    //     //console.log(channelId);
    //     let listChannel = this.state.listChannel;
    //     childRef.on('value', snap => {
    //         this.setState ({
    //             'channelInfo': snap.val()
    //         })
    //     });
    // }

    dispatchChannel(channelId) {
        var box_right = document.getElementById("primus-chat-system__box-right");
        var header_back_mesgs = document.getElementById("header-primus-dashboard");
        box_right.className += " active";
        header_back_mesgs.className += " active-chat";

        this.props.dispatch(selectChannel(channelId));
    }

    render() {
        let channelId = this.props.channelId;
        let itemData = this.props.channels.channelList[channelId];

        // console.log(this.props.channels.ch);
        //console.log(itemData.user);



        if (this.props.channels !== undefined && itemData !== undefined) {
            return (
                this.dataViewForRender(itemData)
            )
        } else {
            return (<div></div>);
        }
    }


    dataViewForRender (itemData) {

       var m =  moment.utc(itemData.lastMessageTime);
       var iscurrentDate = m.isSame(new Date(), "day");
       var lastMessageTime;
       if(iscurrentDate){
           lastMessageTime = m.format('LT');
       } else {
           lastMessageTime = m.format('MM/DD hh:mm');
       }

       let selectedClass = (this.props.channelId === this.props.channels.selectedChannelId) ? 'selected' : '';

        return (
           <div className={"primus-chat-system__box-list-channel-item "+ selectedClass}
               onClick={ () => this.dispatchChannel(this.props.channelId)} >

               <ChannelItemUserInfo userInThisChannel={itemData.user} />
               <div className="line__info-last-mesg-of-channel">
                   <p className="last-mesg">{ itemData.lastMessage }</p>
                   <p className="last-mesg-time">{ lastMessageTime }</p>
               </div>
           </div>
        );

    }
}

const mapStateToProps = (state) => {
     //console.log(state); // state
    // console.log(arguments[1]); // undefined
    return state;

}

export default connect(mapStateToProps)(ChannelItem);
