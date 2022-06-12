import React from  'react';
import { StyleSheet,Text,Image,View} from 'react-native';
import{getStatusBarHeight} from 'react-native-iphone-x-helper'
export function Header(){
    return(
         <View style={styles.container}>
             <Text style={styles.cor}>
                    ESCOLHA QUAL O TIPO  DE TATTOO 
                     VOCÊ DESEJA FAZER?

             </Text>



         </View>
)
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical:17 ,
        backgroundColor:'#575656',

       
        
    },
    cor:{
        color:'#1d1919',
        padding: 10,
        fontWeight:"bold",
        fontSize:18,

    },



});