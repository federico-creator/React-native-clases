import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';

class Comentario extends Component{

    constructor(){
        super()
        this.state={
            comentario:"",
        }
    }
    cargarDatos(){
        console.log(this.state.comentario);
    }

    render(){
        return(
        <View style={styles.container}>
            <View>

                <TextInput style={styles.input}
                    keyboardType="default"
                    placeholder="Escriba su comentario"
                    onChangeText={text => this.setState({comentario:text})}
                />


                <TouchableOpacity style={styles.touchable} onPress={()=> this.cargarDatos()}>
                    <Text style={styles.texto}>Escribir comentario</Text>
                </TouchableOpacity>



            </View>
        </View>)
    }
   
}
const styles = StyleSheet.create({
    container: {
        marginTop:20,
        paddingHorizontal: 10,
    },
    touchable:{
        textAlign:"center",
        padding: 5,
        backgroundColor: "#28a745",
        marginBottom: 10,
        borderRadius:4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#28a745"
        

    },
    texto:{
        color:"#FFF"
    },
    input: {
        height: 20,
        borderWidth:1,
        borderStyle:"solid",
        borderColor: "#ccc",
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:15,
        marginVertical:10,
    }
})

export default Comentario