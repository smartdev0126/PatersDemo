import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeComponent from "../components/HomeComponent";

export default function Home({ navigation }) {
  const data = [
    {
      name: "Masa",
      image: require("../../assets/HomeImages/HomeCard1.png"),
    },
    {
      name: "Lena",
      image: require("../../assets/HomeImages/HomeCard2.png"),
    },

    {
      name: "Amasa",
      image: require("../../assets/HomeImages/HomeCard4.png"),
    },
    {
      name: "Jhon",
      image: require("../../assets/HomeImages/HomeCard5.png"),
    },
    {
      name: "Alhai",
      image: require("../../assets/HomeImages/HomeCard6.png"),
    },
    {
      name: "Adina",
      image: require("../../assets/HomeCard1.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Filtering")}
          style={styles.LeftContainer}
        >
          <Ionicons name="search-outline" size={32} color="#000000" />
        </TouchableOpacity>
        <View style={styles.MiddleContainer}>
          <Text style={styles.text1}>Paters</Text>
        </View>
        <View style={styles.RightContainer}>
          <Ionicons name="flame-outline" size={32} color="#000000" />
        </View>
      </View>

      {/* <HomeComponent /> */}

      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <HomeComponent
              onPress={() => {
                navigation.navigate("ProfileDetail", { data: item });
              }}
              image={item.image}
              name={item.name}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
