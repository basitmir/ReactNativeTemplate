import React, { useEffect } from "react";
import { Image } from "react-native";
import { ColumnCenterView, FlexedView } from "@components";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { AppDispatcher } from "@redux";
import { AuthService } from "@network";

export default Splash = () => {
  const { reset } = useNavigation();
  const { introCompleted, isLogged } = useSelector(store => store.app);

  useEffect(() => {
    let route = "Intro";
    if (introCompleted) {
      if (isLogged) {
        getProfileDetail();
        return;
      } else {
        route = "Login";
      }
    }
    reset({ index: 0, routes: [{ name: route }] });
  }, []);

  const getProfileDetail = async () => {
    const res = await AuthService.getProfile();
    if (res.success) {
      AppDispatcher.updateUserInfo(res.data.user);
      reset({ index: 0, routes: [{ name: "AppTabs" }] });
    }
  };

  return (
    <FlexedView>
      <ColumnCenterView>
        <Image source={require("@images/Logo/Logo.png")} resizeMode="center" />
      </ColumnCenterView>
    </FlexedView>
  );
};
