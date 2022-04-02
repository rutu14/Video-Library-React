const likedVideoReducer = (state, action) => {
    const idPresentIndex = (id) => state.likeStatus && state.likeStatus.findIndex( videoPresent => videoPresent.id === id);

    switch (action.type) {
		case "LIKED_VIDEO_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "LIKED_VIDEO_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                likedVideoInfo: action.payload
            });
        case "LIKED_VIDEO_ADD":
            const matchFoundIndex = idPresentIndex( action.payload )
            return (state = {
                ...state,
                loader: false,
                likeStatus: matchFoundIndex === -1
                            ? [...state.likeStatus,{ id: action.payload, status: true }]
                            : matchFoundIndex !== -1 && state.likeStatus.map( (liked) => liked.id === action.payload
                                                                ? { ...liked, status: true} 
                                                                : liked)
            });
        case "LIKED_VIDEO_REMOVE":
			return (state = {
                ...state,
                loader: false,
                likeStatus: state.likeStatus.map( (liked) => liked.id === action.payload
                                                                ? { ...liked, status: false} 
                                                                : liked)
            });
        case "LIKED_VIDEO_ERROR":
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
export { likedVideoReducer }