/**
 * Created by ThienNhan on 3/26/2017.
 */
import {combineReducers} from 'redux'
import channels from './channels';
import users from './users'
import app from './app';
import notificationMessage from './notificationMessage';

const messageApp = combineReducers({
    app,
    channels,
    users,
    notificationMessage,
})

export default messageApp
