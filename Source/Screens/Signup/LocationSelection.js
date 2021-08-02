import React, { useState } from "react";
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import {
  ColumnCenterView,
  Input,
  Spacer,
  PButton,
  PText,
  OptionCell,
  Separator,
} from "@components";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SignupHelper } from "@helpers";
import { AppConstants } from "@constants";

const { height } = Dimensions.get("screen");

export default LocationSelection = () => {
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState(false);
  const { navigate } = useNavigation();
  const googleAutoCompleteRef = React.createRef();
  const [kioskList, setKioskList] = useState([]);
  const [selectedKiosk, setSelectedKiosk] = useState();

  const navigateNext = data => {
    navigate("Welcome");
  };

  return (
    <ColumnCenterView
      style={{
        justifyContent: "flex-start",
        paddingHorizontal: 16,
      }}>
      <Spacer top={40} />
      <View style={Styles.sectionContainer} flexed={false}>
        <PText textColor={"primary"} bold={true} style={Styles.locationLabel}>
          Enter Your Location
        </PText>
        <Image
          source={require("@icons/Location/Location.png")}
          style={Styles.imageStyles}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
        }}>
        <GooglePlacesAutocomplete
          ref={googleAutoCompleteRef}
          autoFillOnNotFound={true}
          returnKeyType={"search"}
          autoFocus={true}
          fetchDetails={true}
          placeholder="Search"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200}
          isRowScrollable={false}
          enablePoweredByContainer={false}
          onPress={async (data, details = null) => {
            setLoading(true);
            const { lat, lng } = details.geometry.location;
            const res = await SignupHelper.fetchKioskByLocation(lat, lng);
            setKioskList(res.result);
            setLoading(false);
          }}
          query={{
            key: AppConstants.GOOGLE_PLACES_API_KEY,
            language: "en",
          }}
          textInputProps={{
            InputComp: Input,
          }}
          suppressDefaultStyles={true}
          styles={{
            textInput: { width: "100%" },
          }}
          renderRow={rowData => {
            const title = rowData.structured_formatting.main_text;
            const address = rowData.structured_formatting.secondary_text;
            return (
              <>
                <View
                  style={{
                    flexDirection: "row",
                  }}>
                  <PText
                    variant={"subtitle2"}
                    style={{
                      fontWeight: "400",
                      padding: 10,
                    }}>
                    {title + ", " + address}
                  </PText>
                </View>
                <Separator style={{ width: "100%", height: 1 }} />
              </>
            );
          }}
          onFail={error => console.error(error)}
        />
      </View>
      <Spacer bottom={40} />
      <View style={{ width: "100%" }}>
        <PText
          style={{
            fontWeight: "300",
          }}>
          Nearby Kiosk
        </PText>
        <Spacer bottom={12} />
        {isLoading ? (
          <View style={Styles.searchView}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Spacer bottom={10} />
            <PText variant={"subtitle1"}>Searching for kiosk’s</PText>
          </View>
        ) : (
          <>
            {kioskList.length ? (
              <React.Fragment>
                <View style={Styles.contentView}>
                  <FlatList
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollIndicatorInsets={{ right: 1 }}
                    data={kioskList}
                    renderItem={({ item }) => {
                      return (
                        <OptionCell
                          onSelect={() => setSelectedKiosk(item.id)}
                          selected={selectedKiosk === item.id ? true : false}
                          name={item.name}
                        />
                      );
                    }}
                    contentContainerStyle={{ marginVertical: 20 }}
                  />
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}>
                  <PButton
                    label="Get Started"
                    width="50%"
                    onPress={() =>
                      SignupHelper.setUserDefaultKiosk(
                        selectedKiosk,
                        navigateNext,
                      )
                    }
                  />
                </View>
              </React.Fragment>
            ) : (
              <ColumnCenterView
                flexed={false}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70%",
                }}>
                <Image
                  source={require("@images/Placeholders/NoOngoing/NoOngoing.png")}
                  style={{ width: 120, height: 120 }}
                />
                <Spacer bottom={30} />
                <PText
                  variant={"subtitle1"}
                  style={{ textAlign: "center", marginHorizontal: "10%" }}>
                  We don’t have any Kiosk nearby your location yet!
                </PText>
              </ColumnCenterView>
            )}
          </>
        )}
      </View>
    </ColumnCenterView>
  );
};

const Styles = StyleSheet.create({
  contentView: {
    backgroundColor: "#FFF",
    minHeight: height / 2.5,
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  locationLabel: {
    fontSize: 20,
    fontWeight: "400",
    padding: 5,
  },
  imageStyles: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignItems: "center",
  },
  searchView: {
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
});
