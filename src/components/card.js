import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';

function Card(props){
    console.log(props.cara.item);

        return(
        <TouchableOpacity >

        
        <Image style={styles.imagen} source={{uri:`${props.cara.item.image}`}} resizeMode="contain"/>     
      <Text > {props.cara.item.name}</Text>
      
    </TouchableOpacity>)
    
   
}
const styles = StyleSheet.create({
    imagen:{
        width:250,
        height:250,
    },
   
})

export default Card