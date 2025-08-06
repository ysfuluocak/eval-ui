import axiosInstance from "../api/axiosInstance";
import type { IAuthResponse, ILogin, ISignup } from "../interfaces/user";

const AuthService = {
  /**
   * Kullanıcı girişi
   */
  loginService: async (payload: ILogin): Promise<IAuthResponse> => {
    try {
      const response = await axiosInstance.post("/auth/login", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Kullanıcı kaydı
   */
  signupService: async (payload: ISignup): Promise<IAuthResponse> => {
    try {
      const response = await axiosInstance.post("/auth/register", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Kullanıcı çıkışı
   */
  logoutService: async (): Promise<void> => {
    try {
      await axiosInstance.post("/auth/logout");
      localStorage.removeItem("authToken");
    } catch (error) {
      throw error;
    }
  },

  /**
   * Token yenileme
   */
  refreshTokenService: async (): Promise<IAuthResponse> => {
    try {
      const response = await axiosInstance.post("/auth/refresh-token");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
