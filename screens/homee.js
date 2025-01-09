import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";

// Écran principal
const Home = () => {
  const navigation = useNavigation(); // Ajoute cette ligne ici
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Rang Section */}
        <View style={styles.rankSection}>
          <Text style={styles.rankTitle}>DIAMANT</Text>
          <Text style={styles.rankSubtitle}>rang : diamant</Text>
        </View>

        {/* Macro-nutriments Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>macro-nutriments</Text>
          <View style={styles.macroRow}>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>56g</Text>
              <Text style={styles.macroLabel}>Proteines</Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>64g</Text>
              <Text style={styles.macroLabel}>Glucides</Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>23g</Text>
              <Text style={styles.macroLabel}>Lipides</Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>1763</Text>
              <Text style={styles.macroLabel}>Calories</Text>
            </View>
          </View>
        </View>

        {/* Entraînements Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Entraînements</Text>
          <View style={styles.buttonRow}>
            <View style={styles.macroItem}>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Entrainement')} // Remplace "Profil" par le nom exact de ta page
            >
              <Image
                source={require("../assets/image/dumbbell.png")}
                style={{
                  tintColor: "white",
                  height: 70,
                  width: 70,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.macroLabel}>Démarrer une séance</Text>
            </View>
            <View style={styles.macroItem}>
            <TouchableOpacity style={styles.button}>
            <Image
                source={require("../assets/image/book.png")}
                style={{
                  tintColor: "white",
                  height: 70,
                  width: 70,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.macroLabel}>Modifier les séances</Text>
            </View>
          </View>
        </View>

        {/* eau */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Eau</Text>
          <Image
            source={{ uri: "" }}
            style={styles.image}
          />
        </View>
      </View>
    </ScrollView>
  );
};
// Styles précis pour correspondre à l'image
const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
      backgroundColor: "#000",
    },
    container: {
      flex: 1,
      padding: 16,
    },
    rankSection: {
      marginTop: 50,
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
      left: 30,
      fontSize: 30,
      textDecorationLine: "underline",
  },
  });
  export default Home;
