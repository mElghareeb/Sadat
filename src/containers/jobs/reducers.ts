const initJobs = {
    data: [],
    count: 0,
    isLoading: false,
};
export function jobsReducer(
    state = initJobs,
    action
) {
    switch (action.type) {
        case "RESET_JOBS":
            console.log('RESEEEEEET')
            return {
                ...state,
                data: initJobs.data,
            };
        case "SET_JOBS":
            console.log('action.jobs.count', action.jobs.count, state.count)
            return {
                ...state,
                data: action.jobs.data,
                count: action.jobs.count> 0 ? action.jobs.count : state.count,
            };
        case "JOBS_LOADING":
            return {
                ...state,
                isLoading: action.Loading,
            };
        default:
            return state;
    }
}
