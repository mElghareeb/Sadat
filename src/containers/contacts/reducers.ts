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
                state: initContacts,
            };
        case "SET_CONTACTS":
            return {
                ...state,
                data: action.contacts.data,
                count: action.contacts.count,
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
