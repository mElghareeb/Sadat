const I18n = require('react-redux-i18n').I18n;
export const ARABIC_REGX = /^[\u0600-\u06FF . 0-9 () $@$!%*?&#-_.,~^ +()=  \u00a0-\u00a0 \n\r !'& \- _]+$/;
export const ENGLISH_REGX = /^[a-zA-Z0-9$@$!%*?&#-_.,~^ +()=\n\r]+$/;
export const ENGLISH_ARABIC_REGX = /^[a-zA-Z\u0600-\u06FF . 0-9 () $@$!%*?&#-_.,~^ +()=  \u00a0-\u00a0 \n\r !'& \- _]{1,35}$/;
export const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#-_.,~^])[A-Za-z\d@$!%*?&#-_.,~^]{8,16}$/;
export const ENGLISH_ARABIC_ADDRESS_REGX = /^[a-zA-Z\u0600-\u06FF . 0-9 () $@$!%*?&#-_.,~^ +()=  \u00a0-\u00a0 \n\r !'& \- _]{1,60}$/;

export const PHONE_REGX = /(^$|[0-9٠-٩]{5,11})/;
export const PHONE_REGX_11 = /^[0-9٠-٩]{11}$/;

export const SPOC_PHONE_REGX = /^\d{5}(?:\d{5,6})?(,\d{5}(?:\d{5,6})?)*$/;
export const NUMBER = /^[0-9]*$/;
export const DATE_REGX = /^\d{4}[\/](0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])$/;
export const DELETE_MENU_REGX = /Delete this MENU/;
export const URL_REDX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+=.]+$/;
/* ================================================[Messages]=========================*/
export const EMAIL_MSG = fieldName => `${fieldName} Invalid email address`;
export const REQUIRED_MSG = fieldName => `${fieldName} ${I18n.t('generalValidationMessage.required')}`;
export const NUMBER_MSG = fieldName => `${fieldName} has to be number`;
export const EN_NAME_MSG = (fieldName, lang) => `${fieldName} ${I18n.t('generalValidationMessage.accept')} ${lang} ${I18n.t('generalValidationMessage.characters')} ${I18n.t('generalValidationMessage.only')}`;
export const AR_NAME_MSG = (fieldName, lang) => `${fieldName} ${I18n.t('generalValidationMessage.accept')}  ${I18n.t('generalValidationMessage.characters')} ${lang} ${I18n.t('generalValidationMessage.only')}`;
export const CUSTOM_MSG = (fieldName, condition) =>
	`${fieldName} ${I18n.t("validations.hasToBe")} ${condition}`;


export const JSON_VALIDATOR = (val) => {
    // let arr = val.json.split(/[\s,]+/);
	return val
}
export const UNIQUE_MSG = (fieldName) =>
	`${fieldName} ${I18n.t("validations.alreadyExist")}`;
