const initInternalJobs = {
    data: [],
    count: 0,
    isLoading: false,
};
export function internaljobsReducer(
    state = initInternalJobs,
    action
) {
    switch (action.type) {
        case "RESET_INTERNALJOBS":
            console.log('RESEEEEEET')
            return {
                state: initInternalJobs,
            };
        case "SET_INTERNALJOBS":
            return {
                ...state,
                data: action.internalJobs.data,
                count: action.internalJobs.count,
            };
        case "INTERNALJOBS_LOADING":
            return {
                ...state,
                isLoading: action.Loading,
            };
        default:
            return state;
    }
}
