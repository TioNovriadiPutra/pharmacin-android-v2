import { authTokenState } from "@store/atom/authState";
import axios, { AxiosResponse } from "axios";
import { getRecoil } from "recoil-nexus";
import { showToast } from "./toast";

export const getFunction = async (url: string, withToken: boolean) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await axios({
    method: "get",
    url,
    headers: {
      Authorization: withToken ? `Bearer ${getRecoil(authTokenState)}` : null,
    },
    timeout: 5000,
  });

  return response.data;
};

export const postFunction = async (url: string, data: any, withToken: boolean = false, navigation?: any, destination?: string) => {
  await axios({
    method: "post",
    url,
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: withToken ? `Bearer ${getRecoil(authTokenState)}` : null,
    },
  })
    .then((response: AxiosResponse<any, any>) => {
      const { message } = response.data;

      showToast("success", message);

      if (navigation) {
        navigation.navigate(destination);
      }
    })
    .catch((error: any) => {
      throw error.response.data;
    });
};

export const updateFunction = async (url: string, data: any, withToken: boolean = false) => {
  await axios({
    method: "patch",
    url,
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: withToken ? `Bearer ${getRecoil(authTokenState)}` : null,
    },
  })
    .then((response: AxiosResponse<any, any>) => {
      const { message } = response.data;

      showToast("success", message);
    })
    .catch((error: any) => {
      throw error.response.data;
    });
};

export const deleteFunction = async (url: string, withToken: boolean) => {
  await axios({
    method: "delete",
    url,
    headers: {
      Authorization: withToken ? `Bearer ${getRecoil(authTokenState)}` : null,
    },
  })
    .then((response: AxiosResponse<any, any>) => {
      const { message } = response.data;

      showToast("success", message);
    })
    .catch((error: any) => {
      throw error.response.data;
    });
};
