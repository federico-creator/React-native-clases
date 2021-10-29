import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';
import Home from "../screens/home"
import Register from '../screens/register';
import Login from '../screens/login';
import Perfil from "../screens/perfil";
import {auth} from "../firebase/config"
import NewPostForm from '../screens/NewPostForm';
import Posteos from '../screens/posteos';

/* import {NavigationContainer} from "@react-navigation/native" */
import {createDrawerNavigator} from "@react-navigation/drawer"
const Drawer = createDrawerNavigator();  

class Clase16 extends Component{

    constructor(){
        super()
        this.state={
            logueado:false,
            /* userData:[], */
            errores:""
            
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged((user)=> {
            console.log(user)
            //casi todos los objetos son thrusty, salvo null, 0 o undefined, que son falsy entonces lo ponemos directamnete como condicion para ser directamente true or false 
            // si no hay usuario la respuesta es null
            if (user) {
                this.setState({
                    logueado: true,
                })
            }
            else{
                this.setState({
                    logueado: false,
                })
            }

        })
    }

    login(email,pass){
        auth.signInWithEmailAndPassword(email,pass)
        .then(()=>{return (this.setState({
            logueado: true,
        })
        )})
        .catch((error)=> this.setState({errores: error.message}))
    }

    register(email, pass){
        auth.createUserWithEmailAndPassword(email,pass)
        .then(()=> {return (this.setState({
            logueado: true,
        })
        )})
        .catch((error)=> this.setState({errores: error.message}))

    }
    desloguearse(){
        auth.signOut()
        /* .then(()=> this.setState({logueado: false, userData:[]}))
        .catch((error)=> console.log(error)) 
        con lo que vimos de auth.onstagechange esto ya no es necesario, porque todo lo controla el onstagechange*/

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
                            <Drawer.Screen name="Nuevo Posteo" component={()=> <NewPostForm/>} />
                            <Drawer.Screen name="Posteos" component={()=> <Posteos/>} />
                            <Drawer.Screen name="Perfil" component={()=> <Perfil desloguearse={()=>this.desloguearse()} />} />
                        </Drawer.Navigator>                                          
                    }                                                        
                </>

           
        )
    }
   
}
const styles = StyleSheet.create({
    
})

export default Clase16