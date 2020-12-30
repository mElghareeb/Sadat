import { API_URLS } from "../../shared/servicesURLs";
import axios from 'axios';
import { cookies } from '../../shared/helpers';



function resetVideos() {
  return {
    type: "RESET_VIDEOS",
  };
}

function videosLoading(Loading: boolean) {
  return {
    type: "VIDEOS_LOADING",
    Loading: Loading,
  };
}

function setVideos(videos) {
  return {
    type: "SET_VIDEOS",
    videos: videos,
  };
}

export function getVideosAction(page) {

  return (dispatch) => {
    dispatch(resetVideos());
    dispatch(videosLoading(true));

    axios
      .get(API_URLS.VIDEOSLIST + page)
      .then((res) => {
        console.log('res.data--', res.data)
        dispatch(videosLoading(false));
        dispatch(setVideos(res.data.data));
      })
      .catch((err) => {
        videosLoading(false);
        console.log(err);
      });
  };
}

export function deleteVideoAction(videosID) {

  return (dispatch) => {
    dispatch(videosLoading(true));

    axios
      .delete(API_URLS.VIDEODELETE + '/' + videosID)
      .then((res) => {
        console.log('res.data--', res.data);
        dispatch(getVideosAction(1));
      })
      .catch((err) => {
        videosLoading(false);
        console.log(err);
      });
  };
}

export function addVideo(title, videoUrl) {
  const token = localStorage.getItem(`accessToken/${window.location.pathname.split('/')[1]}`);
console.log('token--->', token)
  return (dispatch) => {
  
    // dispatch(componentError(false, null));
    // dispatch(componentLoading(true));


    dispatch(videosLoading(true));
    axios
      .post(API_URLS.VIDEOSEADD,
        {title:title,
        url:videoUrl}
        , {
          headers: {
            Accept: "application/json",
            'Content-Type': 'multipart/form-data',
            "x-token": token,
          },
        })
      .then((res) => {
        console.log('REEEES', res)
        dispatch(getVideosAction(1));
        // dispatch(componentLoading(false));

      })
      .catch((err) => {
        dispatch(videosLoading(false));
        // dispatch(componentLoading(false));
        // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
      });
  };
}
