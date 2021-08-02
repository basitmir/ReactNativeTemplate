import React, { useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  ColumnCenterView,
  FlexedView,
  Input,
  Spacer,
  PButton,
  RowView,
  PText,
} from "@components";
import { Formik, Field } from "formik";
import { LoginForms } from "@constants";
import { SignupHelper } from "@helpers";
import { useNavigation } from "@react-navigation/native";
import { AppDispatcher, AppLoaderActions } from "@redux";
import { AuthService } from "@network";

export default OTP = ({ route }) => {
  const { setOptions, navigate, reset } = useNavigation();
  const isFromMobileLogin = route.params.isFromMobileLogin;
  const otpSentMobileNum = route.params.values.mobile;

  const navigateToWelcome = data => {
    data && AppDispatcher.setUserLoggedIn(data);
    isFromMobileLogin
      ? reset({ index: 0, routes: [{ name: "AppTabs" }] })
      : navigate("LocationSelection");
  };

  const resendotp = async () => {
    AppLoaderActions.show();
    const res = await AuthService.resendotp({ mobile: otpSentMobileNum });
    alert(res.data.message);
    AppLoaderActions.hide();
  };

  useEffect(() => {
    setOptions({
      headerTitle: isFromMobileLogin ? "Login" : "Signup",
    });
  });

  return (
    <FlexedView safeView>
      <ColumnCenterView>
        <Spacer top={20} />
        <ScrollView
          style={styles.sectionContainer}
          scrollIndicatorInsets={{ right: 1 }}
          keyboardShouldPersistTaps="handled">
          <View style={styles.innerContainer}>
            <Formik
              initialValues={LoginForms.InitialOTPValues}
              onSubmit={(values, formikBag) => {
                SignupHelper.verificationSubmit(
                  isFromMobileLogin,
                  { ...route.params.values, ...values },
                  formikBag,
                  navigateToWelcome,
                );
              }}
              validationSchema={LoginForms.OTPValidationSchema}>
              {({
                handleSubmit,
                setFieldTouched,
                setFieldValue,
                values,
                errors,
                touched,
                isValid,
              }) => (
                <React.Fragment>
                  <Field
                    component={Input}
                    label={`OTP Sent to ${otpSentMobileNum}`}
                    iconPath={
                      touched.OTP
                        ? errors.OTP
                          ? require("@icons/Error/Error.png")
                          : require("@icons/Success/Success.png")
                        : false
                    }
                    keyboardType="number-pad"
                    name={"OTP"}
                    onChangeText={val => {
                      setFieldTouched("OTP");
                      setFieldValue("OTP", val);
                    }}
                    error={touched.OTP && errors.OTP ? errors.OTP : ""}
                    value={values.OTP}
                  />
                  <Spacer bottom={10} />
                  <RowView style={{ justifyContent: "flex-end" }}>
                    <PText
                      variant={"subtitle2"}
                      style={{ fontWeight: "400" }}
                      onPress={() => resendotp()}>
                      Resend OTP
                    </PText>
                  </RowView>
                  <Spacer bottom={50} />
                  <View style={styles.buttonOTP}>
                    <PButton
                      onPress={handleSubmit}
                      label={isFromMobileLogin ? "Login" : "Get Started"}
                      disabled={!isValid}
                      width="50%"
                    />
                    <Spacer bottom={30} />
                  </View>
                </React.Fragment>
              )}
            </Formik>
          </View>
        </ScrollView>
      </ColumnCenterView>
    </FlexedView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: { width: "100%" },
  innerContainer: { padding: 20 },
  buttonOTP: { alignItems: "center" },
});
