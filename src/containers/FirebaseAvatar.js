import Avatar from '../components/Avatar';
import { connect } from 'react-redux'
const defaultUrl = 'http://designstacks.net/content_images/AdobePhotoshop/TextEffects/sky/45.gif';

const mapStateToProps = (state, ownProps) => ({
  url: (state.users.userList[ownProps.userId] != undefined ? state.users.userList[ownProps.userId].avatar : defaultUrl)
})

const FirebaseAvatar = connect(
  mapStateToProps
)(Avatar)

export default FirebaseAvatar;
