/**
 * Created by ThienNhan on 3/27/2017.
 */
const message = (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGE' :
            return Object.assign({}, state, {
                messObj: action.messObj
            });

        default:
            return Object.assign({}, state)
    }

}

export default message;