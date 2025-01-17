import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, BrowserRouter, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderTitle } from '@react-navigation/elements'

import Apresentacao from './screens/Apresentacao';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import PaginaInicial from './screens/PaginaInicial';
import Redefinir from './screens/Redefinir';
import Nutricao from './screens/Nutricao';
import Yoga from './screens/Yoga';
import Frequencia from './screens/Frequencia';
import Corrida from './screens/Corrida';
import Caminhada from './screens/Caminhada';
import Avaliacao from './screens/Avaliacao';
import Treinos from './screens/Treinos';
import Musculacao from './screens/Musculacao'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="apresentacao" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="apresentacao" component={Apresentacao}  />
        <Drawer.Screen name="cadastro" component={Cadastro} />
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="" component={PaginaInicial} 
        options={{  
          headerShown: true, headerBackground: () => ( 
          <View  style={{
            height: 56, backgroundColor: '#03466F',  
            color: 'white' }}>
            <HeaderTitle style={{position: 'relative', top: 20, color: 'white', textAlign: 'center'}}>PowerFit</HeaderTitle>
          </View> ) }}
        />
        <Drawer.Screen name="Nutricao" component={Nutricao} />
        <Drawer.Screen name="Redefinir" component={Redefinir} />
        <Drawer.Screen name="frequencia" component={Frequencia} />
        <Drawer.Screen name="yoga" component={Yoga} />
        <Drawer.Screen name="Corrida" component={Corrida} />
        <Drawer.Screen name="Caminhada" component={Caminhada} />
        <Drawer.Screen name="treinos" component={Treinos} />
        <Drawer.Screen name="musculacao" component={Musculacao} />
        <Drawer.Screen name="Avaliacao" component={Avaliacao} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}


