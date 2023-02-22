import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";

import UpperComponent from "../components/UpperComponent";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfileDetail({ navigation, route }) {
  const [data, setdata] = useState(route.params.data);
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <UpperComponent onPress={() => navigation.goBack()} name={data.name} />

        <View style={styles.ImageContainer}>
          <View style={styles.imagebox}>
            <Image source={data.image} style={styles.img} />
          </View>
        </View>

        <View style={styles.LikeContainer}>
          <View style={styles.LeftContainer}>
            <Ionicons
              style={{ marginLeft: hp("2%") }}
              name="heart-outline"
              size={25}
              color="black"
            />
            <Text>45 Likes!</Text>
          </View>
          <View style={styles.RightContainer}>
            <Ionicons name="ellipse" size={20} color="green" />
            <Text>online</Text>
          </View>
        </View>

        <View style={styles.MiddleImageContainer}>
          <View style={styles.LeftImageContainer}>
            <Image source={data.image} style={styles.img} />
          </View>
          <View style={styles.RightImageContainer}>
            <Image source={data.image} style={styles.img} />
          </View>
        </View>

        <View style={styles.TextContainer2}>
          <Text style={styles.text2}>Self Introduction</Text>
        </View>

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>
            Thank You In Advance Rather Than Thinking Too Much.Act first cherish
            Meeting People.Please Message Me With A Certain Condition.
          </Text>
        </View>

        <View style={styles.TextContainer2}>
          <Text style={styles.text2}>Appearance</Text>
        </View>

        <View style={styles.LikeContainer}>
          <View style={styles.LeftContainer}>
            <Text style={{ marginLeft: hp("2%") }}>Height</Text>
          </View>
          <View style={styles.RightContainer}>
            <Text>185cm</Text>
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
  ImageContainer: {
    width: wp("100%"),
    height: hp("30%"),
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  imagebox: {
    width: "90%",
    height: "100%",
    // backgroundColor: "green",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  LikeContainer: {
    width: wp("100%"),
    height: hp("4%"),
    marginTop: hp("1%"),
    // backgroundColor: "red",
    flexDirection: "row",
  },
  LeftContainer: {
    width: "60%",
    height: "100%",
    // backgroundColor: "blue",
    // justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  RightContainer: {
    width: "40%",
    height: "100%",
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  TextContainer: {
    width: wp("100%"),
    height: hp("9%"),
    marginTop: hp("1%"),
    // backgroundColor: "red",
  },
  text1: {
    marginHorizontal: "2%",
  },
  MiddleImageContainer: {
    width: wp("100%"),
    height: hp("20%"),
    backgroundColor: "red",
    flexDirection: "row",
  },
  LeftImageContainer: {
    width: "50%",
    height: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  RightImageContainer: {
    width: "50%",
    height: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  TextContainer2: {
    width: wp("100%"),
    height: hp("4%"),
    // backgroundColor: "red",
    marginTop: hp("3%"),
    justifyContent: "center",
  },
  text2: {
    fontWeight: "bold",
    marginLeft: hp("3%"),
    fontSize: hp("2.1%"),
  },
});
