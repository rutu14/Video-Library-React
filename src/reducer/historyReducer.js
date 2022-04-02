const historyVideoReducer = (state, action) => {
    switch (action.type) {
		case "HISTORY_VIDEO_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "HISTORY_VIDEO_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                historyVideoInfo: action.payload
            });
        case "HISTORY_VIDEO_ERROR":
            return (state = {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.payload
            });
		default:
			return state;
        }
}
export { historyVideoReducer }