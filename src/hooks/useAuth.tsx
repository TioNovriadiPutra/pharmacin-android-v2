import axios from "axios";
import ENDPOINT from "@utils/config/Endpoint";
import { LoginInputType } from "@utils/types/UserInputType";
import { useRecoilState } from "recoil";
import { authTokenState, clinicIdState, userIdState } from "@store/atom/authState";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const [authToken, setAuthToken] = useRecoilState(authTokenState);
  const [userId, setUserId] = useRecoilState(userIdState);
  const [clinicId, setClinicId] = useRecoilState(clinicIdState);

  const login = async (data: LoginInputType) => {
    await axios
      .post(ENDPOINT.login, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const { token, userId, clinicId } = response.data;
        setAuthToken(token);
        setUserId(userId);
        setClinicId(clinicId);
        AsyncStorage.setItem("@token", token);
        AsyncStorage.setItem("@userId", JSON.stringify(userId));
        AsyncStorage.setItem("@clinicId", JSON.stringify(clinicId));
      })
      .catch((error) => {
        console.error("Error : " + error.response.data);
      });
  };
};

export default useAuth;
