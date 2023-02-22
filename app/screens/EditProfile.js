import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UpperComponent from "../components/UpperComponent";
import SettingComponent from "../components/SettingComponent";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import EditComponent from "../components/EditComponent";

export default function EditProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <UpperComponent
          onPress={() => navigation.goBack()}
          name="Edit Your Profile"
        />

        <SettingComponent
          onPress={() => navigation.navigate("ProfileSceneByOther")}
          name={"Check The Profile Scene By Others"}
        />

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Main Photo </Text>
        </View>

        <View style={styles.TextContainer2}>
          <Text style={styles.text2}>
            Choose A Picture That Express You Most
          </Text>
        </View>

        <View style={styles.ImageContainer}>
          <View style={styles.MainImageBox}>
            <Image
              style={styles.img}
              source={require("../../assets/editprofile.png")}
            />
          </View>
        </View>

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Sub-Photo </Text>
        </View>

        <View style={styles.TextContainer2}>
          <Text style={styles.text2}>
            Hobbies,Work,Food,Full Body,Pets,Travel
          </Text>
        </View>

        <View style={styles.TextContainer3}>
          <Ionicons
            style={styles.icon}
            name="add-outline"
            size={32}
            color="black"
          />
        </View>
        <View style={styles.TextContainer3}>
          <Text
            style={{
              marginLeft: hp("6%"),
              fontWeight: "bold",
              fontSize: hp("2.5%"),
            }}
          >
            Add
          </Text>
        </View>

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Appeal Video </Text>
        </View>

        <View style={styles.TextContainer4}>
          <Text style={styles.text2}>
            Let Us Convay Your Charm And Expression That Cannot Be Conveyed A
            Photography
          </Text>
        </View>

        <View style={styles.TextContainer3}>
          <Ionicons
            style={styles.icon}
            name="add-outline"
            size={32}
            color="black"
          />
        </View>
        <View style={styles.TextContainer3}>
          <Text
            style={{
              marginLeft: hp("6%"),
              fontWeight: "bold",
              fontSize: hp("2.5%"),
            }}
          >
            Add
          </Text>
        </View>

        <View style={styles.Line}></View>

        <SettingComponent
          onPress={() => navigation.navigate("ProfileSceneByOther")}
          name={"Tweeting"}
        />
        <View style={styles.Line}></View>

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Set Up Your Profile </Text>
        </View>

        <EditComponent name={"Edit Your Self Introduction"} />
        <EditComponent name={"Edit Your Basic Introduction"} />
        <EditComponent name={"Edit Other Profile"} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
    height: hp("4%"),
    // backgroundColor: "red",
    marginTop: hp("1%"),
    justifyContent: "center",
  },
  text2: {
    marginLeft: hp("2%"),
  },
  ImageContainer: {
    width: wp("100%"),
    height: hp("25%"),
    marginTop: hp("1%"),
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  MainImageBox: {
    width: "90%",
    height: "100%",
    // backgroundColor: "blue",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  icon: {
    marginLeft: hp("6%"),
  },
  TextContainer3: {
    width: wp("100%"),
    height: hp("4%"),
    // backgroundColor: "red",
    // marginTop: hp("1%"),
    justifyContent: "center",
  },
  TextContainer4: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "red",
    // marginTop: hp("1%"),
    // justifyContent: "center",
  },
  Line: {
    width: wp("100%"),
    height: hp("0.1%"),
    backgroundColor: "black",
    marginTop: hp("2%"),
  },
});
