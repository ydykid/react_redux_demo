/**
 *  action constructor
 */
const sendAction = () => {
    //return action
    return {
        type: 'send_type',
        value: 'I am a action'
    }
}

module.exports = {
    sendAction
}
