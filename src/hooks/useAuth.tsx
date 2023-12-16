import axios from "axios";
import ENDPOINT from "@utils/config/Endpoint";
import { useSetRecoilState } from "recoil";
import { authTokenState, clinicIdState, userIdState } from "@store/atom/authState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const setAuthToken = useSetRecoilState(authTokenState);
  const setUserId = useSetRecoilState(userIdState);
  const setClinicId = useSetRecoilState(clinicIdState);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    await axios
      .post(ENDPOINT.login, {
        email,
        password,
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
        console.log(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    setIsLoading(true);

    const authToken = await AsyncStorage.getItem("@authToken");
    const userId = await AsyncStorage.getItem("@userId");
    const clinicId = await AsyncStorage.getItem("@clinicId");

    if (authToken && userId && clinicId) {
      setAuthToken(authToken);
      setUserId(JSON.parse(userId));
      setClinicId(JSON.parse(clinicId));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return {
    isLoading,
    login,
  };
};

export default useAuth;
