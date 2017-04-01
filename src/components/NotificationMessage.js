import React from 'react';
import {connect} from 'react-redux'

import {getTotalNotification} from '../actions/notificationMessage'

class NotificationMessage extends React.Component {

    componentWillMount() {
        this.dispatchChannel(67)
    }

    render() {
        return (
            <div>
                <img src="/assets/img/ico-message-header.png" alt="" width="25" />
                {this.props.notificationMessage}
            </div>
        );
    }

    dispatchChannel(userId) {
        this.props.dispatch(getTotalNotification(userId));
    }

}



function mapStateToProps(state) {
    //console.log(state);
    return state.notificationMessage
}

export default connect(mapStateToProps)(NotificationMessage)
