
const initialiState = {
 'notificationMessage':0
};

const notificationMessage = (state = initialiState, action) => {
    switch (action.type) {

        case 'SET_NOTIFICATION':
            return Object.assign({}, state, {
                'notificationMessage': action.totalMessageUnRead
            });
        default:
            return Object.assign({}, state)
    }

}

export default notificationMessage;
