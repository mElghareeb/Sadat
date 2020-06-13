import { API_URLS } from "../../shared/servicesURLs";
import axios from "axios";

function resetInternalDocuments() {
  return {
    type: "RESET_INTERNAL_DOCUMENTS",
  };
}

 function InternalDocumentLoading(Loading:boolean) {
  return {
    type: "INTERNAL_DOCUMENTS_LOADING",
    Loading: Loading,
  };
}

function setInternalDocuments(InternalDocuments) {
  return {
    type: "SET_INTERNAL_DOCUMENTS",
    internalData: InternalDocuments,
  };
}

export function getInternalDocumentsAction() {
  
  return (dispatch) => {
    dispatch(resetInternalDocuments());
    dispatch(InternalDocumentLoading(true));

    axios
      .get(API_URLS.MY_INTERNAL_DOCUMENTS)
      .then((res) => {
        dispatch(InternalDocumentLoading(false));
        console.log('actionInternal', res.data)
        dispatch(setInternalDocuments(res.data));
      })
      .catch((err) => {
        InternalDocumentLoading(false);
        console.log(err);
      });
  };
}
