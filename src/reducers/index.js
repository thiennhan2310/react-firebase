/**
 * Created by ThienNhan on 3/26/2017.
 */
import {combineReducers} from 'redux'
import channels from './channels';
import users from './users'
import app from './app';
const messageApp = combineReducers({
    app,
    channels,
    users
})

export default messageApp
