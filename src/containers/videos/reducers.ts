const initVideos = {
    data: [],
    count: 0,
    isLoading: false,
};
export function videosReducer(
    state = initVideos,
    action
) {
    switch (action.type) {
        case "RESET_VIDEOS":
            console.log('RESEEEEEET')
            return {
                ...state,
                data: []
            };
        case "SET_VIDEOS":
            return {
                ...state,
                data: action.videos.data,
                count: action.videos.count> 0 ? action.videos.count : state.count,
            };
        case "VIDEOS_LOADING":
            return {
                ...state,
                isLoading: action.Loading,
            };
        default:
            return state;
    }
}
