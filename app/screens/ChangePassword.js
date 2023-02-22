import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React from "react";
import UpperComponent from "../components/UpperComponent";
import Btn from "../components/Btn";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ChangePassword({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <UpperComponent
        name="Change Password"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Current Password</Text>
      </View>

      <View style={styles.InputContianer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Current Password"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>New Password</Text>
      </View>
      <View style={styles.InputContianer}>
        <TextInput
          style={styles.input}
          placeholder="Enter A New Password(At Least 8 Characters)"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.InputContianer}>
        <TextInput
          style={styles.input}
          placeholder="Repeat The New Password Again"
          secureTextEntry={true}
        />
      </View>

      <Btn name="Save" />
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
    borderWidth: hp("0.2"),
    padding: 10,
    borderColor: "#545353",
  },
});
