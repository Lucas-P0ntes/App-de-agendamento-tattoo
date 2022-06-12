<<<<<<< HEAD
import React from  'react';
import { StyleSheet,Text,Image,View} from 'react-native';
import{getStatusBarHeight} from 'react-native-iphone-x-helper'
export function Header2(){
    return(
         <View style={styles.container}>
             <Text style={styles.cor}>
                    ESCOLHA QUAL O TAMANHO DA TATTOO.
                   

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



=======
import React from  'react';
import { StyleSheet,Text,Image,View} from 'react-native';
import{getStatusBarHeight} from 'react-native-iphone-x-helper'
export function Header2(){
    return(
         <View style={styles.container}>
             <Text style={styles.cor}>
                    ESCOLHA QUAL O TAMANHO DA TATTOO.
                   

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



>>>>>>> a8b0b45aec7a4c562bd3974d538ba1bc36ca4532
});