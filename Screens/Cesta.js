import { View, Text , StyleSheet,Image,TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import carritoJSONJSON from "../assets/data/carrito.json";

export default function Cesta() {
  const datos = carritoJSONJSON;


  return (


   
   <View style={styles.container}>
    <Text style={styles.txt11}>Llenar Carrito</Text>
        <FlatList
        data={datos.productos}
        
          numColumns={2} 
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.btn}>
                <Image source={{ uri: item.imagen }} style={styles.ima} />
               <View style={styles.conp}>
               <Text style={{ fontSize: 15 }}>{item.nombre}</Text>
                <Text style={styles.txt1}>descripcion</Text>
                <Text style={{ fontSize: 10}}>{item.descripcion}</Text>
                <Text style={styles.txt1}>Cantidad</Text>
                <Text style={{ fontSize: 15 }}>{item.cantidad}</Text>
                <Text style={styles.txt1}>Precio</Text>
               </View>
      
                <Text style={{ fontSize: 15 }}>{item.precio}</Text>

              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.txtHeader}>
              <Text style={styles.txtSeccion}>{section.title}</Text>
            </View>
          )}
        />
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 70,
  },
  conp:{
    backgroundColor:'#e1b461',
    alignItems: "center",
    justifyContent: "center",
  

  },

  ima: {
    height: 200,
    width: 170,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
  },
  txtHeader: {
  
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 30,
   
  },
  txt1:{
    fontSize:20,
    fontWeight: "bold",
    color:'#197dda72'
  },
  txt11:{
    fontSize:20,
    fontWeight: "bold",
   
  }
});
