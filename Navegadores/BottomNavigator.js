import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screeens
import Welcome from "../Screens/Welcome";
import Login from "../Screens/Categoria";
import Cuenta from "../Screens/Cuenta";
import Historial from "../Screens/Cesta";

//Iconos
import { Feather } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Inicio">
      <Tab.Screen name="InicioTab" component={Welcome} options={{
                    tabBarLabel: 'Bienvenido',
                    headerTitle: 'Bienvenido',
                    headerStyle: { backgroundColor:'#3bc1d2d1'},
                    headerTintColor: 'white',

                    tabBarIcon: () => (
                        <Feather name="home" size={30} color={'#040b04fd'} />)}}/>
                    
      <Tab.Screen name="loginTab" component={Login} options={{
                    tabBarLabel: 'Categoria',
                    headerTitle: 'Categoria',
                    headerStyle: { backgroundColor: '#2bc1d2d1' },
                    headerTintColor: 'white',

                    tabBarIcon: () => (
                      <AntDesign name="login" size={24} color='#000000f8' />)}}/>
      <Tab.Screen name="RegistroTab" component={Historial}  options={{
                    tabBarLabel: 'Cesta',
                    headerTitle: 'Cesta',
                    headerStyle: { backgroundColor: '#2bc1d2d1' },
                    headerTintColor: 'white',

                    tabBarIcon: () => (
                      <MaterialCommunityIcons name="shopping-search" size={24} color="black" />)}}/>
      <Tab.Screen name="CuentaTab" component={Cuenta}  options={{
                    tabBarLabel: 'Cuenta',
                    headerTitle: 'Cuenta',
                    headerStyle: { backgroundColor: '#2bc1d2d1' },
                    headerTintColor: 'white',

                    tabBarIcon: () => (
                      <MaterialCommunityIcons name="account-circle" size={24} color='#000000ff' />)}}/>
    
    </Tab.Navigator>
  );
}
export default function BottonNavigation() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
