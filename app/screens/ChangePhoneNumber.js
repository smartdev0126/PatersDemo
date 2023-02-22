import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UpperComponent from "../components/UpperComponent";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SettingComponent from "../components/SettingComponent";

export default function ChangePhoneNumber({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <UpperComponent
        onPress={() => navigation.goBack()}
        name="Change Phone Number"
      />

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Current Phone Number</Text>
      </View>

      <View style={styles.DoBContainer}>
        <View style={styles.LeftBox}>
          <Ionicons name="phone-portrait-outline" size={20} color="gray" />
        </View>
        <View style={styles.RightBox}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Change Phone Number</Text>
      </View>

      <SettingComponent
        onPress={() => {
          navigation.navigate("ChangingMobileNumber");
        }}
        name="Please Change From Here"
      />
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
  DoBContainer: {
    width: wp("100%"),
    height: hp("7%"),
    // backgroundColor: "green",
    marginTop: hp("2%"),
    flexDirection: "row",
  },
  LeftBox: {
    width: "10%",
    height: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  RightBox: {
    width: "80%",
    height: "100%",
    // backgroundColor: "yellow",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    padding: 5,
  },
});
