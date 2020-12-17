const PREFIX = `http://157.230.113.8`;

// const PREFIX = `/api/prod-svc/1.0`;

export const API_URLS = {
  LOGIN:`${PREFIX}/mostakbal/token`,
  NEWSLIST:`${PREFIX}/mostakbal/news/page/1`,
  NEWSELETE:`${PREFIX}/mostakbal/news/delete`,
  PHOTOSLIST:`${PREFIX}/mostakbal/gallery/page/1`,
  PHOTODELETE:`${PREFIX}/mostakbal/gallery/delete`,
  VIDEOSEADD:`${PREFIX}/mostakbal/videos/add`,
  VIDEOSLIST:`${PREFIX}/mostakbal/videos/page/1`,
  VIDEODELETE:`${PREFIX}/mostakbal/videos/delete`,
  CONTACTSLIST: `${PREFIX}/mostakbal/contacts/page/1`,
  CONTACTDELETE: `${PREFIX}/mostakbal/contacts/delete`,
  INTERNALJOBADD: `${PREFIX}/mostakbal/job/position`,
  JOBSLIST: `${PREFIX}/mostakbal/jobs`,
  JOBDELETE: `${PREFIX}/mostakbal/jobs/delete`,
  INTERNALJOBS: `${PREFIX}/mostakbal/job/positions`,
};
