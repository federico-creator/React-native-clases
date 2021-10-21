import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';
import Home from "../screens/home"
import Register from '../screens/register';
import Login from '../screens/login';
import Perfil from "../screens/perfil";
import {auth} from "../firebase/config"

/* import {NavigationContainer} from "@react-navigation/native" */
import {createDrawerNavigator} from "@react-navigation/drawer"
const Drawer = createDrawerNavigator();  

class Clase16 extends Component{

    constructor(){
        super()
        this.state={
            logueado:false,
            userData:[],
            errores:""
            
        }
    }

    login(email,pass){
        auth.signInWithEmailAndPassword(email,pass)
        .then((respuesta)=>{return (this.setState({
            logueado: true,
            userData: respuesta

        })
        )})
        .catch((error)=> this.setState({errores: error.message}))
    }

    register(email, pass){
        auth.createUserWithEmailAndPassword(email,pass)
        .then((respuesta)=> {return (this.setState({
            logueado: true,
            userData: respuesta

        })
        )})
        .catch((error)=> this.setState({errores: error.message}))

    }
    desloguearse(){
        auth.signOut()
        .then(()=> this.setState({logueado: false}))
        .catch((error)=> console.log(error))

    }
   

    render(){
        return(
                <>
                     {
                        this.state.logueado == false ?
                        <Drawer.Navigator>
                            <Drawer.Screen name="Login" component={()=> <Login error={this.state.errores} loguearse={(email,contraseña)=>this.login(email,contraseña)}/>}/>
                            <Drawer.Screen name="Register" component={()=> <Register error={this.state.errores} registrarse={(email,contraseña)=>this.register(email,contraseña)}/>}/>
                        </Drawer.Navigator>:
                        <Drawer.Navigator>
                            <Drawer.Screen name="Home" component={()=> <Home/>} />
                            <Drawer.Screen name="Perfil" component={()=> <Perfil info={this.state.userData} desloguearse={()=>this.desloguearse()} />} />
                        </Drawer.Navigator>                                          
                    }                                                        
                </>

           
        )
    }
   
}
const styles = StyleSheet.create({
    
})

export default Clase16