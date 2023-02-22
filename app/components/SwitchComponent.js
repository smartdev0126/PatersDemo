import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SwitchComponent({ name }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.Container}>
      <View style={styles.LeftContainer}>
        <Text style={styles.text1}>{name}</Text>
      </View>
      <View style={styles.RigtContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "green" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: wp("100%"),
    height: hp("4.5%"),
    // backgroundColor: "red",

    flexDirection: "row",
  },
  LeftContainer: {
    width: "80%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
  },
  RigtContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    marginLeft: hp("2.8%"),
  },
});
