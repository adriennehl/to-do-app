import { combineReducers} from "redux";
import NoteReducer from "./Note";
import UserReducer from "./User"
import userReducer from "./User";
import sessionReducer from "./Session";

const rootReducer = combineReducers({
    noteState: NoteReducer,
    userState: userReducer,
    sessionState: sessionReducer
});

export default rootReducer