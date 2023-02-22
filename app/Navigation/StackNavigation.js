// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash1 from "../screens/Splash1";
import Splash2 from "../screens/Splash2";
import Splash3 from "../screens/Splash3";
import Splash5 from "../screens/Splash5";
import Splash4 from "../screens/Splash4";
import SignUp1 from "../screens/SignUp1";
import SignUp2 from "../screens/SignUp2";
import SignUp3 from "../screens/SignUp3";
import SignUp4 from "../screens/SignUp4";
import Login from "../screens/Login";
import ResetPassword from "../screens/ResetPassword";
import ResettingPhoneNumber from "../screens/ResettingPhoneNumber";
import BottomNavigation from "./BottomNavigation";
import SkippedUsers from "../screens/SkippedUsers";
import Settings from "../screens/Settings";
import EditIcon from "../screens/EditIcon";
import AccessibilitySetting from "../screens/AccessibilitySetting";
import ChangePassword from "../screens/ChangePassword";
import ChangePhoneNumber from "../screens/ChangePhoneNumber";
import ChangingMobileNumber from "../screens/ChangingMobileNumber";
import NotificationSetting from "../screens/NotificationSetting";
import FootPrintSetting from "../screens/FootPrintSetting";
import PinSetting from "../screens/PinSetting";
import PrivacyModeSetting from "../screens/PrivacyModeSetting";
import MessangeTemplate from "../screens/MessangeTemplate";
import ProfileDetail from "../screens/ProfileDetail";
import Filtering from "../screens/Filtering";
import MeetUpFiltering from "../screens/MeetUpFiltering";
import EditProfile from "../screens/EditProfile";
import ProfileSceneByOther from "../screens/ProfileSceneByOther";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Splash4" component={Splash4} />
        <Stack.Screen name="Splash5" component={Splash5} />
        <Stack.Screen name="SignUp1" component={SignUp1} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
        <Stack.Screen name="SignUp3" component={SignUp3} />
        <Stack.Screen name="SignUp4" component={SignUp4} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen
          name="ResettingPhoneNumber"
          component={ResettingPhoneNumber}
        />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="SkippedUsers" component={SkippedUsers} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="EditIcon" component={EditIcon} />
        <Stack.Screen
          name="AccessibilitySetting"
          component={AccessibilitySetting}
        />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} />
        <Stack.Screen
          name="ChangingMobileNumber"
          component={ChangingMobileNumber}
        />
        <Stack.Screen
          name="NotificationSetting"
          component={NotificationSetting}
        />
        <Stack.Screen name="FootPrintSetting" component={FootPrintSetting} />
        <Stack.Screen name="PinSetting" component={PinSetting} />
        <Stack.Screen
          name="PrivacyModeSetting"
          component={PrivacyModeSetting}
        />
        <Stack.Screen name="MessangeTemplate" component={MessangeTemplate} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
        <Stack.Screen name="Filtering" component={Filtering} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen
          name="ProfileSceneByOther"
          component={ProfileSceneByOther}
        />
        <Stack.Screen name="MeetUpFiltering" component={MeetUpFiltering} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
