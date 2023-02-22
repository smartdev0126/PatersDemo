import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MeetUpImmediately() {
  return (
    <View>
      <ScrollView>
        <View style={styles.heartContainer}>
          <View style={styles.Circle}>
            <Ionicons name="heart-outline" size={32} color="#000000" />
          </View>
        </View>
        <View style={styles.TextContainer}>
          <Text>There is no Recruitment.</Text>
        </View>

        <View style={styles.ButtonBox}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text2}>Post A Meet Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  ButtonBox: {
    width: wp("100%"),
    height: hp("7%"),
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("35%"),
  },
  button1: {
    width: "90%",
    height: "90%",
    backgroundColor: "#83F59C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox3: {
    width: wp("100%"),
    height: hp("4%"),
    // backgroundColor: "green",
    marginTop: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: hp("2%"),
  },
});
