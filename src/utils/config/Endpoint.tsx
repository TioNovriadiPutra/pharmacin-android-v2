const BASE_URL = "http://10.0.2.2:3333";

const AUTH_PREFIX = BASE_URL + "/auth";
const USER_PREFIX = BASE_URL + "/user";
const CLINIC_PREFIX = BASE_URL + "/clinic";
const FACTORY_PREFIX = BASE_URL + "/factory";

const ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  register: AUTH_PREFIX + "/register",
  userDefault: USER_PREFIX,
  clinicReport: CLINIC_PREFIX + "/report",
  factoryDefault: FACTORY_PREFIX,
};

export default ENDPOINT;
