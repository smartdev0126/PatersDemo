import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Btn from "../components/Btn";

export default function SignUp1({ navigation }) {
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

          <View style={styles.Circle2}>
            <Ionicons name="person" size={20} color="#FFFFFF" />
          </View>

          <View style={styles.LineBox}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.Circle2}>
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
            <Text>Basic info2</Text>
          </View>
          <View style={styles.InnerBox1}>
            <Text>Basic info3</Text>
          </View>
          <View style={styles.InnerBox1}>
            <Text>SMS info</Text>
          </View>
        </View>

        <View style={styles.dobBox}>
          <Text style={styles.text3}>Type your date of birth</Text>
        </View>

        <View style={styles.DoBContainer}>
          <View style={styles.LeftBox}>
            <MaterialCommunityIcons name="cake" size={20} color="#545353" />
          </View>
          <View style={styles.RightBox}>
            <TextInput
              style={styles.input}
              placeholder="1988"
              keyboardType="numeric"
            />
            <View style={{ justifyContent: "flex-end" }}>
              <Text>/</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="07"
              keyboardType="numeric"
            />
            <View style={{ justifyContent: "flex-end" }}>
              <Text>/</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="06"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.textcontainer}>
          <Text style={styles.text4}>Your date of birth is private.</Text>
          <Text style={styles.text4}>
            Enter it accurately because it is required for age verification.
          </Text>
        </View>

        <View style={styles.dobBox}>
          <Text style={styles.text3}>Select your gender</Text>
        </View>
        <View style={styles.GenderContainer}>
          <View style={styles.InnerLeftContainer}></View>
          <View style={styles.InnerMiddleContainer}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.text5}>Man</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.InnerRightContainer}>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.text6}>Woman</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Btn OnPress={() => navigation.navigate("SignUp2")} name={"Next"} />
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
    alignItems: "flex-end",
    justifyContent: "center",
  },
  RightBox: {
    width: "80%",
    height: "100%",
    // backgroundColor: "yellow",
    flexDirection: "row",
  },
  input: {
    width: "25%",
    height: "100%",
    borderBottomWidth: 1,
    padding: 12,
  },
  textcontainer: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "green",
    marginTop: hp("2%"),
  },
  text4: {
    marginLeft: hp("2%"),
    color: "red",
    fontSize: 10,
  },
  GenderContainer: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "blue",
    marginTop: hp("1%"),
    flexDirection: "row",
  },
  InnerLeftContainer: {
    width: "10%",
    height: "100%",
    // backgroundColor: "yellow",
  },
  InnerMiddleContainer: {
    width: "45%",
    height: "100%",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  InnerRightContainer: {
    width: "45%",
    height: "100%",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  btn1: {
    width: "80%",
    height: "100%",
    backgroundColor: "#83F59C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btn2: {
    width: "80%",
    height: "100%",
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text5: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  text6: {
    fontWeight: "bold",
    color: "#545353",
  },
});
