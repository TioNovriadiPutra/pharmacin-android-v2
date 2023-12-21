import axios, { AxiosResponse } from "axios";
import { useRecoilValue } from "recoil";
import { authTokenState } from "@store/atom/authState";

const useFecthData = () => {
  const authToken = useRecoilValue(authTokenState);

  const getFunction = async (url: string, withToken: boolean) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await axios({
      method: "get",
      url,
      headers: {
        Authorization: withToken ? `Bearer ${authToken}` : null,
      },
      timeout: 5000,
    });

    return response.data;
  };

  const postFunction = async (url: string, data: any, withToken: boolean = false, navigation?: any, destination?: string) => {
    await axios({
      method: "post",
      url,
      data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: withToken ? `Bearer ${authToken}` : null,
      },
    })
      .then((response: AxiosResponse<any, any>) => {
        // const { message } = response.data;

        if (navigation) {
          navigation.navigate(destination);
        }
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  };

  return {
    postFunction,
    getFunction,
  };
};

export default useFecthData;
