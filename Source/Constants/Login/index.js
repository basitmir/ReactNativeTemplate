import * as yup from "yup";

const LoginForms = {
  InitialLoginValues: {
    email: "",
    password: "",
  },
  LoginValidationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid Email")
      .required("Please enter email"),
    password: yup
      .string()
      .min(6, "Password must have atleast 6 characters")
      .required("Please enter password"),
  }),
  InitialOTPValues: {
    OTP: "",
  },
  OTPValidationSchema: yup.object().shape({
    OTP: yup
      .string()
      .min(6, "OTP must have 6 digits")
      .required("Invalid OTP. Please check the OTP and enter again"),
  }),
  InitialMobileNumberLoginValues: {
    mobile: "+1",
  },
  MobileLoginValidationSchema: yup.object().shape({
    mobile: yup
      .string()
      .matches(
        new RegExp("^([0|+[0-9]{1,5})?([7-9][0-9]{9})$"),
        "Invalid Mobile Number",
      )
      .required("Please enter the mobile number"),
  }),
};

export default LoginForms;
