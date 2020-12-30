import { API_URLS } from "../../shared/servicesURLs";
import axios from 'axios';
import { cookies } from '../../shared/helpers';



function resetPhotos() {
  return {
    type: "RESET_PHOTOS",
  };
}

function photosLoading(Loading: boolean) {
  return {
    type: "PHOTOS_LOADING",
    Loading: Loading,
  };
}

function setPhotos(photos) {
  return {
    type: "SET_PHOTOS",
    photos: photos,
  };
}

export function getPhotosAction(page) {

  return (dispatch) => {
    dispatch(resetPhotos());
    dispatch(photosLoading(true));

    axios
      .get(API_URLS.PHOTOSLIST + page)
      .then((res) => {
        console.log('res.data--', res.data)
        dispatch(photosLoading(false));
        dispatch(setPhotos(res.data.data));
      })
      .catch((err) => {
        photosLoading(false);
        console.log(err);
      });
  };
}

export function deletePhotoAction(photoID) {

  return (dispatch) => {
    dispatch(photosLoading(true));

    axios
      .delete(API_URLS.PHOTODELETE + '/' + photoID)
      .then((res) => {
        console.log('res.data--', res.data);
        dispatch(getPhotosAction(1));
      })
      .catch((err) => {
        photosLoading(false);
        console.log(err);
      });
  };
}

export function addPhoto(title, photo) {
  const token = localStorage.getItem(`accessToken/${window.location.pathname.split('/')[1]}`);
console.log('token--->', token, `accessToken/${window.location.pathname.split('/')[1]}`)
  return (dispatch) => {
    console.log("fooorm", title, photo);
    // dispatch(componentError(false, null));
    // dispatch(componentLoading(true));
    const formData = new FormData();

    formData.append("image", photo.raw);
    console.log("formData", formData);
    formData.append('title', title);
    console.log('token--->22', token)

    dispatch(photosLoading(true));
    axios
      .post(API_URLS.PHOTOSAdd,
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
        dispatch(getPhotosAction(1));
        // dispatch(componentLoading(false));

      })
      .catch((err) => {
        dispatch(photosLoading(false));
        // dispatch(componentLoading(false));
        // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
      });
  };
}
