import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";

// Écran principal
const Training = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Mes séances</Text>
        <TouchableOpacity>
            <Image
            source={require("../assets/image/modifier.png")}
            style={{
                tintColor: "white",
                height: 40,
                width: 40,
                left: 280,
                top: -8,
            }}>
             </Image>
        </TouchableOpacity>
        <View style={{
            height: 50,
        }}></View>
      <View style={styles.seance}>
        <Text style={styles.seanceTitle}>Push</Text>
        <TouchableOpacity style={{
            position: "absoute",
        }}>
            <Image
            source={require("../assets/image/play.png")}
            style={{
                tintColor: "white",
                height: 40,
                width: 40,
                marginTop: 4,
                left: 135,
                top: -50,
                position: "absolute"
            }}
            ></Image>
         </TouchableOpacity>
         <Text style={styles.seanceTime}>≃1h30</Text>
         </View>
         <View style={styles.seance}>
        <Text style={styles.seanceTitle}>Pull</Text>
        <TouchableOpacity style={{
            position: "absoute",
        }}>
            <Image
            source={require("../assets/image/play.png")}
            style={{
                tintColor: "white",
                height: 40,
                width: 40,
                marginTop: 4,
                left: 135,
                top: -50,
                position: "absolute"
            }}
            ></Image>
         </TouchableOpacity>
         <Text style={styles.seanceTime}>≃1h30</Text>
         </View>
         <View style={styles.seance}>
        <Text style={styles.seanceTitle}>Legs</Text>
        <TouchableOpacity style={{
            position: "absoute",
        }}>
            <Image
            source={require("../assets/image/play.png")}
            style={{
                tintColor: "white",
                height: 40,
                width: 40,
                marginTop: 4,
                left: 135,
                top: -50,
                position: "absolute"
            }}
            ></Image>
         </TouchableOpacity>
         <Text style={styles.seanceTime}>≃1h30</Text>
         </View>
         <View style={styles.card}>
            <Text style={styles.cardTitle}>Besoin d'aide ?</Text>
            <Text style={{
                color: "white",
                fontSize: 18,
                width: 300,
            }}>allez voir nos tutoriels pour perfectionner votre exécution sur vos exercices !</Text>
         </View>
         </View>

    </ScrollView>
  );
};
// Styles précis pour correspondre à l'image
const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
      backgroundColor: "black",
    },
    container: {
      flex: 1,
      padding: 16,
    },
    rankSection: {
      marginTop: 100,
      height: 200,
      width: 200,
      alignItems: "center",
      borderRadius: 100,
      borderWidth: 3,
      borderColor: "blue",
      marginLeft: 65,
      marginVertical: 20,
    },
    rankTitle: {
      marginTop: 65,
      fontSize: 30,
      fontFamily: "Anton",
      color: "#4A90E2",
    },
    rankSubtitle: {
      fontSize: 16,
      color: "#fff",
      fontFamily: "Anton",
    },
    card: {
      backgroundColor: "#222",
      borderRadius: 10,
      padding: 16,
      marginBottom: 16,
    },
    cardTitle: {
      fontSize: 18,
      color: "#fff",
      marginBottom: 10,
      fontFamily: "Anton",
    },
    macroRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    macroItem: {
      alignItems: "center",
      marginBottom: 10,
      
    },
    macroValue: {
      lineHeight: 49,
      textAlign: "center",
      fontSize: 20,
      backgroundColor: "grey",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 50,
      color: "#fff",
      fontFamily: "Anton",
    },
    macroLabel: {
      fontSize: 14,
      color: "#fff",
      
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      flex: 1,
      backgroundColor: "grey",
      padding: 10,
      borderRadius: 30,
      marginHorizontal: 5,
    },
    buttonText: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
    },
    image: {
      width: "100%",
      height: 120,
      borderRadius: 8,
      marginTop: 10,
    },
    title: {
        fontFamily: "Anton",
        color: "#fff",
        top: 30,
        fontSize: 30,
        textDecorationLine: "underline",
    },
    seance: {
        backgroundColor: "#222",
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        width: 200,
      },
      seanceTitle: {
        fontSize: 24,
        color: "#fff",
        marginBottom: 10,
        fontFamily: "Anton",
      },
      seanceTime: {
        fontSize: 14,
        color: "white",
      },
  });
export default Training;