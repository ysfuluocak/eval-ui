import axiosInstance from "../api/axiosInstance";
import type { IUserProfile, IUserUpdateProfile } from "../interfaces/user";

const UserService = {
  /**
   * Kullanıcı profilini getir
   */
  getProfile: async (): Promise<IUserProfile> => {
    try {
      const response = await axiosInstance.get("/users/profile");
      return response.data;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  },

  /**
   * Kullanıcı profilini güncelle
   */
  updateProfile: async (payload: IUserUpdateProfile): Promise<IUserProfile> => {
    try {
      const response = await axiosInstance.put("/users/profile", payload);
      return response.data;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);

    }
  },

  /**
   * Kullanıcı sil
   */
  deleteAccount: async (): Promise<void> => {
    try {
      await axiosInstance.delete("/users/account");
    } catch (error) {
      console.error(error);
    }
  },
};

export default UserService;
