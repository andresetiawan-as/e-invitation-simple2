const BASE_URL_QA = "https://myfakeapi.com/"
const BASE_URL_UTT = "https://myfakeapi.com/"
const BASE_URL_PROD = "https://myfakeapi.com/"

let BASE_URL = null

if (process.env.API_ENV === 'production' || process.env.API_ENV === 'PROD') {
    BASE_URL = BASE_URL_PROD
}
else if (process.env.API_ENV === 'stagging' || process.env.API_ENV === 'UTT') {
    BASE_URL = BASE_URL_UTT
}
else if (process.env.API_ENV === 'development' || process.env.API_ENV === 'DEVELOPMENT' || process.env.API_ENV === 'QA') {
    BASE_URL = BASE_URL_QA
}

const Config = {
    BASE_URL: BASE_URL
    // CLIENT_ID: CLIENT_ID,
    // CLIENT_SECRET: CLIENT_SECRET,
    // CLIENT_TAG: CLIENT_TAG,
    // APPLICATION_CODE: APPLICATION_CODE,
    // API_DOMAIN: API_DOMAIN,
    // API_LOGIN: API_LOGIN,
    // API_SERVICE: API_SERVICE,
    // PUB_KEY: PUB_KEY,
}

export default Config;
