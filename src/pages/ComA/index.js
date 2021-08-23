import React from 'react'

import {connect} from "react-redux"

class ComA extends React.Component{
    handleClick = () => {
        this.props.sendAction()
    }
    render() {
        return (
            <button onClick={this.handleClick}>+</button>
        )
    }
}

/**
 * mapDispatchToProps
 * @param dispatch
 * @returns {{sendAction: sendAction}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'add_action'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ComA)
// export default ComA
