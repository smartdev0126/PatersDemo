import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function UpperComponent({ name, onPress }) {
  return (
    <View style={styles.TopBox}>
      <TouchableOpacity onPress={onPress} style={styles.LeftContainer}>
        <Ionicons name="arrow-back" size={32} color="#000000" />
      </TouchableOpacity>
      <View style={styles.MiddleContainer}>
        <Text style={styles.text1}>{name}</Text>
      </View>
      <View style={styles.RightContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
