import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import MeetUp from "../screens/MeetUp";
import Message from "../screens/Message";
import ToYou from "../screens/ToYou";
import Profile from "../screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#83F59C",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="MeetUp"
        component={MeetUp}
        options={{
          tabBarLabel: "MeetUp",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="browsers-outline" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ToYou"
        component={ToYou}
        options={{
          tabBarLabel: "ToYou",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
