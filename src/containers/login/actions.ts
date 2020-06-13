import { push } from "react-router-redux";
import { cookies } from "../../shared/helpers";
import { API_URLS } from "../../shared/servicesURLs";
import axios from "axios";
// import { componentLoading, componentError } from '../../shared/actions';

export function authenticateUserAction(email, password) {
  return (dispatch) => {
    console.log("fooorm");
    // dispatch(componentError(false, null));
    // dispatch(componentLoading(true));
    axios
      .post(API_URLS.USER.LOGIN, {
        email: email,
        password: password,
      })
      .then((res) => {
        cookies.set("accessToken", res.data.access_token, { path: "/" });
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.access_token;
        // dispatch(componentLoading(false));
        window["__insp"] && window["__insp"].push(["identify", email]);
        let params = new URLSearchParams(window.location.search);
        let origin = params.get("origin");
        window.location.href = origin ? origin : "/";
      })
      .catch((err) => {
        // dispatch(componentLoading(false));
        // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
      });
  };
}
