import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingComponent from "../components/SettingComponent";

export default function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.TopBox}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.LeftContainer}
        >
          <Ionicons name="arrow-back" size={32} color="#000000" />
        </TouchableOpacity>
        <View style={styles.MiddleContainer}>
          <Text style={styles.text1}>Settings</Text>
        </View>
        <View style={styles.RightContainer}></View>
      </View>

      <ScrollView>
        <View style={styles.TextContainer}>
          <Text style={styles.text2}>Application Settings</Text>
        </View>

        <SettingComponent
          onPress={() => navigation.navigate("EditIcon")}
          name={"Edit Your Icon"}
        />
        <SettingComponent
          onPress={() => navigation.navigate("AccessibilitySetting")}
          name={"Accessibility Setting"}
        />

        <View style={styles.TextContainer}>
          <Text style={styles.text2}>Account Settings</Text>
        </View>

        <SettingComponent
          onPress={() => navigation.navigate("NotificationSetting")}
          name={"Notification Setting"}
        />
        <SettingComponent name={"Block List"} />
        <SettingComponent
          onPress={() => navigation.navigate("ChangePassword")}
          name={"Change Password"}
        />
        <SettingComponent
          onPress={() => navigation.navigate("ChangePhoneNumber")}
          name={"Change Phone Number"}
        />
        <SettingComponent name={"Block List Of Phone Number"} />
        <SettingComponent name={"Withdrawal List"} />
        <SettingComponent name={"Hidden Message List"} />
        <SettingComponent
          onPress={() => navigation.navigate("MessangeTemplate")}
          name={"Message Template List"}
        />

        <View style={styles.TextContainer}>
          <Text style={styles.text2}>Payment Information</Text>
        </View>
        <SettingComponent name={"Subscription Setting"} />
        <SettingComponent name={"Restoring Purchase Information"} />

        <View style={styles.TextContainer}>
          <Text style={styles.text2}>Pirvacy Settings</Text>
        </View>

        <SettingComponent
          onPress={() => navigation.navigate("FootPrintSetting")}
          name={"Footprint Setting"}
        />
        <SettingComponent
          onPress={() => navigation.navigate("PrivacyModeSetting")}
          name={"Private Mode Setting"}
        />
        <SettingComponent
          onPress={() => navigation.navigate("PinSetting")}
          name={"Pin Setting"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TopBox: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "red",
    marginTop: hp("3%"),
    flexDirection: "row",
  },
  LeftContainer: {
    width: "15%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  MiddleContainer: {
    width: "70%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  RightContainer: {
    width: "15%",
    height: "100%",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontWeight: "bold",
    fontSize: hp("2.5%"),
    color: "#000000",
  },
  TextContainer: {
    width: wp("100%"),
    height: hp("4%"),
    // backgroundColor: "red",
    marginTop: hp("2%"),
    justifyContent: "center",
  },
  text2: {
    marginLeft: hp("2%"),
    fontWeight: "bold",
    fontSize: hp("2%"),
  },
});
