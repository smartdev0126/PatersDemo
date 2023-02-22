import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FilteringComponent({ name, onPress }) {
  return (
    <View style={styles.Container}>
      <View style={styles.LeftContainer}>
        <Text style={{ marginLeft: hp("2%") }}>{name}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.RightContainer}>
        <Text>Select</Text>
        <Ionicons
          style={{ marginLeft: hp("1%") }}
          name="chevron-down"
          size={20}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "red",
    marginTop: hp("1%"),
    flexDirection: "row",
  },
  LeftContainer: {
    width: "70%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
  },
  RightContainer: {
    width: "30%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
