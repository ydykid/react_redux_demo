import React from 'react'
import './App.css'

import {Provider} from "react-redux"
import store from './store'

import ComA from './pages/ComA'
import ComB from './pages/ComB'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ComA/>
                <ComB/>
            </div>
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
