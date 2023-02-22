import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AccessibilitySetting({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.TopBox}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.LeftContainer}
        >
          <Ionicons name="arrow-back" size={32} color="#000000" />
        </TouchableOpacity>
        <View style={styles.MiddleContainer}>
          <Text style={styles.text1}>Accessibility Setting</Text>
        </View>
        <View style={styles.RightContainer}></View>
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.text2}></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
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
  TextContainer: {
    width: wp("100%"),
    height: hp("4%"),
    backgroundColor: "red",
    marginTop: hp("2%"),
  },
  text2: {
    marginLeft: hp("2%"),
  },
});
