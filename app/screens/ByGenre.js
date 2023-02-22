import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function ByGenre() {
  return (
    <View>
      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Pick Up Genre</Text>
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Genre?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextContainer: {
    width: wp("100%"),
    height: hp("5%"),
    marginTop: hp("3%"),
    // backgroundColor: "red",
    justifyContent: "center",
  },
  text1: {
    fontWeight: "bold",
    marginLeft: hp("2%"),
    fontSize: hp("2.3%"),
  },
});
