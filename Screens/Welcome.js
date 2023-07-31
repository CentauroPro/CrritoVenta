import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");
const carruselHeight = 0.9; // Porcentaje de altura para el carrusel

export default function Welcome() {
  const imagenes = [
    {
      image:
        "https://img.freepik.com/vector-gratis/venta-moda-pagina-inicio_52683-42556.jpg?w=740&t=st=1690807366~exp=1690807966~hmac=17c486a004501a6dd6b5fe3271043f257db1b821425eaee9bc7b0e5663006108",
    },
    {
      image:
        "https://img.freepik.com/vector-gratis/set-banners-rebajas-moda-foto_52683-13210.jpg?w=740&t=st=1690808058~exp=1690808658~hmac=e4b3ee5a79a778f87037e0e6000d035615feff9e73c0c1de3e3f314b4abfbc83",
    },
    {
      image:
        "https://img.freepik.com/vector-gratis/resumen-moda-venta-instagram-historias_52683-25354.jpg?w=740&t=st=1690808158~exp=1690808758~hmac=81d972629638068f15c1d193e67fee80c7585bc9ce37577909cacfe5753eda4d",
    },
    {
      image:
        "https://img.freepik.com/vector-gratis/banners-rebajas-moda-foto_52683-21234.jpg?w=740&t=st=1690808292~exp=1690808892~hmac=ea9745aeeeec5356992c61ad9ac6e1dd50b25cb9e5dc41ad0aef8b5f2071b8ee",
    },
    {
      image:
        "https://img.freepik.com/vector-gratis/set-plantillas-historias-instagram-rebajas_23-2148213269.jpg?w=740&t=st=1690808327~exp=1690808927~hmac=c9cf4128c3f8586115cf9a90397428f9307ac9e0020face38fe6a8c39e24e05b",
    },
    {
      image:
        "https://img.freepik.com/vector-gratis/plantilla-banners-viernes-negro-diseno-plano_23-2148310541.jpg?w=740&t=st=1690807504~exp=1690808104~hmac=ee32f34b2cfe452170b9cbd4bf3d81e0e7c88fca7d2244a6f41c88d8a3556ce9",
    },
  ];

  return (
    <ImageBackground  style={styles.container0} source={require('../assets/images/gettyimages-1330995546-1024x1024.jpg')} >
 
 <Text
        style={{ alignItems: "center", justifyContent: "center", fontSize: 30 }}
      >
        KING FASIION
      </Text>

      <TouchableOpacity style={styles.cont2}>
        <Button title="Hombre" color={"#555252"} style={[styles.tzt1]} />
        <Button title="Mujer" color={"#555252"} style={[styles.tzt2]} />
        <Button title="Niño" color={"#555252"} style={[styles.tzt4]} />
        <Button title="Niña" color={"#555252"} style={[styles.tzt5]} />
        <Button title="Bebes" color={"#555252"} style={[styles.tzt3]} />
      </TouchableOpacity>

      <Swiper
        style={[styles.swiperContainer, { height: width * carruselHeight }]}
      >
        {imagenes.map((imagen, index) => (
          <View
            key={index}
            style={[styles.slide, { height: width * carruselHeight }]}
          >
            <Image
              source={{ uri: imagen.image }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        ))}
      </Swiper>
    </ImageBackground>
  
   
  );
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  cont1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cont2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 400 / 2,
  },
  slide: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "120%",
    aspectRatio: 4 / 4,
  },
  images: {
    width: 20,
    height: 20,
  },
  tzt: {
    alignItems: "center",
    justifyContent: "center",
  },
  tzt1: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 9,
    borderRadius: 400 / 2,
  },
  tzt2: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 7,
  },
  tzt3: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 7,
  },
  tzt4: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 7,
  },
  tzt5: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 7,
    borderRadius: 400 / 2,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
