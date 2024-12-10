import { endpoint } from "@/constants/endpoint";
import { IUserLogin } from "@/interfaces/user.interface";
import api from "./api";

export class AuthService {
  static async login(user: IUserLogin) {
    try {
      const response = await api.post(endpoint.auth.login, user);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}
