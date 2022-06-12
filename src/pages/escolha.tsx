<<<<<<< HEAD
import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,TextInput,Alert,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import logo from '../img/logo.png';
import fundo from '../img/fundo.png'
export  function escolha({navigation}: {navigation: any}){
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
             <SafeAreaView style={style.container}>
               <ImageBackground source={fundo} style={style.image}>
                 <Image source={logo} style={style.Image}/>
                 <Text style={style.title}>
                    CONECTE-SE
                 </Text>
                 
                  <TouchableOpacity style ={style.input} onPress={()=>navigation.navigate('login')}>
                    <Text style={style.butttext2}>
                      Login
                    </Text>
                  
                </TouchableOpacity>
                
                  <TouchableOpacity style ={style.input2} onPress={backPressed}>
                    <Text style={style.butttext1}>
                      GOOGLE
                    </Text>
                  </TouchableOpacity>  
                  
                   <TouchableOpacity style ={style.input3} onPress={backPressed}>
                    <Text style={style.butttext1}>
                      FACEBOOK
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
      

     
    Image:{
      marginTop:10,
      alignItems: 'center',
      height: 100,
      width: 350,
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
            marginBottom:10,
            borderWidth:2,
        borderColor:"#000000",
            

           
          },
          butttext2:{
            color:'#000000',
           fontSize: 20,
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
          input2:{
             
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
             height: 50,
            backgroundColor:'#c51e1e',
            borderRadius:5,borderWidth:2,
            borderColor:"#000000",
            
            
          },
          input3:{
             
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
             height: 50,
            backgroundColor:'#1e50f5',
            borderRadius:5,borderWidth:2,
            borderColor:"#000000",
            
            
          },
          butttext1:{
            color:'#ffffff',
           fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
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
import {SafeAreaView ,Text,Image,ImageBackground,TextInput,Alert,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import logo from '../img/logo.png';
import fundo from '../img/fundo.png'
export  function escolha({navigation}: {navigation: any}){
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
             <SafeAreaView style={style.container}>
               <ImageBackground source={fundo} style={style.image}>
                 <Image source={logo} style={style.Image}/>
                 <Text style={style.title}>
                    CONECTE-SE
                 </Text>
                 
                  <TouchableOpacity style ={style.input} onPress={()=>navigation.navigate('login')}>
                    <Text style={style.butttext2}>
                      Login
                    </Text>
                  
                </TouchableOpacity>
                
                  <TouchableOpacity style ={style.input2} onPress={backPressed}>
                    <Text style={style.butttext1}>
                      GOOGLE
                    </Text>
                  </TouchableOpacity>  
                  
                   <TouchableOpacity style ={style.input3} onPress={backPressed}>
                    <Text style={style.butttext1}>
                      FACEBOOK
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
      

     
    Image:{
      marginTop:10,
      alignItems: 'center',
      height: 100,
      width: 350,
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
            marginBottom:10,
            borderWidth:2,
        borderColor:"#000000",
            

           
          },
          butttext2:{
            color:'#000000',
           fontSize: 20,
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
          input2:{
             
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
             height: 50,
            backgroundColor:'#c51e1e',
            borderRadius:5,borderWidth:2,
            borderColor:"#000000",
            
            
          },
          input3:{
             
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
             height: 50,
            backgroundColor:'#1e50f5',
            borderRadius:5,borderWidth:2,
            borderColor:"#000000",
            
            
          },
          butttext1:{
            color:'#ffffff',
           fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
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