import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,TextInput,StyleSheet,TouchableOpacity,ScrollView, View} from 'react-native';
import{getStatusBarHeight} from 'react-native-iphone-x-helper'
import {Header2} from  '../components/Header2';
import fundo from '../img/fundo.png';
import tatoogrande from '../img/tatoogrande.png';
import tatoomedia from '../img/tatoomedia.png';
import tatoopequena from '../img/tatoopeguena.png';
export  function Tamanho({navigation}: {navigation: any}){
 
    return(
             <View style={style.container}>
              <ImageBackground source={fundo} style={style.image}>
                  <View style={style.head}>
                      <Header2/>
                  </View>

                  <View style={style.Scroll}>

                   <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('calendario')}>
                     <Text style={style.butttext}>
                    
                     Pequena:{"\n"}
                     Tempo{"\n"}
                     30-60{"\n"}
                     minutos
                     </Text>
                     <Image source={tatoopequena} style={style.Image}/>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('calendario')}>
                     <Text style={style.butttext}>
                    Media:{"\n"}
                    Tempo{"\n"}
                     2h-3h{"\n"}
                     Horas

                     </Text>
                     <Image source={tatoomedia} style={style.Image}/>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('calendario')}>
                     <Text style={style.butttext}>
                    Grande:{"\n"}
                    Mais de uma sessão
                     
                     
                     </Text>
                     <Image source={tatoogrande} style={style.Image}/>
                   </TouchableOpacity>
                   </View>
                   <TouchableOpacity style={style.button1} onPress={()=>navigation.navigate('principal')}>
                     <Text style={style.butttext1}>
                     Voltar
                   </Text>
                </TouchableOpacity>

              </ImageBackground> 
             </View>
    )
}
const style = StyleSheet.create({
      container: {
        marginTop: getStatusBarHeight(),
       
      },
      head:{
        
      },
      titel:{
        fontSize: 20,
        color: "#575656",
        fontWeight: 'bold',

      },
      Scroll:{
 flex:1,
 paddingHorizontal: 0,
 

      },
    
       image: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', 
        height: '100%',
      },

      button:{
        
      justifyContent:'flex-end',
      flexDirection:'row',
        borderRadius:5,
        width: 330, 
        height: 125,
        backgroundColor:'#575656',
        marginBottom:3,
        marginTop:7,borderWidth:2,
        borderColor:"#000000",
      
        },
        Image:{
          flex:1,
          alignSelf:"flex-end",
          borderRadius:5,
          height: 120,
          width: 300,
          },

        butttext:{
          flex:1,
          color:'#000000',
         fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal:2,
       
        },
        button1:{
          alignSelf: 'flex-start',   
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
           height: 50,
          backgroundColor:'#575656',
          borderRadius:5,
          marginBottom:10,
          marginTop:10,borderWidth:2,
          borderColor:"#000000",
         
        },
        butttext1:{
          
          color:'#000000',
         fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        },
        
       
      
})