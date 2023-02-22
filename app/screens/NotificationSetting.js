import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UpperComponent from "../components/UpperComponent";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SwitchComponent from "../components/SwitchComponent";

export default function NotificationSetting({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <UpperComponent
        onPress={() => navigation.goBack()}
        name={"Notification Settings"}
      />

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Push Notification Setting</Text>
      </View>

      <SwitchComponent name={"When You Get 'Like'"} />
      <SwitchComponent name={"When You Get A 'Match'"} />
      <SwitchComponent name={"When You Get A 'Message'"} />
      <SwitchComponent name={"When You Get A User's Trail"} />
      <SwitchComponent name={"Other Notification"} />

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Incoming Call Notification Setting</Text>
      </View>
      <SwitchComponent name={"Voice Call"} />
      <SwitchComponent name={"Video Call"} />

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>SNS Notification Setting</Text>
      </View>
      <SwitchComponent name={"Campaign Information"} />

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Email Setting</Text>
      </View>
      <SwitchComponent name={"When You Get 'Like'..."} />
      <SwitchComponent name={"When You Get A 'Match' "} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TextContainer: {
    width: wp("100%"),
    height: hp("4%"),
    // backgroundColor: "red",
    marginTop: hp("3%"),
    justifyContent: "center",
  },
  text1: {
    fontWeight: "bold",
    marginLeft: hp("3%"),
    fontSize: hp("2.1%"),
  },
});
