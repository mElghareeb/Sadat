const initExternalDocuments = {
    data: [],
    links: {},
    meta: {},
    isLoading: false,
  };
  export function externalDocumentsReducer(
    state = initExternalDocuments,
    action
  ) {
    switch (action.type) {
      case "RESET_EXTERNAL_DOCUMENTS":
          console.log('RESEEEEEET')
        return {
          state: initExternalDocuments,
        };
      case "SET_EXTERNAL_DOCUMENTS":
        return {
          ...state,
          data: action.ExternalData.data,
          links: action.ExternalData.links,
          meta: action.ExternalData.meta,
        };
      case "EXTERNAL_DOCUMENTS_LOADING":
        return {
          ...state,
          isLoading: action.Loading,
        };
      default:
        return state;
    }
  }
  