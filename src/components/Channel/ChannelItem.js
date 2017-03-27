import React from 'react';
import {selectChannel} from '../../actions'
import {connect} from 'react-redux'

class ChannelItem extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchChannel = this.dispatchChannel.bind(this);
    }

    dispatchChannel(channelId) {
        console.log(channelId);
        this.props.dispatch(selectChannel(channelId));
    }

    render() {
        return (
            <div className="primus-chat-system__box-list-channel-item" onClick={ () => this.dispatchChannel(this.props.channelId)}>
                <div className="avatar-of-channel" style={{background: "url(http://genknews.genkcdn.vn/k:thumb_w/640/2016/deadeye-1452132823255/lien-minh-huyen-thoai-xuat-hien-video-day-bi-an-up-up-mo-mo-khuon-mat-that-cua-deadeye.png)"}}></div>
                <div className="line__info-channel">
                    <i className="status-of-channel fa fa-circle online" aria-hidden="true"></i>
                    <h5 className="name-of-channel">Monica Keihl</h5>
                    <span className="number-of-channel-mesg badge">2</span>
                </div>
                <div className="line__info-last-mesg-of-channel">
                    <p className="last-mesg">It's fine. Let's schedule the interview</p>
                    <p className="last-mesg-time">14:10</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ChannelItem);

