import { API_URLS } from "../../../shared/servicesURLs";
import axios from "axios";

export function setProfile(profile) {
  return {
    type: "PROFILE_SUCCESS",
    profileData: profile,
  };
}

export function getProfileAction() {
  return (dispatch) => {
    axios
      .post(API_URLS.USER.PROFILE)
      .then((res) => {
        dispatch(setProfile(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
