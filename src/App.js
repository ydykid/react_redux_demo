import React from 'react'
import './App.css'

import {Provider} from "react-redux"
import store from './store'

import {BrowserRouter as Router} from 'react-router-dom'
// import {HashRouter as Router} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'
import Home from "./pages/home";
import Count from "./pages/count";
import Com1 from './pages/com1'
import Com2 from './pages/com2'

const App = (props) => {
    console.log('App.props:', props)
    // const handleBack = () => {
    //     props.history.go(-1)
    // }
    // const handleHome = () => {
    //     props.history.push('/')
    // }
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Route path="/home*" component={Home}/>
                    <h1>App</h1>
                    <Link to="/">App</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/count">Count</Link>
                    <Link to="/com1">Com1</Link>
                    <Link to="/com1/a">Com2</Link>
                    {/* path="/", default route*/}
                    <Route exact path="/" component={Home}/>
                    {/*<Route path="/" component={Home}/>*/}
                    <Route path="/count" component={Count}/>
                    <Route path="/home/" component={Count}/>
                    {/*<button onClick={handleHome}>go home</button>*/}
                    {/*<button onClick={handleBack}>go back</button>*/}
                </div>
            </Router>
        </Provider>
    )
}

export default App

// subscribe
// import Home from './pages/home'
//
// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }
//
// export default App;
