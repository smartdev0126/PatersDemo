import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function HomeComponent({ name, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <View style={styles.TopContainer}>
        <View style={styles.InnerContainer}>
          <Image style={styles.img} source={image} />
        </View>
      </View>
      <View style={styles.BottomContainer}>
        <Text style={styles.text1}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: wp("50%"),
    height: hp("25%"),
    // backgroundColor: "red",
    marginTop: hp("3%"),
  },
  TopContainer: {
    width: "100%",
    height: "80%",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  BottomContainer: {
    width: "100%",
    height: "20%",
    // backgroundColor: "yellow",
    justifyContent: "center",
    // alignItems: "center",
  },
  InnerContainer: {
    width: "90%",
    height: "100%",
    backgroundColor: "blue",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text1: {
    marginLeft: hp("2%"),
  },
});
