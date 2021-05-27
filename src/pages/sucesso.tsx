import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import logo from '../img/logo.png'
import fundo from '../img/fundo.png'
export  function sucesso({navigation}: {navigation: any}){
 
    return(
             <SafeAreaView style={style.container}>
               <ImageBackground source={fundo} style={style.image}>
                
                 <Image source={logo} style={style.Image}/>
                 <Text style={style.title}>
                 SUCESSO
                 </Text>
                <Text style={style.desc}>
                  Muito obrigado por agendar sua tatoo com a New Age tattoo
                  Entraremos em contato em breve.
                  Para confirmar seu 
                  agendamento
                </Text>
                <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('abaprincipal')}>
                     <Text style={style.butttext}>
                     Menu
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
    )