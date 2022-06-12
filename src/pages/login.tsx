<<<<<<< HEAD
import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,TextInput,StyleSheet,TouchableOpacity,ScrollView, View} from 'react-native';
import logo from '../img/logo.png';
import fundo from '../img/fundo.png'
export  function login({navigation}: {navigation: any}){
 
    return(
             <SafeAreaView style={style.container}>
               <ImageBackground source={fundo} style={style.image}>
               
                 <Image source={logo} style={style.Image}/>
                 <Text style={style.title}>
                    CONECTE-SE
                 </Text>
                 
                 <Text style={style.desc}>
                    USER
                 </Text>
                 <TextInput style={style.input}
                 />
                <Text style={style.desc}>
                    SENHA
                 </Text>
                 <TextInput style={style.input}/>
                
                
                 <TouchableOpacity style={style.b} onPress={()=>navigation.navigate('cadastrar')}  >
                     <Text style={style.btext}>
                         cadastrar
                     </Text>
                 </TouchableOpacity>
                
                <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('abaprincipal')}>
                     <Text style={style.butttext}>
                     Pular
                   </Text>
                </TouchableOpacity>
                
                </ImageBackground> 
             </SafeAreaView>
             
    )
}
const style = StyleSheet.create({
      container: {
        flex:1,
        alignItems: 'center',
        
      },
      title: {
        
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#575656',
      },
      desc:{
        textAlign: 'center', 
        fontSize: 20,
        color:'#ffffff',
        

      },
    Image:{
      flex:1,
      marginTop:10,
      alignItems: 'center',
      height: 100,
      width: 350,
      },
    
       image: {
         flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', 
        height: '100%',
      },
      
        button:{
         
            alignSelf: 'flex-end',   
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
             height: 50,
            backgroundColor:'#575656',
            borderRadius:5,
            marginBottom:10,
            borderWidth:2,
        borderColor:"#000000",
           
          },
          butttext:{
            color:'#000000',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          },
        input:{
         
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
             height: 50,
            backgroundColor:'#575656',
            borderRadius:5,
            borderWidth:2,
        borderColor:"#000000",
            
            
          },
        inputtext:{
            color:'#ffffff',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          },
          b:{
            marginTop :50,
            justifyContent: 'center',
            alignItems: 'center',
            width: 180,
             height: 50,
            backgroundColor:'#575656',
            
            borderRadius:5,
            marginBottom:10,
            borderWidth:2,
        borderColor:"#000000",
           
          },
          btext:{
            color:'#000000',
           fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          },
    
    
    }
=======
import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,TextInput,StyleSheet,TouchableOpacity,ScrollView, View} from 'react-native';
import logo from '../img/logo.png';
import fundo from '../img/fundo.png'
export  function login({navigation}: {navigation: any}){
 
    return(
             <SafeAreaView style={style.container}>
               <ImageBackground source={fundo} style={style.image}>
               
                 <Image source={logo} style={style.Image}/>
                 <Text style={style.title}>
                    CONECTE-SE
                 </Text>
                 
                 <Text style={style.desc}>
                    USER
                 </Text>
                 <TextInput style={style.input}
                 />
                <Text style={style.desc}>
                    SENHA
                 </Text>
                 <TextInput style={style.input}/>
                
                
                 <TouchableOpacity style={style.b} onPress={()=>navigation.navigate('cadastrar')}  >
                     <Text style={style.btext}>
                         cadastrar
                     </Text>
                 </TouchableOpacity>
                
                <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('abaprincipal')}>
                     <Text style={style.butttext}>
                     Pular
                   </Text>
                </TouchableOpacity>
                
                </ImageBackground> 
             </SafeAreaView>
             
    )
}
const style = StyleSheet.create({
      container: {
        flex:1,
        alignItems: 'center',
        
      },
      title: {
        
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#575656',
      },
      desc:{
        textAlign: 'center', 
        fontSize: 20,
        color:'#ffffff',
        

      },
    Image:{
      flex:1,
      marginTop:10,
      alignItems: 'center',
      height: 100,
      width: 350,
      },
    
       image: {
         flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', 
        height: '100%',
      },
      
        button:{
         
            alignSelf: 'flex-end',   
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
             height: 50,
            backgroundColor:'#575656',
            borderRadius:5,
            marginBottom:10,
            borderWidth:2,
        borderColor:"#000000",
           
          },
          butttext:{
            color:'#000000',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          },
        input:{
         
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
             height: 50,
            backgroundColor:'#575656',
            borderRadius:5,
            borderWidth:2,
        borderColor:"#000000",
            
            
          },
        inputtext:{
            color:'#ffffff',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          },
          b:{
            marginTop :50,
            justifyContent: 'center',
            alignItems: 'center',
            width: 180,
             height: 50,
            backgroundColor:'#575656',
            
            borderRadius:5,
            marginBottom:10,
            borderWidth:2,
        borderColor:"#000000",
           
          },
          btext:{
            color:'#000000',
           fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          },
    
    
    }
>>>>>>> a8b0b45aec7a4c562bd3974d538ba1bc36ca4532
    )