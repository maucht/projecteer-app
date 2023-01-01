import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from "../components/logo";
import NavigationButton from "../components/navigationButton";
import * as Font from 'expo-font'


var vw = Dimensions.get('window').width
var vh = Dimensions.get('window').height



class About extends React.Component{
    state = {
            fontsLoaded:false,
            userText:'',
    }
    async loadFonts(){
        await Font.loadAsync({
            'Nunito' : require('../assets/fonts/Nunito.ttf'),
            'Playfair' : require('../assets/fonts/Playfair.ttf'),
            'Playfair-italic' : require('../assets/fonts/Playfair-italic.ttf')
        })
        console.log("FONTS LOADED")
        this.setState({fontsLoaded:true})
    }
    componentDidMount(){
        this.loadFonts();
    }
    handleCreateAccount(){
        return(null)
    }
    handleLogin(){
        console.log("TODO: implement log in")
        return(null)
    }
    handleUserChange(text){
        console.log(text.key)

    }
    signUpButton(){ // REPLACE THIS LATER
        return(
            <TouchableOpacity style={styles.signUpButton} onPress = {()=>this.handleCreateAccount()}>
                <Text style={styles.signUpText}>Create Account</Text>
            </TouchableOpacity>
        )
    }
    loginButton(){ // SHOULD SERVE AS A SUBMIT BUTTON FOR LOGIN INFO INSTEAD
        return(
            <TouchableOpacity style={styles.loginButton} onPress = {()=>this.handleLogin()}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        )
    }
    loginFields(){
        return(
            <View removeClippedSubviews={true} style = {styles.loginFields}>
                <TextInput 
                placeholder="Username"
                keyboardType="alphanumeric"
                placeholderTextColor = 'grey'
                onChange = {(text) => this.handleUserChange(text)}
                style = {styles.userInput}></TextInput>
                <TextInput 
                placeholder="Password"
                placeholderTextColor = 'grey'
                secureTextEntry={true} 
                style = {styles.passInput}></TextInput>
            </View>
        )
    }
    render(){
    if(this.state.fontsLoaded){
        return(
            <SafeAreaView style={styles.parentView}>
                <View><Logo/></View>
                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Projecteer</Text>
                    <Text style = {styles.headerSlogan}>Unity in Productivity</Text>
                </View>

                <View>{this.loginFields()}</View>
                <View>
                    <NavigationButton 
                    button = {styles.debugButton} 
                    buttonText = {styles.debugText} 
                    content = {'Home'}
                    nav = 'Home'
                    />
                </View>
                
                <View>{this.loginButton()}</View>

            </SafeAreaView>
        )
        }
        else{
            return(
                <View></View>
            )
        }
}}

const styles = StyleSheet.create({
    parentView:{
        flexDirection:'column',
        width:"100%",
        height:"100%",
        backgroundColor:'rgba(23,47,101,1)',
        alignItems:"center"
    },
    headerTextView:{
        position:'absolute',
        top:vh/5,
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontSize:40,
        fontFamily:"Playfair",

        color:'white',
    },
    headerSlogan:{
        fontFamily:"Playfair-italic",
        color:'white',
        fontSize:16,
    },
    loginFields:{
        fontFamily:"Nunito",
        height:vh/2.6,
        width:vw/1.3,
        top:vh/3.8,
    },
    userInput:{
        fontFamily:"Nunito",
        padding:vh/38,
        borderRadius:10,
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:2,
        top:vh/14,
        fontSize:20,
        fontWeight:'bold',

    },
    passInput:{
        padding:vh/38,
        borderRadius:10,
        backgroundColor:'white',
        borderColor:'black',
        fontFamily:'Nunito',
        fontWeight:'bold',
        borderWidth:2,
        top:vh/10,
        fontSize:20,
    },
    signUpButton:{
        width:vw/1.4,
        height:vh/13,
        top:vh/3.8,
        justifyContent:'center',
        backgroundColor:'rgb(38, 132, 255)',
        borderRadius:36,

    },
    signUpText:{
        color:"white",
        height:'100%',
        fontSize:vh/45,
        textAlign:'center',
        lineHeight:vh/13,
    },  
    loginButton:{
        width:vw/1.4,
        height:vh/13,
        top:vh/4.5,
        justifyContent:'center',
        backgroundColor:'rgb(38, 132, 255)',
        borderRadius:36,

    },
    loginText:{
        color:"white",
        height:'100%',
        fontSize:vh/45,
        textAlign:'center',
        lineHeight:vh/13,
    }, 
    debugText:{
        color:"white",
        height:'100%',
        fontSize:vh/35,
        textAlign:'center',
        lineHeight:vh/10,
    },  
    debugButton:{
        width:vw/3,
        height:vh/10,
        top:vh/1.3,
        justifyContent:'center',
        backgroundColor:'black',
        borderRadius:16,

    },

})
export default About;