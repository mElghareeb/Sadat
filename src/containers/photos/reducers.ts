const initPhotos = {
    data: [],
    count: 0,
    isLoading: false,
};
export function photosReducer(
    state = initPhotos,
    action
) {
    switch (action.type) {
        case "RESET_PHOTOS":
            console.log('RESEEEEEET')
            return {
                ...state,
                data: []
            };
        case "SET_PHOTOS":
            return {
                ...state,
                data: action.photos.data,
                count: action.photos.count> 0 ? action.photos.count : state.count,
            };
        case "PHOTOS_LOADING":
            return {
                ...state,
                isLoading: action.Loading,
            };
        default:
            return state;
    }
}
