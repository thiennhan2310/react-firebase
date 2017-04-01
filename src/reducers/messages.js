/**
 * Created by ThienNhan on 3/26/2017.
 */
import {SET_MESSAGE} from '../actions/messages';

const initialState = {
    'messages': {},
};

const channels = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE: {
            return Object.assign({}, state, {
                messages: action.messages
            });

        }
        default:
            return Object.assign({}, state);
    }

}

export default channels;
