const initFolders = {
  data: [],
  links: {},
  meta: {},
  isLoading: false,
  innerLoading: false,
};
export function foldersReducer(state = initFolders, action) {
  switch (action.type) {
    case "SET_FOLDERS":
      return {
        ...state,
        data: action.folders.data,
        links: action.folders.links,
        meta: action.folders.meta,
      };
    case "Add_NEW_FOLDER":
      return {
        ...state,
        data: [...state.data, action.newFolder]
      };
    case "FOLDERS_LOADING":
      return {
        ...state,
        isLoading: action.Loading,
      };
    case "INNER_FOLDERS_LOADING":
      return {
        ...state,
        innerLoading: action.innerLoading,
      };

    default:
      return state;
  }
}
