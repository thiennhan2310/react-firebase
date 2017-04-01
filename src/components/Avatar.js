/**
 * Created by ITTEAM on 3/30/2017.
 */

 import React, { PropTypes } from 'react'

const Avatar = ({ url, class_name }) => {
    return <div style={{background: "url(" + url + ")"}} className={class_name}></div>

}

Avatar.propTypes = {
  // url: PropTypes.string.isRequired,
  class_name: PropTypes.string.isRequired
}

export default Avatar;
// import React from 'react';
// import {connect} from 'react-redux'


// class Avatar extends React.Component {
//
//     render() {
//         <div style={{background: "url(" + this.props.url + ")"}}
//              className={this.props.class_name}></div>

        // if (this.props.userList[this.props.userId] != undefined) {
        //     return (
        //         <div style={{background: "url(" + this.props.userList[this.props.userId]['avatar'] + ")"}}
        //              className={this.props.class_name}></div>
        //     )
        // } else {
        //     return (
        //         <div></div>
        //     )
        // }

    // }
// }

// function mapStateToProp(state) {
//     return state.users;
// }

// export default connect(mapStateToProp)(Avatar);
// export default connect()(Avatar);
