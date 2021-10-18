import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';


class contador extends Component{
    constructor(){
        super()
        this.state={
            cuenta:0
        }
        
    }
    suma(){
        this.setState({
            cuenta: this.state.cuenta +1
        })
    }
    render(){
        return(
        <>
      
      <Text>tu cantidad de clicks es: {this.state.cuenta}</Text>
      
      <TouchableOpacity style={styles.touchable} onPress={()=>this.suma()}>
        <Text>clickea aca para contar!</Text>
      </TouchableOpacity>
    </>)
    }
}
const styles = StyleSheet.create({
    touchable:{
        padding: 5,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderRadius:5,
    },
})

export default contador