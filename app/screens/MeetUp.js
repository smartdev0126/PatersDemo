import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MeetUpImmediately from "./MeetUpImmediately";
import ByGenre from "./ByGenre";

const Tab = createMaterialTopTabNavigator();

export default function MeetUp({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.TopBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeetUpFiltering")}
          style={styles.LeftContainer}
        >
          <Ionicons name="search-outline" size={32} color="#000000" />
        </TouchableOpacity>
        <View style={styles.MiddleContainer}>
          <Text style={styles.text1}>Meet Up</Text>
        </View>
        <View style={styles.RightContainer}></View>
      </View>

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#000000",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "#D9D9D9" },
        }}
      >
        <Tab.Screen
          name="MeetUpImmediately"
          component={MeetUpImmediately}
          options={{ tabBarLabel: "Meet Up Immediately" }}
        />
        <Tab.Screen
          name="ByGenre"
          component={ByGenre}
          options={{ tabBarLabel: "By Genre" }}
        />
      </Tab.Navigator>
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
});
