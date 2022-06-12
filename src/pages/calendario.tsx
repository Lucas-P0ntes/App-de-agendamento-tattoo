import React, { useState } from 'react';
import {SafeAreaView ,Text,Image,ImageBackground,StyleSheet,TouchableOpacity,ScrollView,  View, Platform, Alert} from 'react-native';
import  {Agenda , CalendarList , }  from  'react-native-calendars' ;
import DateTimePicker  from 'react-native-calendar-picker';

import fundo from '../img/fundo.png';
import { color } from 'react-native-reanimated';

export  function calendario({navigation}: {navigation: any}){
  const [SelectedDateTime,setSelectDateTime]=useState(new Date());
  const [showDatePicker, setShowDatePicker] =useState(Platform.OS == 'ios');
  function handleChangeTime(event :Event,dateTime:Date | undefined){
    if (Platform.OS=='android'){
      setShowDatePicker(oldState =>!oldState);
    }
  }
    return(
             <SafeAreaView style={style.container}>
               <ImageBackground source={fundo} style={style.image}>
               <Text style={style.Titulo}>
                CALENDARIO
              </Text>
              <View style={style.cor}>

              
              <DateTimePicker
              
                />
                </View >

                <View style={style.oder}>

                
                 <TouchableOpacity style={style.button1} onPress={()=>navigation.navigate('Tamanho')}>
                     <Text style={style.butttext1}>
                     Voltar
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('sucesso')}>
                     <Text style={style.butttext}>
                     confirmar
                   </Text>
                    </TouchableOpacity>
                    </View>
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
      Titulo:{
        
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        color:'#575656'
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
            marginHorizontal:70,borderWidth:2,
            borderColor:"#000000",
          
           
            
          },
          butttext:{
            color:'#000000',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          },
          button1:{
            alignSelf: 'flex-start',   
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,borderWidth:2,
            borderColor:"#000000",
             height: 50,
            backgroundColor:'#575656',
            borderRadius:5,
            marginHorizontal:70,
            
          
           
            
            
            
           
          },
          butttext1:{
            
            color:'#000000',
           fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
         
          },

          cor:{
            borderWidth:5,
        borderColor:"#000000",
            backgroundColor: "#575656",
            
          },
          oder:{
            flexDirection:"row",
            

            
          }
    }
    )