import React from 'react'
// import store
import store from "../../store"
// import action constructor
import {sendAction} from '../../action'

export default class Home extends React.Component{
    handleClick = () => {
        const action = sendAction()
        // send action, use store
        store.dispatch(action)
    }
    componentDidMount() {
        store.subscribe(() => {
            console.log('subscribe:', store.getState())
            this.setState({})
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>点我点我,发送一个action</button>
                <div>{store.getState().value}</div>
            </>
        )
    }
}
