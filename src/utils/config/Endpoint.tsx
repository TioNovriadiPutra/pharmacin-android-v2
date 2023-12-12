const BASE_URL = "http://localhost:3333/api";

const AUTH_PREFIX = BASE_URL + "/auth";

const ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  register: AUTH_PREFIX + "/register",
};

export default ENDPOINT;
