import { push } from "react-router-redux";
import { cookies } from "../../shared/helpers";
import { API_URLS } from "../../shared/servicesURLs";
import axios from "axios";
// import { componentLoading, componentError } from '../../shared/actions';

export function authenticateUserAction(username, password) {
  return (dispatch) => {
    console.log("fooorm");
    // dispatch(componentError(false, null));
    // dispatch(componentLoading(true));
    axios
      .post(API_URLS.LOGIN, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log('REEEES', origin)
        axios.defaults.headers.common["x-token"] =
         res.data.access;
        // dispatch(componentLoading(false));
        window["__insp"] && window["__insp"].push(["identify", username]);
        let params = new URLSearchParams(window.location.search);
        let origin = params.get("origin");
        console.log(origin.split('/'))
        localStorage.setItem(`accessToken/${origin.split('/')[1]}`,  res.data.data.token);
        window.location.href = origin ? origin : "/";

      })
      .catch((err) => {
        // dispatch(componentLoading(false));
        // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
      });
  };
}
