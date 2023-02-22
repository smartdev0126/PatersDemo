import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function SettingComponent({ name, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <View style={styles.LeftComponent}>
        <Text style={styles.text1}>{name}</Text>
      </View>
      <View style={styles.RightComponent}>
        <Ionicons name="chevron-forward-outline" size={32} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: wp("100%"),
    height: hp("4%"),
    // backgroundColor: "green",
    flexDirection: "row",
    marginTop: hp("2%"),
  },
  LeftComponent: {
    width: "85%",
    height: "100%",
    // backgroundColor: "yellow",
    justifyContent: "center",
  },
  RightComponent: {
    width: "15%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    marginLeft: hp("2%"),
  },
});
