import { SafeAreaView,StatusBar, ScrollView, StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Icons from '../Components/Icons'

export default function Register() {
  return (
    <SafeAreaView>
      <ScrollView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{backgroundColor:'white',flex:1,minHeight:830}}>
          <View style={{flexDirection:'row',padding:10}}>
            <TouchableOpacity>
            <Icons name='arrowleft'/>
            </TouchableOpacity>
            <Text style={{fontFamily:'Roboto',fontSize:25,color:'black',paddingLeft:24}}>ForgotPassword</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={{margin:6}}>
          
            <TextInput
              style={styles.textinput}
              placeholder='Email Address' placeholderTextColor="#999999"/>
          
          
          </View>
          <TouchableOpacity style={styles.log}>
              <Text style={{ color: "#ffff", fontSize: 18, fontFamily: 'roboto' }}>SUBMIT</Text>
          </TouchableOpacity>
          
          <View style={{marginTop:80}}>
          <Image source={require('../Assets/apartment.jpg')} style={{height:'60%',width:'95%'}}></Image>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textinput: {
    fontSize: 15,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    backgroundColor: '#E7EFFA',
  },
  log: {
    height: 50,
    width: '96%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 6,
    marginBottom:19,
  },
})