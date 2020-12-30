const PREFIX = `http://157.230.113.8`;

// const PREFIX = `/api/prod-svc/1.0`;
let params = new URLSearchParams(window.location.search);
let origin = params.get('origin');
console.log('origin---', origin, window.location.pathname);
let schoolName = origin ? origin.split('/')[1] : window.location.pathname.split('/')[1]

export const API_URLS = {
  LOGIN:`${PREFIX}/${schoolName}/token`,
  NEWSLIST:`${PREFIX}/${schoolName}/news/page/`,
  NEWSADD:`${PREFIX}/${schoolName}/news/add`,
  NEWSELETE:`${PREFIX}/${schoolName}/news/delete`,
  PHOTOSLIST:`${PREFIX}/${schoolName}/gallery/page/`,
  PHOTOSAdd:`${PREFIX}/${schoolName}/gallery/add`,
  PHOTODELETE:`${PREFIX}/${schoolName}/gallery/delete`,
  VIDEOSEADD:`${PREFIX}/${schoolName}/videos/add`,
  VIDEOSLIST:`${PREFIX}/${schoolName}/videos/page/`,
  VIDEODELETE:`${PREFIX}/${schoolName}/videos/delete`,
  CONTACTSLIST: `${PREFIX}/${schoolName}/contacts/page/`,
  CONTACTDELETE: `${PREFIX}/${schoolName}/contacts/delete`,
  INTERNALJOBADD: `${PREFIX}/${schoolName}/job/position`,
  JOBSLIST: `${PREFIX}/${schoolName}/jobs/page/`,
  JOBDELETE: `${PREFIX}/${schoolName}/jobs/delete`,
  DOWNLOADCV: `${PREFIX}/${schoolName}/jobs`,
  INTERNALJOBS: `${PREFIX}/${schoolName}/job/positions`,
  INTERNALJOBDELETE: `${PREFIX}/${schoolName}/positions/delete`,
};
