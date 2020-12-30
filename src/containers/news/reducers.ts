const initSchoolNews = {
    data: [],
    count: 0,
    isLoading: false,
};
export function schoolNewsReducer(
    state = initSchoolNews,
    action
) {
    switch (action.type) {
        case "RESET_SCHOOL_NEWS":
            console.log('RESEEEEEET')
            return {
                ...state,
                data: [],
            };
        case "SET_SCHOOL_NEWS":
            return {
                ...state,
                data: action.schoolNews.data,
                count: action.schoolNews.count> 0 ? action.schoolNews.count : state.count,
            };
        case "SCHOOL_NEWS_LOADING":
            return {
                ...state,
                isLoading: action.Loading,
            };
        default:
            return state;
    }
}
