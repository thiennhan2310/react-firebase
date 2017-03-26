export const selectChannel = (channelId) => {
    return {
        type: 'SELECT_CHANNEL',
        channelId: channelId
    }
}
