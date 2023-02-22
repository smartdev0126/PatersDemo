import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Splash5({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/girl4.jpg")}
      >
        <View style={styles.TextTopContainer1}>
          <Text style={styles.TopText}>Safe And Secure Meats</Text>
        </View>

        <View style={styles.TextTopContainer2}>
          <Text style={styles.TopText}>Find Your Favourite</Text>
          <Text style={styles.TopText}>With Filtering Function</Text>
          <Text style={styles.TopText}>Height And Shape</Text>
          <Text style={styles.TopText}>popular members</Text>
          <Text style={styles.TopText}>new users</Text>
          <Text style={styles.TopText}>online now</Text>
          <Text style={styles.TopText}>places on you want to go on date</Text>
          <Text style={styles.TopText}>dreams for the future etc...</Text>
        </View>

        <View style={styles.textBox2}>
          <Text style={styles.text2}>Select A Country</Text>
        </View>

        <View style={styles.ButtonBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp1")}
            style={styles.button1}
          >
            <Text style={styles.text2}>Let's Start Paters</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textBox3}>
          <Text style={styles.text2}>if you have an account, click here</Text>
        </View>

        <View style={styles.ButtonBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.button2}
          >
            <Text style={styles.text2}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textBox3}>
          <Text style={styles.text3}>Terms Of Use Privacy And Policy </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  TextTopContainer1: {
    width: wp("100%"),
    height: hp("5%"),
    marginTop: hp("3%"),
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  TextTopContainer2: {
    width: wp("100%"),
    height: hp("30%"),
    marginTop: hp("3%"),
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  TopText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: hp("2.3%"),
  },
  ForOneCircle: {
    width: wp("100%"),
    height: hp("15%"),
    marginTop: hp("3%"),
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  InnerCircle: {
    width: "30%",
    height: "100%",
    // backgroundColor: "green",
    borderRadius: 400 / 2,
  },
  frame1: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  InnerCircle2: {
    width: "30%",
    height: "100%",
    marginLeft: hp("3%"),
    // backgroundColor: "green",
    borderRadius: 400 / 2,
  },
  text2: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: hp("2%"),
  },
  textBox2: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "green",
    marginTop: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonBox: {
    width: wp("100%"),
    height: hp("7%"),
    // backgroundColor: "red",
    marginTop: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    width: "80%",
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
  button2: {
    width: "80%",
    height: "90%",
    // backgroundColor: "#83F59C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: hp("0.2"),
    borderColor: "#FFFFFF",
  },
  text3: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: hp("2%"),
    textDecorationLine: "underline",
  },
});
