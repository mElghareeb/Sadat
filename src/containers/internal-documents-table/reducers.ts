const initInternalDocuments = {
  data: [],
  links: {},
  meta: {},
  isLoading: false,
};
export function internalDocumentsReducer(
  state = initInternalDocuments,
  action
) {
  switch (action.type) {
    case "RESET_INTERNAL_DOCUMENTS":
        console.log('RESEEEEEET')
      return {
        state: initInternalDocuments,
      };
    case "SET_INTERNAL_DOCUMENTS":
      return {
        ...state,
        data: action.internalData.data,
        links: action.internalData.links,
        meta: action.internalData.meta,
      };
    case "INTERNAL_DOCUMENTS_LOADING":
        console.log('actionInte', action.Loading)

      return {
        ...state,
        isLoading: action.Loading,
      };
    default:
      return state;
  }
}
