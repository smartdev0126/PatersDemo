import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

import { Foundation } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.TopBox}>
          <TouchableOpacity style={styles.LeftContainer}>
            <Ionicons name="alert-circle-outline" size={32} color="#000000" />
          </TouchableOpacity>
          <View style={styles.MiddleContainer}>
            <Text style={styles.text1}>My Page</Text>
          </View>
          <TouchableOpacity
            style={styles.RightContainer}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="settings-outline" size={32} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.IconAndNameContainer}>
          <View style={styles.LeftIconContainer}>
            <Image
              style={styles.img3}
              source={require("../../assets/ProfileScene/Men1.png")}
            />
          </View>
          <View style={styles.RightNameContainer}>
            <View style={styles.InnerTopContainer}>
              <Text style={styles.text2}>NAME</Text>
            </View>
            <View style={styles.InnerBottomContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
                style={styles.BtnContainer}
              >
                <Text style={styles.text3}>Edit My Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.PiontContainer}>
          <View style={styles.LeftPointContainer}>
            <Text style={{ marginLeft: hp("3%") }}>Remaining</Text>
            <Text style={{ marginLeft: hp("6%") }}>22</Text>
          </View>
          <View style={styles.RightPointContainer}>
            <TouchableOpacity style={styles.BtnContainer2}>
              <Text style={styles.text4}>Buy Points</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.SpaceContainer}></View>

        <View style={styles.IconContainer}>
          <View style={styles.InnerContainer}>
            <View style={styles.IconMainContainer}>
              <Ionicons
                name="notifications-outline"
                size={32}
                color="#000000"
              />
              <Text style={styles.text5}>Notification</Text>
            </View>
            <View style={styles.IconMainContainer}>
              <Foundation name="foot" size={24} color="black" />
              <Text style={styles.text5}>Vistors</Text>
            </View>
            <View style={styles.IconMainContainer}>
              <Ionicons name="settings-outline" size={32} color="#000000" />
              <Text style={styles.text5}>Appointment</Text>
            </View>
          </View>
        </View>

        <View style={styles.IconContainer}>
          <View style={styles.InnerContainer}>
            <View style={styles.IconMainContainer}>
              <Ionicons name="star-outline" size={32} color="#000000" />
              <Text style={styles.text5}>Favorite</Text>
            </View>
            <View style={styles.IconMainContainer}>
              {/* <IconFill name="form" size={32} /> */}
              <Ionicons name="albums-outline" size={32} color="#000000" />

              <Text style={styles.text5}>Notes</Text>
            </View>
            <View style={styles.IconMainContainer}>
              <Ionicons
                name="person-circle-outline"
                size={32}
                color="#000000"
              />
              <Text style={styles.text5}>From You</Text>
            </View>
          </View>
        </View>

        <View style={styles.ImageContainer}>
          <Image
            style={styles.img}
            source={require("../../assets/Frame270.png")}
          />
        </View>

        <View style={styles.BottomImageContainer}>
          <View style={styles.LeftImageContainer}>
            <Image
              style={styles.img2}
              source={require("../../assets/Frame271.png")}
            />
          </View>
          <View style={styles.RightImageContainer}>
            <Image
              style={styles.img2}
              source={require("../../assets/Frame274.png")}
            />
          </View>
        </View>
      </ScrollView>
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
  IconAndNameContainer: {
    width: wp("100%"),
    height: hp("10%"),
    // backgroundColor: "red",
    marginTop: hp("3%"),
    flexDirection: "row",
  },
  LeftIconContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  RightNameContainer: {
    width: "80%",
    height: "100%",
    // backgroundColor: "blue",
  },
  InnerTopContainer: {
    width: "100%",
    height: "50%",
    // backgroundColor: "yellow",
    justifyContent: "center",
  },
  InnerBottomContainer: {
    width: "100%",
    height: "50%",
    // backgroundColor: "pink",
  },
  text2: {
    fontWeight: "bold",
  },
  BtnContainer: {
    width: "40%",
    height: "80%",
    borderWidth: hp("0.1%"),
    borderRadius: 10,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    color: "green",
  },
  PiontContainer: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "red",
    marginTop: hp("2%"),
    flexDirection: "row",
  },
  LeftPointContainer: {
    width: "60%",
    height: "100%",
    // backgroundColor: "green",
  },
  RightPointContainer: {
    width: "40%",
    height: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
  },
  BtnContainer2: {
    width: "80%",
    height: "60%",
    borderWidth: hp("0.1%"),
    borderRadius: 10,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  text4: {
    color: "green",
  },
  SpaceContainer: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "red",
  },
  IconContainer: {
    width: wp("100%"),
    height: hp("12%"),
    // backgroundColor: "green",
    alignItems: "center",
  },
  InnerContainer: {
    width: "90%",
    height: "100%",
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  IconMainContainer: {
    width: "33.33%",
    height: "100%",
    // backgroundColor: "blue",
    borderWidth: hp("0.1"),
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  text5: {
    fontWeight: "bold",
  },
  ImageContainer: {
    width: wp("100%"),
    height: hp("18%"),
    // backgroundColor: "blue",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  BottomImageContainer: {
    width: wp("100%"),
    height: hp("15%"),
    marginTop: hp("1%"),
    // backgroundColor: "red",
    flexDirection: "row",
  },
  LeftImageContainer: {
    width: "50%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  RightImageContainer: {
    width: "50%",
    height: "100%",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  img2: {
    width: "90%",
    height: "90%",
  },
  img3: {
    width: "90%",
    height: "90%",
  },
});
