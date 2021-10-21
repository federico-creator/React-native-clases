import React from 'react';
/* import Home from "./src/screens/home"
import Register from './src/screens/register';
import Login from './src/screens/login'; */
import Clase16 from './src/components/clase16';
/* import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer" */
/* const Drawer = CreateDrawerNavigator(); */
import {NavigationContainer} from "@react-navigation/native"

function App() {
  
  return (
    <>
    {/* <Register/>
    <Login/>
    <Home/>  */} 
    <NavigationContainer> {/* Esto puede estar aca o todo en clase16 */}
        <Clase16/>
    </NavigationContainer>
   
    

    </>
  );
}
export default App


