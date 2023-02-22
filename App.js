import { StyleSheet, Text, View, StatusBar } from "react-native";
import SignUp1 from "./app/screens/SignUp1";
import Splash1 from "./app/screens/Splash1";
import Splash2 from "./app/screens/Splash2";
import Splash3 from "./app/screens/Splash3";
import Splash4 from "./app/screens/Splash4";
import Splash5 from "./app/screens/Splash5";
import SignUp2 from "./app/screens/SignUp2";
import SignUp3 from "./app/screens/SignUp3";
import SignUp4 from "./app/screens/SignUp4";
import ResettingPhoneNumber from "./app/screens/ResettingPhoneNumber";
import Login from "./app/screens/Login";
import ResetPassword from "./app/screens/ResetPassword";
import StackNavigation from "./app/Navigation/StackNavigation";
import ProfileDetail from "./app/screens/ProfileDetail";

export default function App() {
  return (
    <>
      <StatusBar />
      <StackNavigation />
    </>
  );
}
