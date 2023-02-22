import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Btn from "../components/Btn";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Enter Your Login Information.</Text>
      </View>

      <View style={styles.InputContianer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number Or Email Address"
        />
      </View>

      <View style={styles.InputContianer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password (At Least 8 characters)"
          secureTextEntry={true}
        />
      </View>

      <Btn
        OnPress={() => navigation.navigate("BottomNavigation")}
        name="Login"
      />

      <View style={styles.FogotBox}>
        <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
          <Text style={styles.text2}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "red",
    marginTop: hp("15%"),
  },
  text1: {
    marginLeft: hp("3%"),
  },
  InputContianer: {
    width: wp("100%"),
    height: hp("7%"),
    // backgroundColor: "green",
    marginTop: hp("2%"),
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: "100%",
    borderWidth: hp("0.2"),
    padding: 10,
    borderColor: "#545353",
  },
  FogotBox: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "red",
    marginTop: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontWeight: "bold",
    color: "#83F59C",
  },
});
