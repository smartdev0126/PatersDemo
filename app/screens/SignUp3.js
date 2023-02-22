import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Btn from "../components/Btn";

export default function SignUp3({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.TopContainer}>
          <View style={styles.Circle1}>
            <MaterialCommunityIcons name="cake" size={20} color="#FFFFFF" />
          </View>

          <View style={styles.LineBox}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.Circle1}>
            <Ionicons name="person" size={20} color="#FFFFFF" />
          </View>

          <View style={styles.LineBox}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.Circle1}>
            <MaterialCommunityIcons name="key" size={20} color="#FFFFFF" />
          </View>

          <View style={styles.LineBox}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.Circle2}>
            <Ionicons name="mail" size={20} color="#FFFFFF" />
          </View>
        </View>

        <View style={styles.TextTopBox}>
          <View style={styles.InnerBox1}>
            <Text style={styles.text1}>Basic info1</Text>
          </View>
          <View style={styles.InnerBox1}>
            <Text style={styles.text1}>Basic info2</Text>
          </View>
          <View style={styles.InnerBox1}>
            <Text style={styles.text1}>Basic info3</Text>
          </View>
          <View style={styles.InnerBox1}>
            <Text>SMS info</Text>
          </View>
        </View>

        <View style={styles.dobBox}>
          <Text style={styles.text3}>Type your Phone Number(No hypen)</Text>
        </View>

        <View style={styles.DoBContainer}>
          <View style={styles.LeftBox}>
            <Ionicons name="phone-portrait-outline" size={20} color="gray" />
          </View>
          <View style={styles.RightBox}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number(No hypen)"
            />
          </View>
        </View>

        <View style={styles.textcontainer}>
          <Text style={styles.text4}>
            Enter a phone number where you can receive SMS.This is
          </Text>
          <Text style={styles.text4}>
            required to login and verify your identity.It will not be received
            to
          </Text>
          <Text style={styles.text4}>any third party.</Text>
        </View>

        <View style={styles.dobBox}>
          <Text style={styles.text3}>Type your Password(Using more than</Text>
          <Text style={styles.text3}>half-width 8 Characters.</Text>
        </View>

        <View style={styles.DoBContainer}>
          <View style={styles.LeftBox}>
            <Ionicons name="search" size={25} color="gray" />
          </View>
          <View style={styles.RightBox}>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Type your password..."
            />
          </View>
        </View>

        <Btn OnPress={() => navigation.navigate("SignUp4")} name={"Next"} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopContainer: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "red",
    marginTop: hp("6%"),
    flexDirection: "row",
    justifyContent: "center",
  },
  Circle1: {
    width: "12%",
    height: "100%",
    backgroundColor: "#83F59C",
    // marginLeft: hp("2.3%"),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  LineBox: {
    width: "13%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
  },
  line: {
    width: "100%",
    height: "20%",
    backgroundColor: "#83F59C",
  },
  Circle2: {
    width: "12%",
    height: "100%",
    backgroundColor: "#545353",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  TextTopBox: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
  },
  InnerBox1: {
    width: "25%",
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "#83F59C",
  },
  dobBox: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "red",
    marginTop: hp("5%"),
    justifyContent: "center",
  },
  text3: {
    marginLeft: hp("2%"),
    fontWeight: "bold",
  },
  DoBContainer: {
    width: wp("100%"),
    height: hp("7%"),
    // backgroundColor: "green",
    marginTop: hp("2%"),
    flexDirection: "row",
  },
  LeftBox: {
    width: "10%",
    height: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  RightBox: {
    width: "80%",
    height: "100%",
    // backgroundColor: "yellow",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    padding: 5,
  },
  textcontainer: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "green",
    marginTop: hp("2%"),
  },
  text4: {
    marginLeft: hp("5%"),
    color: "gray",
    fontSize: 10,
  },
});
