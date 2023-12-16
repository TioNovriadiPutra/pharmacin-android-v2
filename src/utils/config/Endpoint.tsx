const BASE_URL = "http://10.0.2.2:3333";

const AUTH_PREFIX = BASE_URL + "/auth";

const ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  register: AUTH_PREFIX + "/register",
};

export default ENDPOINT;
