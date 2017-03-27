/**
 * Created by ThienNhan on 3/26/2017.
 */
import {combineReducers} from 'redux'
import channels from './channels';
import app from './app';
import message from './message';

const messageApp = combineReducers({
    channels, app, message
})

export default messageApp