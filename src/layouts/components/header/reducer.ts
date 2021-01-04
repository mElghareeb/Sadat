const initProfile = {
  id: null,
  name: null,
  phone: null,
  avatar: null,
  created_at: null,
};
export function profileReducer(state = initProfile, action) {
  switch (action.type) {
    case "PROFILE_SUCCESS":
      return {
        ...state,
        id: action.profileData.id,
        name: action.profileData.name,
        phone: action.profileData.phone,
        avatar: action.profileData.avatar,
        created_at: action.profileData.created_at,
      };
    default:
      return state;
  }
}
