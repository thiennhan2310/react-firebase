/**
 * Created by ThienNhan on 3/26/2017.
 */
import {combineReducers} from 'redux'
import channels from './channels';

const messageApp = combineReducers({
    channels
})

export default messageApp