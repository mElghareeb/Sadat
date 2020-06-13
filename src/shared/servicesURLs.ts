const PREFIX = `https://edms.nashr.link/api/v1`;

// const PREFIX = `/api/prod-svc/1.0`;

export const API_URLS = {
  trips: `${PREFIX}/trip`,
  USER: {
    LOGIN: `${PREFIX}/auth/login`,
    PROFILE: `${PREFIX}/auth/me`,
  },
  MY_INTERNAL_DOCUMENTS: `${PREFIX}/document?type=internal`,
  MY_EXTERNAL_DOCUMENTS: `${PREFIX}/document?type=external`,
  GET_FOLDERS: `${PREFIX}/directory`,
  UPLOAD_FILE: `${PREFIX}/upload`,
};
