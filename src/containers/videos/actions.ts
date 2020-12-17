import { API_URLS } from "../../shared/servicesURLs";
import axios from 'axios';
import { cookies } from '../../shared/helpers';

const token = cookies.get('accessToken')
console.log('token--->', token)

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

export function getVideosAction() {

  return (dispatch) => {
    dispatch(resetVideos());
    dispatch(videosLoading(true));

    axios
      .get(API_URLS.VIDEOSLIST)
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
        dispatch(getVideosAction());
      })
      .catch((err) => {
        videosLoading(false);
        console.log(err);
      });
  };
}

export function addVideo(title, videoUrl) {
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
        dispatch(getVideosAction());
        // dispatch(componentLoading(false));

      })
      .catch((err) => {
        dispatch(videosLoading(false));
        // dispatch(componentLoading(false));
        // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
      });
  };
}
