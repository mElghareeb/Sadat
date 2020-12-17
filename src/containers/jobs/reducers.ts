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
                state: initJobs,
            };
        case "SET_JOBS":
            return {
                ...state,
                data: action.jobs.data,
                count: action.jobs.count,
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
