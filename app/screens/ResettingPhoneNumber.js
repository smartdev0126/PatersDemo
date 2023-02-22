import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import Btn from "../components/Btn";

export default function ResettingPhoneNumber({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopBackContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.leftbox}
        >
          <Ionicons name="chevron-back-outline" size={32} color="#000000" />
        </TouchableOpacity>
        <View style={styles.rightbox}></View>
      </View>

      <View style={styles.TopBackContainer}>
        <Text style={styles.text1}>Resetting your Mobile Phone Number.</Text>
      </View>

      <View style={styles.InputContianer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Phone Number Again"
        />
      </View>
      <Btn name={"Authentification"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopBackContainer: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "red",
    marginTop: hp("3%"),
    flexDirection: "row",
  },
  leftbox: {
    width: "10%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  rightbox: {
    width: "90%",
    height: "100%",
    // backgroundColor: "yellow",
  },
  text1: {
    marginLeft: hp("3%"),
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
