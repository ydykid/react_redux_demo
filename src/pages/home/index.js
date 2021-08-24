import React from 'react'
// import store
import store from "../../store"
// import action constructor
import {sendAction} from '../../action'
import {Route} from "react-router-dom";
import Com1 from "../com1";
import Com2 from "../com2";

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
                <div>home</div>
                <Route path="/home/com1" component={Com1}/>
                <Route path="/home/com2" component={Com2}/>
            </>
        )
    }
}
