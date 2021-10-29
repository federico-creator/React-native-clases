import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';
import { db, auth } from '../firebase/config';
import Posts from '../components/Posts';

class Posteos extends Component{

    constructor(){
        super()
        this.state={
            post:[]
        }
    }

    componentDidMount(){
        this.showPost()

      
    }

    showPost(){
        db.collection("posteos").onSnapshot((docs)=>{
            let posteos = []
            docs.forEach((doc)=>{
                posteos.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            this.setState({
                post: posteos
            })
        })
    }

    render(){
        return(
        <View style={styles.container}>

            <Text>Página de posteos</Text>
            <FlatList  data={this.state.post}
            keyExtractor={(data)=> data.id}
            renderItem={(data)=>( <Posts data={data}/> )}  >

        </FlatList>

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

export default Posteos