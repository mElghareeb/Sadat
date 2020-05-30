// General Alert Modal
const initModalData={
    showModal: false,
    modalType: null,
    ModalTitle: null,
    ModalContent: null
}


export function generalModal(state = initModalData, action) {
    switch (action.type) {
        case 'HANDLE_GENERAL_MODAL':
            return{
                ...state,
                showModal: action.show,
                modalType: action.modalType,
                modalTitle: action.title,
                modalContent: action.content
            }
        default:
            return state;
    }

}