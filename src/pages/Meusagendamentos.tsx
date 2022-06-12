import React, { useEffect } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ScrollView,ImageBackground, BackHandler,Alert} from 'react-native';
import{getStatusBarHeight} from 'react-native-iphone-x-helper';
import fundo from  '../img/fundo.png';

export function Meusagendametos({navigation}: {navigation: any}){
 

    return(
        
        <View style={style.conteiner}  >
            
            <ImageBackground source={fundo} style={style.image}>
        
            <Text style={style.Titulo}>
                Meus Agendamentos
            </Text>
            <ScrollView style={style.scroll}>
            <TouchableOpacity style={style.button}>
                <Text style={style.text}>
                Vamos entrar em contato{"\n"}
                para confirmar.

                </Text>
                
           </TouchableOpacity >
           </ScrollView>
           <TouchableOpacity style={style.button1} onPress={()=>navigation.navigate('abaprincipal')}>
                     <Text style={style.butttext1}>
                  Voltar
                   </Text>
                </TouchableOpacity>
           </ImageBackground>

        </View>
)
}
const style=StyleSheet.create({
    conteiner:{
        marginTop: getStatusBarHeight(),
     

    },

    scroll:{
      
      
    },
    Titulo:{
        
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        color:'#575656'
    },
    button:{
        marginTop:10,
        marginBottom:10,
        height:100,
        width:330,
        backgroundColor:'#575656',
        borderRadius:5,
        justifyContent:"center"
        
    },
    text:{
        textAlign:'center',
         
        fontSize:30,
        fontWeight:'bold',
        color:'#000000'
    

    },
    image: {
        
        alignItems: 'center',
        width: '100%', 
        height: '100%',
      },
      button1:{
        alignSelf: 'flex-start',   
        justifyContent: 'center',
        width: 100,
        height: 50,
        backgroundColor:'#575656',
        borderRadius:5,
        marginBottom:10,
        
       
      },
      butttext1:{
        
        color:'#000000',
       fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      },
    



}
)
