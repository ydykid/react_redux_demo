import React from 'react'
import './App.css'

import {Provider} from "react-redux"
import store from './store'

import {BrowserRouter as Router} from 'react-router-dom'
// import {HashRouter as Router} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'
import Home from "./pages/home";
import Count from "./pages/count";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Route path="/home" component={Home}/>
                    <h1>App</h1>
                    <Link to="/">App</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/count">Count</Link>
                    <Route path="/count" component={Count}/>
                    <Route path="/home" component={Count}/>
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
