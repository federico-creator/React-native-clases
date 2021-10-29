import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';
import Contador from "../components/contador"
import Card from '../components/card';
import Comentario from '../components/comentario';
import { db } from '../firebase/config';

class Home extends Component{

    constructor(){
        super()
        this.state={
            personajes: [],
            cargado: false,
            email:"",
            post:[]
        }
    }

    componentDidMount(){
        

        fetch("https://rickandmortyapi.com/api/character")
        .then(results=> results.json())
        .then(data => {
            this.setState({
                personajes: data.results
            }, this.setState({
                cargado: true
            }))
        }) 
    }

    cargando(){
        console.log(this.state.email);
    }

    render(){
        return(
        <View style={styles.container}>
        
      <Text styles={styles.centrado}> Hello world</Text>

      <View>

        <TextInput style={styles.input}
        keyboardType="email-address"
        placeholder="nombre completo"
        onChangeText={text => this.setState({email:text})}
        secureTextEntry={true}/>

    <TouchableOpacity style={styles.touchable} onPress={()=> this.cargando()} onLongPress={()=>console.log("estas presionando")}>
        <Text style={styles.texto}>enviar</Text>
      </TouchableOpacity>



</View>

      <Image style={styles.imagen} source={require("../../assets/avatar/parque-eolico.jpg")} resizeMode="contain"/>
        <Image style={styles.imagen} source={{uri:"https://sire-media-foxes.fichub.com/generic/serie-main/473.1024x576.jpg"}} resizeMode="contain"/>
      <TouchableOpacity style={styles.touchable} onPress={()=>console.log("clickeaste")} onLongPress={()=>console.log("estas presionando")}>
        <Text style={styles.texto}>clickea aca!</Text>
      </TouchableOpacity>
      <Contador/>
     {this.state.cargado==false? <ActivityIndicator size={50} color="green"/>:
      <FlatList  data={this.state.personajes}
      keyExtractor={(personaje)=> personaje.id.toString()}
      renderItem={(charac) => <Card cara={charac}/>} >

      </FlatList>} 
    </View>)
    }
   
}
const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        padding: 10,
    },
    touchable:{
        padding: 5,
        backgroundColor: "#CCC",
        marginBottom: 10,
        borderRadius:5,
    },
    texto:{
        fontWeight: "bold",
    },
    imagen:{
        width:250,
        height:250,
    },
    input: {
        height: 30,
        /* border: "1px solid blue", */
        borderWidth:2,
        borderStyle:"solid",
        borderColor: "blue",
        borderRadius:10,
        paddingHorizontal:5,
        paddingVertical:5,
        marginVertical:5,
        marginHorizontal:10,

    }
})

export default Home