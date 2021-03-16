import { API_URLS } from "../../shared/servicesURLs";
import axios from "axios";
import { cookies } from '../../shared/helpers';



function resetSchoolNews() {
  return {
    type: "RESET_SCHOOL_NEWS",
  };
}

 function schoolNewsLoading(Loading:boolean) {
  return {
    type: "SCHOOL_NEWS_LOADING",
    Loading: Loading,
  };
}

function setSchoolNews(schoolNews) {
  return {
    type: "SET_SCHOOL_NEWS",
    schoolNews: schoolNews,
  };
}

export function getSchoolNewsAction(page) {
  
  return (dispatch) => {
    dispatch(resetSchoolNews());
    dispatch(schoolNewsLoading(true));

    axios
      .get(API_URLS.NEWSLIST + page)
      .then((res) => {
          console.log('res.data--', res.data)
        dispatch(schoolNewsLoading(false));
        dispatch(setSchoolNews(res.data.data));
      })
      .catch((err) => {
        schoolNewsLoading(false);
        console.log(err);
      });
  };
}

export function deleteNewsAction(newsID){
  
  return (dispatch) => {
    dispatch(schoolNewsLoading(true));

    axios
      .delete(API_URLS.NEWSELETE + '/' + newsID)
      .then((res) => {
        console.log('res.data--', res.data);
        dispatch(getSchoolNewsAction(1));
      })
      .catch((err) => {
        schoolNewsLoading(false);
        console.log(err);
      });
  };
}


export function addNews(title, desc,  photo) {
  
  const token = localStorage.getItem(`accessToken/${window.location.pathname.split('/')[1]}`);
  console.log('token--->', token)
    return (dispatch) => {
      console.log("fooorm", title, photo);
      // dispatch(componentError(false, null));
      // dispatch(componentLoading(true));
      const formData = new FormData();
  
      formData.append("image", photo.raw);
      console.log("formData", formData);
      formData.append('title', title);
      formData.append('description', desc);
      console.log('token--->22', token)
  
      dispatch(schoolNewsLoading(true));
      axios
        .post(API_URLS.NEWSADD,
          formData
          , {
            headers: {
              Accept: "application/json",
              'Content-Type': 'multipart/form-data',
              "x-token": token,
            },
          })
        .then((res) => {
          console.log('REEEES', res)
          dispatch(getSchoolNewsAction(1));
          // dispatch(componentLoading(false));
  
        })
        .catch((err) => {
          dispatch(schoolNewsLoading(false));
          // dispatch(componentLoading(false));
          // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
        });
    };
  }

  
export function editNews(title, desc,  photo, newsId) {
  
  const token = localStorage.getItem(`accessToken/${window.location.pathname.split('/')[1]}`);
  console.log('token--->', token)
    return (dispatch) => {
      console.log("fooorm", title, photo);
      // dispatch(componentError(false, null));
      // dispatch(componentLoading(true));
      const formData = new FormData();
  
      formData.append("image", photo.raw);
      console.log("formData", formData);
      formData.append('title', title);
      formData.append('description', desc);
      console.log('token--->22', token)
  
      dispatch(schoolNewsLoading(true));
      axios
        .post(API_URLS.NEWSEDIT + newsId ,
          formData
          , {
            headers: {
              Accept: "application/json",
              'Content-Type': 'multipart/form-data',
              "x-token": token,
            },
          })
        .then((res) => {
          console.log('REEEES', res)
          dispatch(getSchoolNewsAction(1));
          // dispatch(componentLoading(false));
  
        })
        .catch((err) => {
          dispatch(schoolNewsLoading(false));
          // dispatch(componentLoading(false));
          // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
        });
    };
  }