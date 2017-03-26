/**
 * Created by ThienNhan on 3/26/2017.
 */
const channels = (state = [], action) => {
    switch (action.type) {

        default:
            return Object.assign({}, state, {
                channelId: action.channelId
            })
    }

}

export default channels;
