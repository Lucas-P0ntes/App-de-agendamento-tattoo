<<<<<<< HEAD
import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import logo from '../img/logo.png'
import fundo from '../img/fundo.png'
export  function Welcome({navigation}: {navigation: any}){
 
    return(
             <SafeAreaView style={style.container}>
               <ImageBackground source={fundo} style={style.image}>
                
                 <Image source={logo} style={style.Image}/>
                 <Text style={style.title}>
                BEM VINDO {"\n"}AO{"\n"} TATTOO NEW AGE
                 </Text>
                <Text style={style.desc}>
                  Muito obrigado por utilizar nossos serviços.{"\n"}
                  Agora você vai ter a facilidade de agendar sua tattoo com todo conforto da sua casa.
                </Text>
                <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('escolha')}>
                     <Text style={style.butttext}>
                     PRÓXIMO
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
        justifyContent: 'center'
      },
      title: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#575656',
      },
      desc:{
        alignSelf: 'flex-start', 
        margin:20,
        fontSize: 20,
        color:'#575656',
        

      },
    Image:{
      alignItems: 'center',
      height: 100,
      width: 350,
      borderRadius:5,
      },
    
       image: {
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
            borderWidth:2,
        borderColor:"#000000",
            marginBottom:10,
            margin:10.
          },
          butttext:{
            color:'#000000',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          },
    
    
    }
=======
import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import logo from '../img/logo.png'
import fundo from '../img/fundo.png'
export  function Welcome({navigation}: {navigation: any}){
 
    return(
             <SafeAreaView style={style.container}>
               <ImageBackground source={fundo} style={style.image}>
                
                 <Image source={logo} style={style.Image}/>
                 <Text style={style.title}>
                BEM VINDO {"\n"}AO{"\n"} TATTOO NEW AGE
                 </Text>
                <Text style={style.desc}>
                  Muito obrigado por utilizar nossos serviços.{"\n"}
                  Agora você vai ter a facilidade de agendar sua tattoo com todo conforto da sua casa.
                </Text>
                <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('escolha')}>
                     <Text style={style.butttext}>
                     PRÓXIMO
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
        justifyContent: 'center'
      },
      title: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#575656',
      },
      desc:{
        alignSelf: 'flex-start', 
        margin:20,
        fontSize: 20,
        color:'#575656',
        

      },
    Image:{
      alignItems: 'center',
      height: 100,
      width: 350,
      borderRadius:5,
      },
    
       image: {
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
            borderWidth:2,
        borderColor:"#000000",
            marginBottom:10,
            margin:10.
          },
          butttext:{
            color:'#000000',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          },
    
    
    }
>>>>>>> a8b0b45aec7a4c562bd3974d538ba1bc36ca4532
    )