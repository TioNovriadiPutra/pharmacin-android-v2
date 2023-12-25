import axios, { AxiosResponse } from "axios";
import { ENDPOINT } from "@utils/config/Endpoint";
import { useSetRecoilState } from "recoil";
import { authTokenState, clinicIdState, loginErrorState, userIdState } from "@store/atom/authState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ValidationErrorType } from "@utils/types/FormType";
import { ToastAndroid } from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { showToast } from "@utils/helper/toast";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const setAuthToken = useSetRecoilState(authTokenState);
  const setUserId = useSetRecoilState(userIdState);
  const setClinicId = useSetRecoilState(clinicIdState);
  const setError = useSetRecoilState(loginErrorState);

  const queryClient = useQueryClient();

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    await axios
      .post(ENDPOINT.login, {
        email,
        password,
      })
      .then((response: AxiosResponse<any, any>) => {
        const { token, userId, clinicId, message } = response.data;
        setAuthToken(token);
        setUserId(userId);
        setClinicId(clinicId);
        AsyncStorage.setItem("@token", token);
        AsyncStorage.setItem("@userId", JSON.stringify(userId));
        AsyncStorage.setItem("@clinicId", JSON.stringify(clinicId));
        queryClient.invalidateQueries({ queryKey: ["getUserProfile", "dashboardReport"] });
        showToast("success", message);
      })
      .catch((error: any) => {
        if (error.response.data.error.code === 422) {
          setError(error.response.data as ValidationErrorType);
        } else {
          showToast("failed", error.response.data.error.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);
    setAuthToken(null);
    setUserId(null);
    setClinicId(null);
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@userId");
    await AsyncStorage.removeItem("@clinicId");
    queryClient.clear();
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    setIsLoading(true);

    const authToken = await AsyncStorage.getItem("@token");
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
    logout,
  };
};

export default useAuth;
