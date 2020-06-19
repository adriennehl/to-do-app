import { combineReducers} from "redux";
import NoteReducer from "./Note";

const rootReducer = combineReducers({
    noteState: NoteReducer
});

export default rootReducer