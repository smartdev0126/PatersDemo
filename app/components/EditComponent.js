import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function EditComponent({ name }) {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={styles.LeftContainer}>
        <Ionicons name="md-checkmark-circle" size={32} color="gray" />
      </View>
      <View style={styles.MiddleContainer}>
        <Text>{name}</Text>
      </View>
      <View style={styles.RightContainer}>
        <Ionicons name="chevron-forward" size={32} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: wp("100%"),
    height: hp("6%"),
    marginTop: hp("1%"),
    // backgroundColor: "green",
    flexDirection: "row",
    borderBottomWidth: hp("0.1%"),
    borderColor: "gray",
  },
  LeftContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  MiddleContainer: {
    width: "60%",
    height: "100%",
    // backgroundColor: "yellow",
    justifyContent: "center",
  },
  RightContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
