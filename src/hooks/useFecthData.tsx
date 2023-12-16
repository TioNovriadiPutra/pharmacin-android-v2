import axios, { AxiosResponse } from "axios";
import { useRecoilValue } from "recoil";
import { authTokenState } from "@store/atom/authState";

const useFecthData = () => {
  const authToken = useRecoilValue(authTokenState);

  const postFunction = async (url: string, data: any, withToken: boolean = false) => {
    await axios({
      method: "post",
      url,
      data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: withToken ? `Bearer ${authToken}` : null,
      },
    }).then((response: AxiosResponse<any, any>) => {
      const { message } = response.data;

      console.log(message);
    });
  };
};

export default useFecthData;
