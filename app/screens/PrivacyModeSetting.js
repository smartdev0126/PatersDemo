import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import UpperComponent from "../components/UpperComponent";
import SwitchComponent from "../components/SwitchComponent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SettingComponent from "../components/SettingComponent";

export default function PrivacyModeSetting({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <UpperComponent
        onPress={() => navigation.goBack()}
        name={"Privacy Mode Setting"}
      />

      <View style={styles.Line}></View>
      <SwitchComponent name={"Privacy Mode Setting"} />
      <View style={styles.Line}></View>

      <SettingComponent name={"Check The Details"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Line: {
    width: wp("100%"),
    height: hp("0.1%"),
    backgroundColor: "black",
    marginTop: hp("2%"),
  },
});
