const playlistReducer = (state, action) => {
    switch (action.type) {
		case "PLAYLIST_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "PLAYLIST_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                playlistInfo: action.payload
            });
        case "PLAYLIST_VIDEO_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                playlistVideoInfo: action.payload
            });
        case "PLAYLIST_ERROR":
            return (state = {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.payload
            });
        case "PLAYLIST_ERROR_RESET":
            return (state = {
                ...state,
                loader: false,
                error: false,
                errorMsg: " "
            });
		default:
			return state;
        }
}
export { playlistReducer }