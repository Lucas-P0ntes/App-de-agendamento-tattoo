import React , { useState }from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,Switch,TextInput,Alert,StyleSheet,TouchableOpacity,ScrollView, View} from 'react-native';
import logo from '../img/logo.png';
import fundo from '../img/fundo.png'
import Swt from '../components/Swt';
export  function cadastrar({navigation}: {navigation: any}){

  

  const backPressed=()=>{
    Alert.alert(
        'Desculpa',
        'Ainda não estar disponivel',
        [
            {text:'Ok'}
            
        ],
        {cancelable:false}
    )
    return true
}

 
    return(
             <SafeAreaView style={style.containe}>
               <ImageBackground source={fundo} style={style.image}>
                 <Image source={logo} style={style.Image}/>
                
                 <Text style={style.title}>
                    CONECTE-SE
                 </Text>
                 <ScrollView showsVerticalScrollIndicator={false}
                             showsHorizontalScrollIndicator={false}>
                 
                 <Text style={style.desc}>
                    Nome
                 </Text>
                 <TextInput style={style.input}
                 />
                <Text style={style.desc}>
                    Sobrenome
                 </Text>
                 <TextInput style={style.input}/>

                 <Text style={style.desc}>
                    Sexo
                 </Text>
                 <TextInput style={style.input}/>

                 <Text style={style.desc}>
                    E-mail
                 </Text>
                 <TextInput style={style.input}/>

                 <Text style={style.desc}>
                    CPF
                 </Text>
                 <TextInput style={style.input}/>

                 <Text style={style.desc}>
                    SENHA
                 </Text>
                 <TextInput style={style.input}/>
                 <Text style={style.desc}>
                   Confirme a SENHA
                 </Text>
                 <TextInput style={style.input}/>

                 <Text style={style.desc}>
                    Data de nascimento
                 </Text>
                 <TextInput style={style.input}/>
                 
                 <Text style={style.desc}>
                  Qual tattoo deseja fazer
                 </Text>
                 <TextInput style={style.input}/>
<Text style={style.desc}>
                    Ficha de Anammese
                 </Text>
                  <Swt/>
                 <TouchableOpacity style ={style.input}onPress={backPressed}>
                    <Text style={style.butttext} >
                      Salvar
                    </Text>
                  
                </TouchableOpacity>
                 
                 </ScrollView>
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
     
      containe: {
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
      marginTop:10,
      alignItems: 'center',
      height: 100,
      width: 350,
      },
    
       image: { 
        alignItems: 'center',
        justifyContent: 'center',
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
            marginBottom:10,borderWidth:2,
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
            borderRadius:5,borderWidth:2,
            borderColor:"#000000",
            
            
          },
        inputtext:{
            color:'#ffffff',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          },
          b:{
           
            justifyContent: 'center',
            alignItems: 'center',
            width: 180,
             height: 50,
            backgroundColor:'#575656',
            
            borderRadius:5,
            marginBottom:10,
           
          },
          btext:{
            color:'#000000',
           fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          },
    
        })