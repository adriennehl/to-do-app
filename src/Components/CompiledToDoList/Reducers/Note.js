const INITIAL_STATE = {
    noteList: []
}

const applyNoteList = (state, action) => ({
    ...state,
    noteList: action.noteList
})

function NoteReducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case 'NOTE_LIST':
            return applyNoteList(state, action);
        default:
            return state
    }
}

export default NoteReducer