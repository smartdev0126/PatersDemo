import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheet } from "react-native-btr";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FilteringComponent from "../components/FilteringComponent";

export default function MeetUpFiltering() {
  const [visible2, setVisible2] = useState(false);

  const toggleBottomNavigationView2 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible2(!visible2);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Basic Profile</Text>
        </View>

        <FilteringComponent name={"Age"} />
        <View style={styles.Line}></View>

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Status</Text>
        </View>

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Free Writing</Text>
        </View>

        <View style={styles.TextInputContainer}>
          <TextInput style={styles.input} />
        </View>

        <FilteringComponent name={"Meet Up Date"} />
        <FilteringComponent
          onPress={toggleBottomNavigationView2}
          name={"Meet Up Location"}
        />

        <View style={styles.Container2}>
          <View style={styles.LeftContainer}>
            <TouchableOpacity style={styles.input1}>
              <Text style={{ fontWeight: "bold" }}>Reset Filtering</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.RightContainer}>
            <TouchableOpacity style={styles.input2}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Filtering With These Criteria
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <BottomSheet
          visible={visible2}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView2}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView2}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Lives In
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Tokyo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Kanegawa Prefecture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Saitama</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Chiba Prefecture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Osaka Prefecture</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Kyoto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Hyogo Prefecture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Nara Prefecture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Aichi Prefecture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Gifu Prefecture</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>
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
  Line: {
    width: wp("100%"),
    height: hp("0.1%"),
    backgroundColor: "black",
    marginTop: hp("2%"),
  },
  TextInputContainer: {
    width: wp("100%"),
    height: hp("7%"),
    // backgroundColor: "red",
    marginTop: hp("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: "100%",
    backgroundColor: "#D3D3D3",
    padding: 10,
  },
  Container2: {
    width: wp("100%"),
    height: hp("8%"),
    // backgroundColor: "red",
    marginTop: hp("1%"),
    flexDirection: "row",
  },
  LeftContainer: {
    width: "50%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  RightContainer: {
    width: "50%",
    height: "100%",
    // backgroundColor: "yellow",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
  },
  input1: {
    width: "90%",
    height: "90%",
    backgroundColor: "white",
    borderWidth: hp("0.1"),
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  input2: {
    width: "90%",
    height: "90%",
    backgroundColor: "#6FBC63",
    borderWidth: hp("0.1"),
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 300,
  },
  ChildrenContainer: {
    width: wp("100%"),
    height: hp("6%"),
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
  },
  LeftChildrenContainer: {
    width: "80%",
    height: "100%",
    // backgroundColor: "#6FBC63",
    justifyContent: "center",
  },
  RightChildrenContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "orange",
    justifyContent: "center",
  },
  text2: {
    fontWeight: "bold",
    color: "#6FBC63",
  },
});
