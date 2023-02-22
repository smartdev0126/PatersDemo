import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UpperComponent from "../components/UpperComponent";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Btn from "../components/Btn";

export default function ChangingMobileNumber({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <UpperComponent
        onPress={() => navigation.goBack()}
        name="Change Phone Number"
      />

      <View style={styles.InputContianer}>
        <TextInput
          style={styles.input}
          placeholder="New Phone Number (None)"
          keyboardType="numeric"
        />
      </View>

      <Btn name="Send" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  InputContianer: {
    width: wp("100%"),
    height: hp("7%"),
    // backgroundColor: "green",
    marginTop: hp("2%"),
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: "100%",
    borderRadius: 20,
    borderWidth: hp("0.2"),
    padding: 10,
    borderColor: "#545353",
  },
});
