import React, { useEffect } from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,TextInput,StyleSheet,TouchableOpacity,ScrollView, View, BackHandler, Alert} from 'react-native';
 import{getStatusBarHeight} from 'react-native-iphone-x-helper'
import logo from '../img/logo.png'
import fundo from '../img/fundo.png'

export function abaprincipal({navigation}: {navigation: any}){
 
    
   
    
    const backPressed=()=>{
            Alert.alert(
                'Exit App',
                'Você quer sair ?',
                [
                    {text:'Sim', onPress :()=>BackHandler.exitApp()},
                    {text:'Não'}
                ],
                {cancelable:false}
            )
            return true
    }




    return(
        <View style={style.l}>
        
            <ImageBackground source={fundo} style={style.image}>
               
                    <View style={{flexDirection:"row",flex:1,marginTop:30,}}>
                    <Text style={{color:"#575656",fontSize:30,}}>
                    {'\n'}
                         Qual a tattoo{"\n"} que vamos {'\n'}fazer hoje ?
                     </Text>

                    
                     <Image source={logo} style={style.Image}/>
                     

                     
                     </View>
                   
                
                  
                 <View style={style.conteiner}>
                 <TouchableOpacity style={style.button}>
                       <Text style={style.text} onPress={()=>navigation.navigate('escolha')}  >
                            Perfil

                          </Text>
                
                 </TouchableOpacity >
                  <TouchableOpacity style={style.button}>
                      <Text style={style.text} onPress={()=>navigation.navigate('principal')}>
                          Agendar
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.button3} onPress={()=>navigation.navigate('Meusagendametos')}>
                         <Text style={style.text}>
                            Meus Agendamentos
                          </Text>
                     </TouchableOpacity>    
                     </View >
                     <View >
                      <TouchableOpacity style={style.button2} onPress={backPressed}>
                              <Text style={style.text}>
                                 Sair
                    
                              </Text>
                          </TouchableOpacity>        
                         </View>
                    
            
              
       
            </ImageBackground>
        </View>
    
        
)}

const style =StyleSheet.create({
    l:{
     
        marginTop: getStatusBarHeight(),
       
        
        
    },
  
    conteiner:{
        
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
    
   
    

    },
    button2:{ 
       
        marginTop:0,
        borderWidth:2,
        borderColor:"#000000",
        marginBottom:10,
        height:90,
        width:150,
        backgroundColor:'#575656',
        borderRadius:5,
        justifyContent:"center",
    },
    button3:{ 
       
        marginTop:0,
        borderWidth:2,
        borderColor:"#000000",
        marginBottom:10,
        height:90,
        width:315,
        backgroundColor:'#575656',
        borderRadius:5,
        justifyContent:"center",
    },
    button:{ 
       
        
        marginBottom:10,
        height:90,
        width:150,
        backgroundColor:'#575656',
        borderRadius:5,
        justifyContent:"center",
        borderWidth:2,
        borderColor:"#000000",
        

        
        
        
    },
    text:{
        textAlign:'center',
         
        fontSize:30,
        fontWeight:'bold',
        color:'#000000'
       
    

    },
    Image:{
        
        borderRadius:450,
        width:200,
        height:200,

    },
    image: {
        alignItems: 'center',
       
        width: '100%', 
        height: '100%',
      },
    
})