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

export default function EditIcon({ navigation }) {
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
          <Text style={styles.text1}>Edit Your Icon</Text>
        </View>
        <View style={styles.RightContainer}></View>
      </View>

      <TouchableOpacity style={styles.IconBox}>
        <View style={styles.LeftComponent}>
          <View style={styles.InnerIconBox}></View>
        </View>
        <View style={styles.RightComponent}>
          <Text>default Icon</Text>
        </View>
      </TouchableOpacity>
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
  IconBox: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "green",
    flexDirection: "row",
    marginTop: hp("2%"),
  },
  LeftComponent: {
    width: "25%",
    height: "100%",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  RightComponent: {
    width: "75%",
    height: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
  },
  text2: {
    marginLeft: hp("2%"),
  },
  InnerIconBox: {
    width: "70%",
    height: "80%",
    backgroundColor: "green",
  },
});
