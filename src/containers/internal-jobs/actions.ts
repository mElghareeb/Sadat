import { API_URLS } from "../../shared/servicesURLs";
import axios from 'axios';
import { cookies } from '../../shared/helpers';

const token = cookies.get('accessToken')
console.log('token--->', token)

function resetInternalJobs() {
  return {
    type: "RESET_INTERNALJOBS",
  };
}

function internalJobsLoading(Loading: boolean) {
  return {
    type: "INTERNALJOBS_LOADING",
    Loading: Loading,
  };
}

function setInternalJobs(internalJobs) {
  console.log('SET_INTERNALJOBS', internalJobs)
  return {
    type: "SET_INTERNALJOBS",
    internalJobs: internalJobs,
  };
}

export function getInternalJobsAction() {

  return (dispatch) => {
    dispatch(resetInternalJobs());
    dispatch(internalJobsLoading(true));

    axios
      .get(API_URLS.INTERNALJOBS)
      .then((res) => {
        console.log('res.data--', res.data)
        dispatch(internalJobsLoading(false));
        dispatch(setInternalJobs(res.data.data));
      })
      .catch((err) => {
        internalJobsLoading(false);
        console.log(err);
      });
  };
}

export function deleteInternalJobAction(internalJobsID) {
console.log('deleteInternalJobAction')
  // return (dispatch) => {
  //   dispatch(internalJobsLoading(true));

  //   axios
  //     .delete(API_URLS.INTERNALJOBDELETE + '/' + internalJobsID)
  //     .then((res) => {
  //       console.log('res.data--', res.data);
  //       dispatch(getInternalJobsAction());
  //     })
  //     .catch((err) => {
  //       internalJobsLoading(false);
  //       console.log(err);
  //     });
  // };
}

export function addInternalJob(name) {
  return (dispatch) => {
  
    // dispatch(componentError(false, null));
    // dispatch(componentLoading(true));


    dispatch(internalJobsLoading(true));
    axios
      .post(API_URLS.INTERNALJOBADD,
        {name:name})
      .then((res) => {
        console.log('REEEES', res)
        dispatch(getInternalJobsAction());
        // dispatch(componentLoading(false));

      })
      .catch((err) => {
        dispatch(internalJobsLoading(false));
        // dispatch(componentLoading(false));
        // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
      });
  };
}
