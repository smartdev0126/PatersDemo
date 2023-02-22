import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Btn from "../components/Btn";
//import basic react native components
import { BottomSheet } from "react-native-btr";

export default function SignUp4({ navigation }) {
  const [visible, setVisible] = useState(false);

  const [visible2, setVisible2] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const toggleBottomNavigationView2 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible2(!visible2);
  };
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

          <View style={styles.Circle1}>
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
            <Text style={styles.text1}>SMS info</Text>
          </View>
        </View>

        <View style={styles.dobBox}>
          <Text style={styles.text3}>
            Enter the 6-digit number send to your phone
          </Text>
          <Text style={styles.text3}>number</Text>
        </View>

        <View style={styles.InputContianer}>
          <TextInput
            style={styles.input}
            placeholder="Authentification Code(6-Digit Number)"
            keyboardType="numeric"
          />
        </View>

        <Btn
          OnPress={() => navigation.navigate("BottomNavigation")}
          name={"Authentification"}
        />

        <View style={styles.dobBox}>
          <Text style={styles.text3}>Are you in trouble?</Text>
        </View>

        <View style={styles.textcontainer}>
          <TouchableOpacity onPress={toggleBottomNavigationView}>
            <Text style={styles.text4}>
              I didn't receive an authentification code.
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("ResettingPhoneNumber")}
          style={styles.textcontainer}
        >
          <Text style={styles.text4}>I need to retype my phone number.</Text>
        </TouchableOpacity>

        <View style={styles.textcontainer}>
          <TouchableOpacity onPress={toggleBottomNavigationView2}>
            <Text style={styles.text4}>
              I'd like to receive the verification code over the phone.
            </Text>
          </TouchableOpacity>
        </View>

        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.popUpTopText}>
              <Text style={styles.text5}>Resend Authorize Code</Text>
            </View>

            <View style={styles.popUpTopText}>
              <Text style={styles.text5}>Would You Like To Resend The</Text>
              <Text style={styles.text5}>Resend Authorization Code?</Text>
            </View>

            <View style={styles.ButtonContainer}>
              <View style={styles.LeftBox}></View>
              <View style={styles.RightBox}>
                <View style={styles.InnerLeftBox}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text6}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.InnerRighttBox}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text6}>RESEND</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible2}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView2}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView2}
          //Toggling the visibility state
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.popUpTopText}>
              <Text style={styles.text5}>Call Confirmation</Text>
            </View>

            <View style={styles.popUpTopText}>
              <Text style={styles.text5}>
                I Will Call Your Registered Phone Number.
              </Text>
              <Text style={styles.text5}>Are You Sure?</Text>
            </View>

            <View style={styles.ButtonContainer}>
              <View style={styles.LeftBox}></View>
              <View style={styles.RightBox}>
                <View style={styles.InnerLeftBox}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text6}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.InnerRighttBox}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text6}>CALL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </BottomSheet>
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
    borderRadius: 20,
    borderWidth: hp("0.2"),
    padding: 10,
    borderColor: "#545353",
  },
  textcontainer: {
    width: "100%",
    height: 20,
    // backgroundColor: "red",
  },
  text4: {
    marginLeft: hp("2%"),
    textDecorationLine: "underline",
    color: "#000000",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
  },
  popUpTopText: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "green",
    marginTop: hp("3%"),
    justifyContent: "center",
  },
  text5: {
    marginLeft: hp("2%"),
    color: "#000000",
    fontSize: hp("2%"),
  },
  ButtonContainer: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "red",
    marginTop: hp("2%"),
    flexDirection: "row",
  },
  LeftBox: {
    width: "40%",
    height: "100%",
    // backgroundColor: "green",
  },
  RightBox: {
    width: "60%",
    height: "100%",
    // backgroundColor: "blue",
    flexDirection: "row",
  },
  InnerLeftBox: {
    width: "50%",
    height: "100%",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  InnerRighttBox: {
    width: "50%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "80%",
    height: "100%",
    borderRadius: 20,
    borderWidth: hp("0.1"),
    justifyContent: "center",
    alignItems: "center",
  },
  text6: {
    fontWeight: "bold",
    color: "gray",
  },
});
