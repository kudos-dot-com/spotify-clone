const initialState = {
    user: null,
    album: null,
    album_tracks: [],
}

export const reducer = (state,action) => {
    switch (action.type) {
        case "SET_USER":
            return {...state,user: action.user}
            break;
        case "SET_ALBUM":
            return {...state,album: action.album}
            break;
        case "SET_TRACKS":
            return {...state,album_tracks: action.tracks}
            break
        default:
            return state;
            break;
    }
}

export default initialState;