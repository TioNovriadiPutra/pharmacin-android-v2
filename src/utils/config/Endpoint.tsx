import { QueryClient } from "@tanstack/react-query";

const BASE_URL = "http://10.0.2.2:3333";

const AUTH_PREFIX = BASE_URL + "/auth";
const USER_PREFIX = BASE_URL + "/user";
const CLINIC_PREFIX = BASE_URL + "/clinic";
const FACTORY_PREFIX = BASE_URL + "/factory";
const DRUG_PREFIX = BASE_URL + "/drug";
const DRUG_CATEGORY_PREFIX = BASE_URL + "/category";

export const ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  register: AUTH_PREFIX + "/register",
  userDefault: USER_PREFIX,
  factoryDefault: FACTORY_PREFIX,
  factoryDetail: FACTORY_PREFIX + "/detail",
  drugCategoryDefault: DRUG_CATEGORY_PREFIX,
  drugDefault: DRUG_PREFIX,
  drugDetail: DRUG_PREFIX + "/detail",
  clinicReport: CLINIC_PREFIX + "/report",
};

export const queryClient = new QueryClient();
