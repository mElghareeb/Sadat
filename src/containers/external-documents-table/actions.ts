import { API_URLS } from "../../shared/servicesURLs";
import axios from "axios";

function resetExternalDocuments() {
  return {
    type: "RESET_EXTERNAL_DOCUMENTS",
  };
}

 function ExternalDocumentLoading(Loading:boolean) {
  return {
    type: "EXTERNAL_DOCUMENTS_LOADING",
    Loading: Loading,
  };
}

function setExternalDocuments(ExternalDocuments) {
  return {
    type: "SET_EXTERNAL_DOCUMENTS",
    ExternalData: ExternalDocuments,
  };
}

export function getExternalDocumentsAction() {
  
  return (dispatch) => {
    dispatch(resetExternalDocuments());
    dispatch(ExternalDocumentLoading(true));

    axios
      .get(API_URLS.MY_EXTERNAL_DOCUMENTS)
      .then((res) => {
        dispatch(ExternalDocumentLoading(false));
        dispatch(setExternalDocuments(res.data));
      })
      .catch((err) => {
        ExternalDocumentLoading(false);
        console.log(err);
      });
  };
}
