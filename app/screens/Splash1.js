import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Splash1({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Splash2");
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/image3.jpg")}
      >
        <View style={styles.middlebox}>
          <Ionicons name="heart" size={40} color="green" />
          <Text style={styles.text1}>Paters</Text>
        </View>

        <View style={styles.textBox1}>
          <Text style={styles.text2}>Use Paters And Get Extra Meats</Text>
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
    // backgroundColor: "gray",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  middlebox: {
    width: wp("100%"),
    height: hp("8%"),
    // backgroundColor: "red",
    marginTop: hp("33%"),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: hp("4%"),
  },
  textBox1: {
    width: wp("100%"),
    height: hp("5%"),
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
  textBox2: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "green",
    marginTop: hp("5%"),
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
