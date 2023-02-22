import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import SwitchComponent from "../components/SwitchComponent";

export default function MessangeTemplate({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.TopBox}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.LeftContainer}
        >
          <Ionicons name="chevron-back" size={32} color="#000000" />
        </TouchableOpacity>
        <View style={styles.MiddleContainer}>
          <Text style={styles.text1}>Message Template String</Text>
        </View>
        <TouchableOpacity style={styles.RightContainer}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Auto Insert Setting</Text>
      </View>

      <View style={styles.TextContainer2}>
        <Text style={styles.text2}>
          The second message is automatically inserted when the first message is
          send
        </Text>
      </View>

      <SwitchComponent name={"Automatically Insert Template"} />
      <View style={styles.Line}></View>

      <View style={styles.TextContainer}>
        <Text style={styles.text1}>Message Template</Text>
      </View>

      <View style={styles.InputBox}>
        <TextInput
          placeholder="Enter The Content You Want To Insert Automatically."
          style={styles.input}
        />
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
    // backgroundColor: "red",
    marginTop: hp("3%"),
    justifyContent: "center",
  },
  text1: {
    fontWeight: "bold",
    marginLeft: hp("3%"),
    fontSize: hp("2.1%"),
  },
  TextContainer2: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "red",
    marginTop: hp("3%"),
    justifyContent: "center",
  },
  text2: {
    marginHorizontal: hp("2%"),
  },
  Line: {
    width: wp("100%"),
    height: hp("0.1%"),
    backgroundColor: "black",
    marginTop: hp("2%"),
  },
  InputBox: {
    width: wp("100%"),
    height: hp("30%"),
    marginTop: hp("2%"),
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: "100%",
    borderWidth: hp("0.1%"),
    padding: 10,
  },
});
