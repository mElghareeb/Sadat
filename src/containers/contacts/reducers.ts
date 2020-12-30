const initContacts = {
    data: [],
    count: 0,
    isLoading: false,
};
export function contactsReducer(
    state = initContacts,
    action
) {
    switch (action.type) {
        case "RESET_CONTACTS":
            console.log('RESEEEEEET')
            return {
                ...state,
                data: [],
            };
        case "SET_CONTACTS":
            return {
                ...state,
                data: action.contacts.data,
                count: action.contacts.count> 0 ? action.contacts.count : state.count,
            };
        case "CONTACTS_LOADING":
            return {
                ...state,
                isLoading: action.Loading,
            };
        default:
            return state;
    }
}
