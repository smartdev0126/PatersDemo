import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Btn({ name, OnPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={OnPress} style={styles.btn}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: "7%",
    // backgroundColor: "red",
    marginTop: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "90%",
    height: 50,
    backgroundColor: "#83F59C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
