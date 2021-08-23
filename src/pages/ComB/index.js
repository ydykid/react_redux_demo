import React from "react"
import {connect} from "react-redux"

class ComB extends React.Component{
    render() {
        console.log('ComB.props:', this.props)
        return (
            <div>{this.props.count}</div>
        )
    }
}

/**
 * mapStateToProps
 * @param state
 * @returns {*}
 */
const mapStateToProps = state => {
   console.log('ComB.mapStateToProps.state:', state)
    return state
}

export default connect(mapStateToProps)(ComB)
// export default ComB
