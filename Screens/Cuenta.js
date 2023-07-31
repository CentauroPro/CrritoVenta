
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

export default function Cuenta() {
  return (
    <View style={styles.container}>
      {/* Sección de las imágenes */}
      <View style={styles.cont1}>
        <View style={styles.ima}>
          <Image
            source={require("../assets/l1.png")}
            style={styles.imagenCuenta}
          />
        </View>
        <View style={styles.ima}>
          <Image
            source={require("../assets/l2.png")}
            style={styles.imagenCuenta}
          />
        </View>
        <View style={styles.ima}>
          <Image
            source={require("../assets/l4.png")}
            style={styles.imagenCuenta}
          />
        </View>
        <View style={styles.ima}>
          <Image
            source={require("../assets/descarga.png")}
            style={styles.imagenCuenta}
          />
        </View>
      </View>

   
      <View style={styles.cont2}>
        <Text style={styles.texto}>KING FASSION</Text>
      </View>
      <View>
        <Image
          source={require("../assets/images/1366_2000.jpeg")}
          style={styles.imagenCuenta1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  ima: {
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 4/4,
    flexDirection: 'row', 
    width: 90,
  
  },
  imagenCuenta: {
    width: 70,
    height: 80,
    borderRadius: 20,
  },
  imagenCuenta1: {
    width: 350,
    height: 210,
    borderRadius: 10,
  },

  cont1: {
    backgroundColor: "#ffffff9b",
    borderRadius: 40,
    paddingVertical: 20,
    flexDirection: 'row', 
    paddingHorizontal:150
  },
  cont2: {
    flex: 1,
    backgroundColor:"#ffffffa0",
    padding: 80,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal:150

  },
  texto: {
    fontSize: 16,
    color: "#0c0202",
    marginBottom: 10,
  },
});