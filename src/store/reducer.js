import { combineReducers } from "redux-immutable";
import { reducer as HeaderReducer } from '../common/header/store'
import * as Home  from '../pages/home/store'

export default combineReducers({
    'header': HeaderReducer,
    'Home': Home.reducer
})