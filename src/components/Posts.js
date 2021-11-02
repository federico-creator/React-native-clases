import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, TextInput, Modal } from 'react-native';
import { db, auth } from '../firebase/config';
import firebase from 'firebase';
import "firebase/firestore"
import Comentario from './comentario';
import SeccionModal from './seccionModal';


class Posts extends Component{

    constructor(props){
        super(props)
        this.state={
            liked: false,
            /* likes: 0  lo del like se puede hacer por estado actualizando el valor, o por lo que nos llega de la base de datos como se hace en el render likes*/
            ShowModal: false,
            textoModal: "Ver comentarios"
            

        }
    }
    componentDidMount(){
       if (this.props.data.item.data.likes.includes(`${auth.currentUser.email}`)) {
           this.setState({
               liked:true
           })
           
       } 
       else{
        this.setState({
            liked:false
        })
       } 
        
    }

    Likear(item){
         if (this.state.liked == false) {
            var agregarLike = db.collection("posteos").doc(`${item.id}`);

            return agregarLike.update({
                likes : firebase.firestore.FieldValue.arrayUnion(`${auth.currentUser.email}`)
            })
            .then(() => {
                this.setState({
                /*  likes: this.state.likes+=1, */
                    liked: true
                })
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            }); 
                      
        }
        else{
            var quitarLike = db.collection("posteos").doc(`${item.id}`);

            return quitarLike.update({
                likes : firebase.firestore.FieldValue.arrayRemove(`${auth.currentUser.email}`)
            })
            .then(() => {
                this.setState({
                /*  likes: this.state.likes-=1, */
                    liked: false
                })
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            }); 

        } 


    }

    comentario(coment){
        let cometariousuario= {texto: coment,
                                usuario: auth.currentUser.email,
                                fechaDeCreacion: Date.now()}
        var agregarComentario = db.collection("posteos").doc(`${this.props.data.item.id}`);

        return agregarComentario.update({
            comments : firebase.firestore.FieldValue.arrayUnion(cometariousuario)
        })
        .then(() => {
            console.log("comentario exitoso");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        }); 
        
    }

    modal(){
        if (this.state.ShowModal) {
            this.setState({
                ShowModal: false,
                textoModal: "Ver Comentarios"
            })   
        }
        else{
            this.setState({
                ShowModal: true,
                textoModal: "Ocultar Comentarios"
            })  
        }

    }


    render(){
        let {item} = this.props.data
        let {data} = item
        return(
        <View style={styles.container}>
            <Text>Usuario: {data.user}</Text>
            <Text>Titulo: {data.title}</Text>
            <Text>Descripcion: {data.description}</Text>
            <Text>Likes: {data.likes.length}</Text>
             {this.state.liked== false?<TouchableOpacity style={styles.touchable} onPress={()=> this.Likear(item,data)}>
                    <Text style={styles.texto}>Me gusta</Text>
            </TouchableOpacity>:
            <TouchableOpacity style={styles.touchable2} onPress={()=> this.Likear(item,data)}>
                <Text style={styles.texto}>Quitar Like</Text>
            </TouchableOpacity>
            } 
            <Comentario comentario={(coment)=>this.comentario(coment)} /> 

            <SeccionModal modal={()=> this.modal()} ShowModal={this.state.ShowModal} textoModal={this.state.textoModal} data={data}/>
        </View>)
    }
   
}
const styles = StyleSheet.create({
    container: {
        marginTop:20,
        paddingHorizontal: 10,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"black"
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
    touchable2:{
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
    input: {
        height: 20,
        borderWidth:1,
        borderStyle:"solid",
        borderColor: "#ccc",
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:15,
        marginVertical:10,
    },
    touchable3:{
        textAlign:"center",
        padding: 5,
        backgroundColor: "gray",
        marginBottom: 10,
        borderRadius:4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"gray"
    },
})

export default Posts