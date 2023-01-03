import React from "react"
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from "../components/logo";
import BackButton from "../components/backButton";
import NavigationButton from "../components/navigationButton";
import * as Font from 'expo-font'
import LogoWithText from "../components/logoWithText";
import { auth } from "../firebase";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { NavigationContainer, useNavigation } from '@react-navigation/native';




var vw = Dimensions.get('window').width
var vh = Dimensions.get('window').height

// FIREBASE TUTORIAL: https://www.youtube.com/watch?v=ql4J6SpLXZA 12:40



class About extends React.Component{ // Create "Login with Google" and "Sign up with Google"
    state = {
            screenMode:0,
            fontsLoaded:false,
            showPassword:false,
            emailFormInput:'',
            passFormInput:'',
            keyTrigger:0,
    }
    AuthToHome = () => {
        this.props.navigation.navigate('Home')
    }
    async loadFonts(){
        await Font.loadAsync({
            'Nunito' : require('../assets/fonts/Nunito.ttf'),
            'Playfair' : require('../assets/fonts/Playfair.ttf'),
            'Playfair-italic' : require('../assets/fonts/Playfair-italic.ttf'),
            'Nunito-Medium' : require('../assets/fonts/Nunito-Medium.ttf'),
            'Nunito-Bold' : require('../assets/fonts/Nunito-Bold.ttf')
        })
        console.log("FONTS LOADED")
        this.setState({fontsLoaded:true})
    }
    componentDidMount(){
        this.loadFonts();
        console.log("MOUNT")
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                console.log("Should navigate to home")
                this.AuthToHome()
            }
        })
        return unsubscribe
    }
    handleSignUp = ()=>{
        auth
            .createUserWithEmailAndPassword(this.state.emailFormInput,this.state.passFormInput)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log("Registered:",user.email)
            })
            .catch(err =>{
                alert(err)
            })
            const unsubscribe = auth.onAuthStateChanged(user => {
                if(user){
                    console.log("Should navigate to home")
                    this.AuthToHome()
                }
            })
            return unsubscribe
    }
    handleLogin = () => {
        auth
            .signInWithEmailAndPassword(this.state.emailFormInput,this.state.passFormInput)
            .then(userCredentials =>{
                const user = userCredentials.user
                console.log("Signed in:",user.email)
                this.setState({
                    emailFormInput:"",
                    passFormInput:"",
                    keyTrigger:this.state.keyTrigger+1,
                })
                const unsubscribe = auth.onAuthStateChanged(user => {
                    if(user){
                        console.log("Should navigate to home")
                        this.AuthToHome()
                    }
                })
                return unsubscribe
                
            })

    }
    handleEmailChange = () =>{
        console.log(this.state.emailFormInput)

    }
    handlePassChange = () =>{
        console.log(this.state.passFormInput)
    }
    signInButton(buttonStyle, textStyle, textContent, clickResponse){ // REPLACE THIS LATER
        return(
            <TouchableOpacity style={buttonStyle} onPress = {clickResponse}>
                <Text style={textStyle}>{textContent}</Text>
            </TouchableOpacity>
        )
    }
    loginFields(){
        return(
            <View removeClippedSubviews={true} style = {styles.loginFields}>
                <TextInput 
                placeholder="Email"
                keyboardType="alphanumeric"
                placeholderTextColor = 'grey'
                
                onChangeText = {(text)=>this.setState({emailFormInput:text})}
                onChange = {()=>this.handleEmailChange()}
                value = {this.state.emailFormInput}
                style = {styles.userInput}></TextInput>
                <TextInput 
                placeholder="Password"
                placeholderTextColor = 'grey'
                secureTextEntry={this.state.showPassword ? false : true} 
                onChangeText = {(text)=>this.setState({passFormInput:text})}
                onChange = {()=>this.handlePassChange()}
                value = {this.state.passFormInput}
                style = {styles.passInput}></TextInput>
            </View>
        )
    }
    render(){
    switch(this.state.screenMode){
        case(0):
        if(this.state.fontsLoaded){
            return(
                <SafeAreaView style={styles.parentView}>
                <LogoWithText/>

                <View>{this.signInButton(styles.signUpButtonMode0, styles.signUpText, "Create an Account", ()=>this.setState({screenMode:2}))}</View>
                <View>{this.signInButton(styles.loginButtonMode0, styles.loginText, "Sign In", ()=>this.setState({screenMode:1}))}</View>

            </SafeAreaView>
        )
        }
        else{
            return(
                <View></View>
            )
        }
        case(1):
            if(this.state.fontsLoaded){
                return(
                    <SafeAreaView style={styles.parentView}>
                        <LogoWithText/>

                        <View key = {this.state.keyTrigger}>{this.loginFields()}</View>
                        <View>
                            <NavigationButton 
                            button = {styles.debugButton} 
                            buttonText = {styles.debugText} 
                            content = {'Home'}
                            nav = 'Home'
                            />
                        </View>
                        
                        <View>{this.signInButton(styles.loginButtonMode1, styles.loginText, "Sign In", ()=>this.handleLogin())}</View>
                        <TouchableOpacity style={styles.backButtonBox} onPress={() => this.setState({screenMode:0})}>
                            <BackButton styleText={styles.backButtonText}/>
                        </TouchableOpacity>
                    </SafeAreaView>
                )
                }
                else{
                    return(
                        <View></View>
                    )
                }
                break
            case(2):
                    if(this.state.fontsLoaded){
                        return(
                            <SafeAreaView style={styles.parentView}>
                                <LogoWithText/>
        
                                <View>{this.loginFields()}</View>
                                <View>
                                    <NavigationButton 
                                    button = {styles.debugButton} 
                                    buttonText = {styles.debugText} 
                                    content = {'Home'}
                                    nav = 'Home'
                                    />
                                </View>
                                
                                <View>{this.signInButton(styles.signUpButtonMode2, styles.signUpText, "Register", ()=>this.handleSignUp())}</View>
                                <TouchableOpacity style={styles.backButtonBox} onPress={() => this.setState({screenMode:0})}>
                                    <BackButton styleText={styles.backButtonText}/>
                                </TouchableOpacity>
                            </SafeAreaView>
                        )
                        }
                        else{
                            return(
                                <View></View>
                            )
                        }
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
        fontFamily:"Nunito-Medium",
        padding:vh/90,
        borderRadius:5,
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:2,
        top:vh/14,
        fontSize:18,

    },
    passInput:{
        padding:vh/90,
        borderRadius:5,
        backgroundColor:'white',
        borderColor:'black',
        fontFamily:'Nunito-Medium',
        borderWidth:2,
        top:vh/11,
        fontSize:18,
    },
    signUpButtonMode2:{
        width:vw/1.4,
        height:vh/13,
        top:vh/9.8,
        justifyContent:'center',
        backgroundColor:'rgb(255, 255, 255)',
        borderRadius:12,

    },
    signUpButtonMode1:{
        width:vw/1.4,
        height:vh/13,
        top:vh/3.8,
        justifyContent:'center',
        backgroundColor:'rgb(255, 255, 255)',
        borderRadius:12,

    },
    signUpButtonMode0:{
        width:vw/1.4,
        height:vh/13,
        top:vh/2.2,
        justifyContent:'center',
        backgroundColor:'rgb(255, 255, 255)',

        borderRadius:12,

    },
    signUpText:{
        fontFamily:'Nunito-Bold',
        color:"rgba(23,47,101,1)",
        height:'100%',
        fontSize:vh/43,
        textAlign:'center',
        lineHeight:vh/13,
    },  
    loginButtonMode0:{
        width:vw/1.4,
        height:vh/13,
        top:vh/2,
        justifyContent:'center',
        backgroundColor:'rgb(255, 255, 255)',
        borderRadius:12,

    },
    loginButtonMode1:{
        width:vw/1.4,
        height:vh/13,
        top:vh/9.8,
        justifyContent:'center',
        backgroundColor:'rgb(255, 255, 255)',
        borderRadius:36,

    },
    loginText:{
        fontFamily:'Nunito-Bold',
        color:"rgba(23,47,101,1)",
        height:'100%',
        fontSize:vh/43,
        textAlign:'center',
        lineHeight:vh/13,
    }, 
    backButtonBox:{
        position:'absolute',
        paddingHorizontal:vw/30,
        paddingVertical:vh/80,
        top:vh/15,
        left:vw/18, // -1.8, -2.3
        borderRadius:32,
        borderColor:'white',
        borderWidth:1,
    },
    backButtonText:{
        position:'absolute',
        fontFamily:'Nunito-Medium',
        color:'white',
        textAlign:'center',
        alignSelf:'center',
        fontSize:vw/20,
        lineHeight:vh/18,
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