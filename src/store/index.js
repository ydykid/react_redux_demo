import {createStore} from "redux"

// import reducer
import {reducer} from '../reducer'
// construct store
const store = createStore(reducer)

export default store
