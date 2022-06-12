<<<<<<< HEAD
import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,TextInput,StyleSheet,TouchableOpacity,ScrollView, View} from 'react-native';
import{getStatusBarHeight} from 'react-native-iphone-x-helper'
import {Header} from  '../components/Header';
import fundo from '../img/fundo.png';
import tribal from '../img/Tribal.png';
import New from '../img/New.png';
import old from '../img/old.png';
import geo from '../img/geo.png';
import Aquarela from '../img/Aquarela.png';
export  function principal({navigation}: {navigation: any}){
 
    return(
             <View style={style.container}>
              <ImageBackground source={fundo} style={style.image}>
                  <View style={style.head}>
                    
                      <Header/>

                  </View>

                  <ScrollView style={style.Scroll}>

                   

                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                     OLd{"\n"}
                     School
                     </Text>
                     <Image source={old} style={style.Image}/>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                    New {"\n"}School
                     </Text>
                     <Image source={New} style={style.Image}/>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                    Tribal{""}
                     </Text>
                     <Image source={tribal} style={style.Image}/>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                     Geomé{"\n"}tricos
                     </Text>
                     <Image source={geo} style={style.Image}/>
                   </TouchableOpacity>
                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                     Aqua{"\n"}rela
                     </Text>
                     <Image source={Aquarela} style={style.Image}/>
                   </TouchableOpacity>
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
const style = StyleSheet.create({
      container: {
        marginTop: getStatusBarHeight(),
        
        
        
            
      },
      head:{
        
        paddingVertical:0, 
      },
      titel:{
        fontSize: 20,
        color: "#575656",
        fontWeight: 'bold',




      },
      Scroll:{
 flex:1,
 
 

      },
    
       image: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', 
        height: '100%',
      },

      button:{
        
        justifyContent:'space-between',
      flexDirection:'row',
        borderRadius:5,
        width: 330, 
        height: 120,
        backgroundColor:'#575656',
        marginTop: 20,borderWidth:2,
        borderColor:"#000000",
      
        },
        Image:{
        
          borderRadius:5,
          height: 115,
          width: 250,
          },

        butttext:{
          
          color:'#000000',
         fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal:10
       
        },
        button1:{
          marginTop:10,
          alignSelf: 'flex-start',   
          justifyContent: 'center',
          width: 100,
          height: 50,
          backgroundColor:'#575656',
          borderRadius:5,
          marginBottom:10,borderWidth:2,
          borderColor:"#000000",
          
         
        },
        butttext1:{
         
          color:'#000000',
         fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        },
        
       
      
})
      
=======
import React from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,TextInput,StyleSheet,TouchableOpacity,ScrollView, View} from 'react-native';
import{getStatusBarHeight} from 'react-native-iphone-x-helper'
import {Header} from  '../components/Header';
import fundo from '../img/fundo.png';
import tribal from '../img/Tribal.png';
import New from '../img/New.png';
import old from '../img/old.png';
import geo from '../img/geo.png';
import Aquarela from '../img/Aquarela.png';
export  function principal({navigation}: {navigation: any}){
 
    return(
             <View style={style.container}>
              <ImageBackground source={fundo} style={style.image}>
                  <View style={style.head}>
                    
                      <Header/>

                  </View>

                  <ScrollView style={style.Scroll}>

                   

                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                     OLd{"\n"}
                     School
                     </Text>
                     <Image source={old} style={style.Image}/>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                    New {"\n"}School
                     </Text>
                     <Image source={New} style={style.Image}/>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                    Tribal{""}
                     </Text>
                     <Image source={tribal} style={style.Image}/>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                     Geomé{"\n"}tricos
                     </Text>
                     <Image source={geo} style={style.Image}/>
                   </TouchableOpacity>
                   <TouchableOpacity style={style.button}onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext}>
                     Aqua{"\n"}rela
                     </Text>
                     <Image source={Aquarela} style={style.Image}/>
                   </TouchableOpacity>
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
const style = StyleSheet.create({
      container: {
        marginTop: getStatusBarHeight(),
        
        
        
            
      },
      head:{
        
        paddingVertical:0, 
      },
      titel:{
        fontSize: 20,
        color: "#575656",
        fontWeight: 'bold',




      },
      Scroll:{
 flex:1,
 
 

      },
    
       image: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', 
        height: '100%',
      },

      button:{
        
        justifyContent:'space-between',
      flexDirection:'row',
        borderRadius:5,
        width: 330, 
        height: 120,
        backgroundColor:'#575656',
        marginTop: 20,borderWidth:2,
        borderColor:"#000000",
      
        },
        Image:{
        
          borderRadius:5,
          height: 115,
          width: 250,
          },

        butttext:{
          
          color:'#000000',
         fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal:10
       
        },
        button1:{
          marginTop:10,
          alignSelf: 'flex-start',   
          justifyContent: 'center',
          width: 100,
          height: 50,
          backgroundColor:'#575656',
          borderRadius:5,
          marginBottom:10,borderWidth:2,
          borderColor:"#000000",
          
         
        },
        butttext1:{
         
          color:'#000000',
         fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        },
        
       
      
})
      
>>>>>>> a8b0b45aec7a4c562bd3974d538ba1bc36ca4532
      