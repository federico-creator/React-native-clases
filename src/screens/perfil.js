import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';
import {auth} from "../firebase/config"

class Login extends Component{

    constructor(props){
        super(props)
        this.state={
            
        }
    }
    

    render(){
        console.log(this.props.info)
        return(
        < >

            <Text > Bienvenido: {this.props.info.user.email} </Text>
            <Text > Fecha de creación: {this.props.info.user.metadata.creationTime} </Text>
            <Text > Fecha de último loguin: {this.props.info.user.metadata.lastSignInTime} </Text>

            <TouchableOpacity style={styles.touchable} onPress={()=> this.props.desloguearse()}>
                    <Text style={styles.texto}>Desloguearse</Text>
            </TouchableOpacity>


            
        </>)
    }
   
}
const styles = StyleSheet.create({
    touchable:{
        textAlign:"center",
        padding: 5,
        backgroundColor: "red",
        marginBottom: 10,
        borderRadius:4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"red"
        

    },
    texto:{
        color:"#FFF"
    },
})

export default Login