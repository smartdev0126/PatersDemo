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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import FilteringComponent from "../components/FilteringComponent";

import SwitchComponent from "../components/SwitchComponent";
import { BottomSheet } from "react-native-btr";
export default function Filtering() {
  const [visible9, setVisible9] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible11, setVisible11] = useState(false);
  const [visible12, setVisible12] = useState(false);
  const [visible13, setVisible13] = useState(false);
  const [visible15, setVisible15] = useState(false);

  const toggleBottomNavigationView9 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible9(!visible9);
  };
  const toggleBottomNavigationView7 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible7(!visible7);
  };
  const toggleBottomNavigationView2 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible2(!visible2);
  };
  const toggleBottomNavigationView4 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible4(!visible4);
  };
  const toggleBottomNavigationView5 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible5(!visible5);
  };
  const toggleBottomNavigationView6 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible6(!visible6);
  };
  const toggleBottomNavigationView8 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible8(!visible8);
  };
  const toggleBottomNavigationView11 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible11(!visible11);
  };
  const toggleBottomNavigationView12 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible12(!visible12);
  };
  const toggleBottomNavigationView13 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible13(!visible13);
  };
  const toggleBottomNavigationView15 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible15(!visible15);
  };
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Photo</Text>
        </View>

        <SwitchComponent name={"Main Photo Registered"} />
        <SwitchComponent name={"Sub-Photo Registered"} />

        <View style={styles.Line}></View>

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Basic Profile</Text>
        </View>

        <FilteringComponent name={"Age"} />
        <FilteringComponent
          onPress={toggleBottomNavigationView2}
          name={"Lives In"}
        />
        <FilteringComponent name={"Height"} />
        <FilteringComponent
          onPress={toggleBottomNavigationView4}
          name={"Body Shape"}
        />
        <FilteringComponent
          onPress={toggleBottomNavigationView5}
          name={"Annual Income"}
        />
        <FilteringComponent
          onPress={toggleBottomNavigationView6}
          name={"Occupation"}
        />
        <FilteringComponent
          onPress={toggleBottomNavigationView7}
          name={"Academic Background"}
        />
        <FilteringComponent
          onPress={toggleBottomNavigationView8}
          name={"Hometown"}
        />
        <FilteringComponent
          onPress={toggleBottomNavigationView9}
          name={"Children"}
        />

        <View style={styles.Line}></View>
        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Personality/Private</Text>
        </View>

        <FilteringComponent name={"Personality"} />
        <FilteringComponent
          onPress={toggleBottomNavigationView11}
          name={"Alcohol"}
        />
        <FilteringComponent
          onPress={toggleBottomNavigationView12}
          name={"Cigarette"}
        />

        <View style={styles.Line}></View>
        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Requests Untill You Meet,Date Area</Text>
        </View>

        <FilteringComponent
          onPress={toggleBottomNavigationView13}
          name={"Requests Untill You Meet"}
        />
        <FilteringComponent name={"Place To Go On A First Date"} />
        <View style={styles.Line}></View>

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Other Profile</Text>
        </View>
        <SwitchComponent name={"Favorite/Hobby Registered"} />

        <View style={styles.TextContainer}>
          <Text style={styles.text1}>Free Writing</Text>
        </View>

        <View style={styles.TextInputContainer}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.Line}></View>

        <SwitchComponent name={"Proof Of Annual Income"} />
        <SwitchComponent name={"ID Checked"} />
        <SwitchComponent name={"Online Or Not"} />
        <SwitchComponent name={"Registered Within 3 days"} />

        <FilteringComponent
          onPress={toggleBottomNavigationView15}
          name={"Last Login"}
        />

        <View style={styles.Container2}>
          <View style={styles.LeftContainer}>
            <TouchableOpacity style={styles.input}>
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
          visible={visible9}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView9}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView9}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Children
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Private</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>None</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>1 Child</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>2 Children</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>3 or more</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible7}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView7}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView7}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Academic Background
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Private</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>High School Graduate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Graduate From Junior College</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>College Graduate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Graduate School</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Others</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>

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

        <BottomSheet
          visible={visible4}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView4}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView4}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Body Shape
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Private</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Slim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Slightly Narrow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Usually</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Muscular</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Somewhat chubby</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Fat</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible5}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView5}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView5}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Annual Income
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Private</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>300 Million Yen Or More</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  200 Million Yen to 300 Million Yen
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  100 Million Yen to 200 Million Yen
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  50 Million Yen to 100 Million Yen
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  30 Million Yen to 50 Million Yen
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  20 Million Yen to 30 Million Yen
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  10 Million Yen to 15 Million Yen
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  8 Million Yen to 10 Million Yen
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>6 Million Yen to 8 Million Yen</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>4 Million Yen to 6 Million Yen</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Less Than 4 Million</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible6}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView6}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView6}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Occupation
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Manager/Executiver</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Company/Employees</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>IT Related</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Doctor</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Bug Company</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Consolting</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Beauty Related</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Service Trade</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Apparel Shope</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Creater</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Cival Servant </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Finance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Clerk </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Nurse </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible8}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView8}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView8}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Hometown
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

        <BottomSheet
          visible={visible11}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView11}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView11}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Alcohol
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Do Not Drink</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Drink</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Drink On Occasion</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible12}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView12}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView12}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Cigarette
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Do Not Drink</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Inhale</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Sometime Smooke</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  Do Not Smooke In Front Of Non-Smookers
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  Stop If You Do Not Like The Other Person
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible13}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView13}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView13}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Request Untill You Meet
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  I Want To See You First After Matching
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>I Want To See You If You Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  I Want To Meet You If Coditions Are Right
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>
                  I Want To See You After Exchanging Messages
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Others</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible15}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView15}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView15}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.ChildrenContainer}>
              <View style={styles.LeftChildrenContainer}>
                <Text style={{ marginLeft: hp("2%"), fontWeight: "bold" }}>
                  Last Login
                </Text>
              </View>
              <TouchableOpacity style={styles.RightChildrenContainer}>
                <Text style={styles.text2}>Done</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Do Not Care</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Online</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Within 24 hours</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Within 3 Days</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Within 1 Week</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Within 2 Week</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>Within 1 Month</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TextContainer}>
                <Text style={styles.text1}>1 Month Or More</Text>
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
  input: {
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
});
