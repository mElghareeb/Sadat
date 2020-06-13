import { API_URLS } from "../../shared/servicesURLs";
import axios from "axios";

function foldersLoading(Loading: boolean) {
  return {
    type: "FOLDERS_LOADING",
    Loading: Loading,
  };
}

function innerFoldersLoading(Loading: boolean) {
  return {
    type: "INNER_FOLDERS_LOADING",
    innerLoading: Loading,
  };
}

function setFoldersData(folders) {
  return {
    type: "SET_FOLDERS",
    folders: folders,
  };
}

function addNewFolder(newFolder) {
    return {
      type: "Add_NEW_FOLDER",
      newFolder: newFolder,
    };
  }

export function getFoldersAction() {
  return (dispatch) => {
    dispatch(foldersLoading(true));

    axios
      .get(API_URLS.GET_FOLDERS)
      .then((res) => {
        dispatch(foldersLoading(false));
        dispatch(setFoldersData(res.data));
      })
      .catch((err) => {
        foldersLoading(false);
        console.log(err);
      });
  };
}

export function addFoldersAction(folderName) {
  return (dispatch) => {
    dispatch(innerFoldersLoading(true));

    axios
      .post(API_URLS.GET_FOLDERS, {
        title: folderName,
      })
      .then((res) => {
        dispatch(innerFoldersLoading(false));
        dispatch(addNewFolder(res.data.data));
      })
      .catch((err) => {
        dispatch(innerFoldersLoading(false));
        console.log(err);
      });
  };
}
