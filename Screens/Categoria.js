import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Categoria() {

  const abrirPaginaWeb = (url) => {
    Linking.openURL(url);
  };
  const categorias = [
    {
      id: 1,
      nombre: "Hombre",
      imagen:
        "https://www.lolitamoda.com/uploads/post/image/79/41.prendas_esenciales_que_todo_hombre_necesita_en_invierno.jpg",
      urlPagina:
        "https://www.lolitamoda.com/blog/79-13-prendas-imprescindibles-de-hombre-para-invierno",
    },
    {
      id: 2,
      nombre: "Mujer",
      imagen:
        "https://img.freepik.com/fotos-premium/mujer-hipster-estilo-joven-fresco-urbano-ropa-juvenil-casual-moda-gafas-moradas-moda-posa-ciudad-modelo-moda-chica-glamorosa-sienta-palets-madera-calle-estilo-primaveral_338491-9747.jpg?w=740",
      urlPagina:
        "https://tissini.com/blog/moda-y-tendencias/ropa-de-verano-para-mujer/",
    },
    {
      id: 3,
      nombre: "Niño",
      imagen: "https://childrens-spaces.com/wp-content/uploads/2019/02/moda-infantil-810x401.jpg",
      urlPagina:
        "https://childrens-spaces.com/es/moda-infantil-ropa-para-ninos-y-ninas/",
    },
    {
      id: 4,
      nombre: "Bebe",
      imagen: "https://mothercare.es/wp-content/uploads/lo-mejor-en-moda-y-ropa-para-tu-bebe.jpg?v=1674517045",
      urlPagina: "https://www.cheeky.com.ar/",
    },
    {
      id: 5,
      nombre: "Juvenil",
      imagen:
        "https://www.belfusto.com/wp-content/uploads/2022/05/Project-X-Paris-Mejores-marcas-ropa-masculina-juvenil.jpg",
      urlPagina: "https://noticiastu.com/ocio/ropa-juvenil-de-moda/",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>Categorias </Text>
      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.txtCategoria}>{item.nombre}</Text>
            <TouchableOpacity onPress={() => abrirPaginaWeb(item.urlPagina)}>
              <Image
                source={{ uri: item.imagen }}
                style={styles.imagenCategoria}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  txtTitulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  txtCategoria: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imagenCategoria: {
    width: 300,
    height: 320,
    borderRadius: 20,
  },
});
