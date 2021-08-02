// List all endpoints here
// @ts-check
import { Endpoint } from "./APIModel";
import { HTTP_METHODS } from "./HttpMethods";

// ******************
// Endpoint class takes 3 params in constructor ==> "endpoint", "http-method", "API-version"
// By default, version is set to v1
// ******************
export const API = {
  AUTH: {
    LOGIN_EMAIL: new Endpoint("/auth/login", HTTP_METHODS.POST),
    LOGIN_PHONE: new Endpoint("/auth/login-mobile", HTTP_METHODS.POST),
    REGISTER: new Endpoint("/auth/register", HTTP_METHODS.POST),
    VERIFY_REGISTER: new Endpoint(
      "/auth/otp-verify-register",
      HTTP_METHODS.POST,
    ),
    VERIFY_LOGIN: new Endpoint("/auth/otp-verify", HTTP_METHODS.POST),
    RESEND_OTP: new Endpoint("/auth/otp-send", HTTP_METHODS.POST),
    LOGOUT: new Endpoint("/auth/logout", HTTP_METHODS.POST),
    REFRESH_TOKEN: new Endpoint("/auth/refresh-token", HTTP_METHODS.POST),
    FORGOT_PASSWORD: new Endpoint("/auth/forgot-password", HTTP_METHODS.POST),
    RESET_PASSWORD: new Endpoint("/auth/reset-password", HTTP_METHODS.POST),
    GET_PROFILE: new Endpoint("/user/user-profile", HTTP_METHODS.GET),
    DASHBOARD: new Endpoint("/user/user-dashboard-details", HTTP_METHODS.GET),
  },
  CLOSET: {
    FETCH_PROPERTY: new Endpoint(
      "/closet/garment-properties",
      HTTP_METHODS.GET,
    ),
    ADD_GARMENT: new Endpoint("/closet/garment", HTTP_METHODS.POST),
    MY_CLOSET: new Endpoint("/closet/garment-categories", HTTP_METHODS.GET),
    UPDATE_GARMENT: new Endpoint("/closet/garment", HTTP_METHODS.PUT),
    CLOSET_CLOTH_LIST: new Endpoint("/closet/garment", HTTP_METHODS.GET),
  },
  PROFILE: {
    CHANGE_PASSWORD: new Endpoint("/user/change-password", HTTP_METHODS.POST),
    KIOSK_BY_LOCATION: new Endpoint("/kiosk/nearby-kiosk", HTTP_METHODS.GET),
    SET_USER_DEFAULT_KIOSK: new Endpoint(
      "/kiosk/set-default-kiosk",
      HTTP_METHODS.POST,
    ),
    UPDATE_PROFILE: new Endpoint("/user/update-profile", HTTP_METHODS.POST),
    UPDATE_USER_SETTINGS: new Endpoint(
      "/user/update-user-setting",
      HTTP_METHODS.PUT,
    ),
    GET_USER_SETTINGS: new Endpoint("/user/get-user-setting", HTTP_METHODS.GET),
  },
  KIOSK: {
    NEARBY_KIOSK: new Endpoint("/kiosk/nearby-kiosk", HTTP_METHODS.GET),
  },
  SCHEDULE: {
    GET_SLOTS: new Endpoint("/schedule/available-slot", HTTP_METHODS.POST),
    BOOK_SLOT: new Endpoint("/schedule/book-schedule", HTTP_METHODS.POST),
    UPCOMING: new Endpoint("/schedule/upcoming-schedules", HTTP_METHODS.GET),
    ONGOING: new Endpoint("/schedule/ongoing-schedules", HTTP_METHODS.GET),
    PAST: new Endpoint("/schedule/past-schedules", HTTP_METHODS.GET),
  },
};
