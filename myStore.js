import { createStore } from "redux";

// Write a function to return the intial state and the root reducer
import rootReducer from "../reducers";
// Export the function
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState
    )
}
