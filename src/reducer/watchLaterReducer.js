const watchLaterReducer = (state, action) => {
    switch (action.type) {
		case "WATCH_LATER_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "WATCH_LATER_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                watchLaterInfo: action.payload
            });
        case "WATCH_LATER_ERROR":
            return (state = {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.payload
            });
        case "WATCH_LATER_DELETE_ALL":
            return (state = {
                ...state,
                watchLaterInfo: []
            });
		default:
			return state;
        }
}
export { watchLaterReducer }