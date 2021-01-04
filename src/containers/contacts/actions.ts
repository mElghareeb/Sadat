import { API_URLS } from "../../shared/servicesURLs";
import axios from 'axios';
import { cookies } from '../../shared/helpers';


function resetContacts() {
  return {
    type: "RESET_CONTACTS",
  };
}

function contactsLoading(Loading: boolean) {
  return {
    type: "CONTACTS_LOADING",
    Loading: Loading,
  };
}

function setContacts(contacts) {
  return {
    type: "SET_CONTACTS",
    contacts: contacts,
  };
}

export function getContactsAction(page) {

  return (dispatch) => {
    dispatch(resetContacts());
    dispatch(contactsLoading(true));

    axios
      .get(API_URLS.CONTACTSLIST + page)
      .then((res) => {
        console.log('res.data--', res.data)
        dispatch(contactsLoading(false));
        dispatch(setContacts(res.data.data));
      })
      .catch((err) => {
        contactsLoading(false);
        console.log(err);
      });
  };
}

export function deleteContactAction(contactsID) {

  return (dispatch) => {
    dispatch(contactsLoading(true));

    axios
      .delete(API_URLS.CONTACTDELETE + '/' + contactsID)
      .then((res) => {
        console.log('res.data--', res.data);
        dispatch(getContactsAction(1));
      })
      .catch((err) => {
        contactsLoading(false);
        console.log(err);
      });
  };
}

// export function addContact(title, contactUrl) {
//   return (dispatch) => {
  
//     // dispatch(componentError(false, null));
//     // dispatch(componentLoading(true));


//     dispatch(contactsLoading(true));
//     axios
//       .post(API_URLS.CONTACTSEADD,
//         {title:title,
//         url:contactUrl}
//         , {
//           headers: {
//             Accept: "application/json",
//             'Content-Type': 'multipart/form-data',
//             "x-token": token,
//           },
//         })
//       .then((res) => {
//         console.log('REEEES', res)
//         dispatch(getContactsAction());
//         // dispatch(componentLoading(false));

//       })
//       .catch((err) => {
//         dispatch(contactsLoading(false));
//         // dispatch(componentLoading(false));
//         // dispatch(componentError(true, err.response ? err.response.data.errorCode : ''));
//       });
//   };
// }
