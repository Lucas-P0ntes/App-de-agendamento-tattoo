import React, { useEffect } from 'react';

//import para navegaçao entre paginas
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
//paginas
import {Welcome} from './src/pages/Welcome'
import {escolha} from './src/pages/escolha'
import { principal } from './src/pages/principal'
import {Tamanho} from './src/pages/Tamanho'
import { abaprincipal } from './src/pages/abaprincipal';
import { Meusagendametos } from './src/pages/Meusagendamentos';
import { Alert, BackHandler } from 'react-native';
import {login} from './src/pages/login'
import { cadastrar } from './src/pages/cadastrar';
import { calendario } from './src/pages/calendario';
import {sucesso} from './src/pages/sucesso'



const Stack = createStackNavigator();



export default function App(){


  



const backPressed=()=>{
        Alert.alert(
            'Exit App',
            'Do you want to exit ?',
            [
                {text:'yes', onPress :()=>BackHandler.exitApp()},
                {text:'No'}
            ],
            {cancelable:false}
        )
        return true
}
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode = "none" >
        <Stack.Screen name ="Welcome" component ={Welcome}/>
        <Stack.Screen name = "escolha" component ={escolha}/>
        <Stack.Screen name = "principal" component ={principal}/>
        <Stack.Screen name = "Tamanho" component ={Tamanho}/>
        <Stack.Screen name = "abaprincipal" component ={abaprincipal}/>
        <Stack.Screen name = "Meusagendametos" component ={Meusagendametos}/>
        <Stack.Screen name = "login" component ={login}/>
        <Stack.Screen name = "cadastrar" component ={cadastrar}/>
        <Stack.Screen name = "calendario" component ={calendario}/>
        <Stack.Screen name = "sucesso" component ={sucesso}/>
        
        
        
        
        
      
      </Stack.Navigator>
    </NavigationContainer>
    
    

    );
}
//<Stack.Screen name = "cadastrar" component ={cadastrar}/>
