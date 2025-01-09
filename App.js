import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import Home from "./screens/homee";
import Training from "./screens/training";
import Nutrition from "./screens/nutrition";
import Forum from "./screens/forum";
import Parametre from "./screens/parametre";
import { useNavigation } from '@react-navigation/native';

// Écran principal

// Navigation avec onglets
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Anton: require("./assets/fonts/Anton-Regular.ttf"), // Charge la police ici
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Accueil") {
              iconName = "home";
            } else if (route.name === "Nutrition") {
              iconName = "nutrition";
            } else if (route.name === "Parametre") {
              iconName = "settings";
            } else if (route.name === "Entrainement") {
              return (
                <Image
                  source={require("./assets/image/dumbbell.png")} // Change ce chemin par celui de ton image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: "grey",
                  }}
                />
              );
            } else if (route.name === "Forum") {
              return (
                <Image
                  source={require("./assets/image/forum.png")} // Change ce chemin par celui de ton image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: "grey",
                  }}
                />
              );
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#4A90E2",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
          },
        })}
      >
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Entrainement" component={Training} />
        <Tab.Screen name="Nutrition" component={Nutrition}></Tab.Screen>
        <Tab.Screen name="Forum" component={Forum}></Tab.Screen>
        <Tab.Screen name="Parametre" component={Parametre}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
