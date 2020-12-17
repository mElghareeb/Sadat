import { API_URLS } from "../../shared/servicesURLs";
import axios from 'axios';
import { cookies } from '../../shared/helpers';

const token = cookies.get('accessToken')
console.log('token--->', token)

function resetJobs() {
  return {
    type: "RESET_JOBS",
  };
}

function jobsLoading(Loading: boolean) {
  return {
    type: "JOBS_LOADING",
    Loading: Loading,
  };
}

function setJobs(jobs) {
  return {
    type: "SET_JOBS",
    jobs: jobs,
  };
}

export function getJobsAction() {

  return (dispatch) => {
    dispatch(resetJobs());
    dispatch(jobsLoading(true));

    axios
      .get(API_URLS.JOBSLIST)
      .then((res) => {
        console.log('res.data--', res.data)
        dispatch(jobsLoading(false));
        dispatch(setJobs(res.data.data));
      })
      .catch((err) => {
        jobsLoading(false);
        console.log(err);
      });
  };
}

export function deleteJobAction(jobsID) {

  return (dispatch) => {
    dispatch(jobsLoading(true));

    axios
      .delete(API_URLS.JOBDELETE + '/' + jobsID)
      .then((res) => {
        console.log('res.data--', res.data);
        dispatch(getJobsAction());
      })
      .catch((err) => {
        jobsLoading(false);
        console.log(err);
      });
  };
}

// export function addJob(title, jobUrl) {
//   return (dispatch) => {
  
//     // dispatch(componentError(false, null));
//     // dispatch(componentLoading(true));


//     dispatch(jobsLoading(true));
//     axios
//       .post(API_URLS.JOBSADD,
//         {title:title,
//         url:jobUrl}
//         , {
//           headers: {
//             Accept: "application/json",
//             'Content-Type': 'multipart/form-data',
//             "x-token": token,
//           },
//         })
//       .then((res) => {
//         console.log('REEEES', res)
//         dispatch(getJobsAction());
//         // dispatch(componentLoading(false));

//       })
//       .catch((err) => {
//         dispatch(jobsLoading(false));
//         // dispatch(componentLoading(false));
//         // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
//       });
//   };
// }
