/**
 * reducer handle action
 */
const initState = {
    count: 5
}
exports.reducer = (state = initState, action) => {
    switch (action.type){
        case 'add_action':
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}
// const initState = {
//     value: 'default'
// }
// const reducer = (state = initState, action) => {
//     console.log('reducer:', state, action)
//     switch (action.type){
//         case 'send_type':
//             return Object.assign({}, state, action)
//         default:
//             return state
//     }
// }
//
// module.exports = {
//     reducer
// }
