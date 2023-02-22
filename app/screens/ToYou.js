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

export default function ToYou({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.TopBox}>
        <View style={styles.LeftContainer}></View>
        <View style={styles.MiddleContainer}>
          <Text style={styles.text1}>To You</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SkippedUsers")}
          style={styles.RightContainer}
        >
          <Ionicons name="menu" size={32} color="#000000" />
        </TouchableOpacity>
      </View>

      <View style={styles.heartContainer}>
        <View style={styles.Circle}>
          <Ionicons name="heart-outline" size={32} color="#000000" />
        </View>
      </View>
      <View style={styles.TextContainer}>
        <Text>No Action From Other Party Yet</Text>
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
