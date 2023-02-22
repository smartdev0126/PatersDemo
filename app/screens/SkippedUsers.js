import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SkippedUsers({ navigation }) {
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
          <Text style={styles.text1}>Skipped Users</Text>
        </View>
        <View style={styles.RightContainer}></View>
      </View>

      <View style={styles.heartContainer}>
        <TouchableOpacity style={styles.Circle}>
          <Ionicons name="menu" size={32} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.TextContainer}>
        <Text>No One Is Skipping</Text>
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
  heartContainer: {
    width: wp("100%"),
    height: hp("10%"),
    marginTop: hp("8%"),
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  Circle: {
    width: "20%",
    height: "100%",
    // backgroundColor: "green",
    borderRadius: 400 / 2,
    borderWidth: hp("0.1"),
    justifyContent: "center",
    alignItems: "center",
  },
  TextContainer: {
    width: wp("100%"),
    height: hp("4%"),
    // backgroundColor: "blue",
    marginTop: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
