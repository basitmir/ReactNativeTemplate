// All Auth type calls will go here

import { API, NetworkManager } from "./Core";

export default class AuthService {
  static node = API.AUTH;

  static async loginByEmail(payload) {
    const instance = new NetworkManager(this.node.LOGIN_EMAIL, payload);
    return await instance.httpRequest(false);
  }

  static async loginByPhone(payload) {
    const instance = new NetworkManager(this.node.LOGIN_PHONE, payload);
    return await instance.httpRequest(false);
  }

  static async signup(payload) {
    const instance = new NetworkManager(this.node.REGISTER, payload);
    return await instance.httpRequest(false);
  }

  static async signupVerification(payload) {
    const instance = new NetworkManager(this.node.VERIFY_REGISTER, payload);
    return await instance.httpRequest(false);
  }

  static async loginVerification(payload) {
    const instance = new NetworkManager(this.node.VERIFY_LOGIN, payload);
    return await instance.httpRequest(false);
  }

  static async logout(payload) {
    const instance = new NetworkManager(this.node.LOGOUT, payload);
    return await instance.httpRequest();
  }

  static async resendotp(payload) {
    const instance = new NetworkManager(this.node.RESEND_OTP, payload);
    return await instance.httpRequest(false);
  }

  static async forgotPassword(payload) {
    const instance = new NetworkManager(this.node.FORGOT_PASSWORD, payload);
    return await instance.httpRequest(false);
  }

  static async resetPassword(payload) {
    const instance = new NetworkManager(this.node.RESET_PASSWORD, payload);
    return await instance.httpRequest(false);
  }

  static async getProfile() {
    const instance = new NetworkManager(this.node.GET_PROFILE);
    return await instance.httpRequest();
  }

  static async getDashboardStatus() {
    const instance = new NetworkManager(this.node.DASHBOARD);
    return await instance.httpRequest();
  }
}
