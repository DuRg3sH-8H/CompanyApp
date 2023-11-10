import { SafeAreaView,StatusBar, ScrollView, StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Icons from '../Components/Icons'

export default function ContactUs() {
  return (
    <SafeAreaView>
      <ScrollView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{backgroundColor:'white',flex:1,minHeight:830}}>
          <View style={{flexDirection:'row',padding:10}}>
            <TouchableOpacity>
            <Icons name='arrowleft'/>
            </TouchableOpacity>
            <Text style={{fontFamily:'Roboto',fontSize:25,color:'black',paddingLeft:24}}>Contact Us</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:5}} >
            <Text style={{fontWeight:'bold',fontSize:16}}>Have any question or queries?</Text>
            <Text  style={{fontWeight:'bold',fontSize:16}}>we'd love to hear form you</Text>
          </View>
          
          <View style={{marginTop:80}}>
          <Image source={require('../Assets/Location.jpg')} style={{height:'50%',width:'100%'}}></Image>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:30,marginTop:5}}>
            <Text  style={{fontWeight:'bold',fontSize:30}}>Basobas Nepal PVt.Ltd</Text>
            <Text style={{fontWeight:'bold',fontSize:16}}>Tandukar house ,new baneshower kathmandu</Text>
            <Text style={{fontWeight:'bold',fontSize:16}}>9845037991</Text>
            <Text style={{fontWeight:'bold',fontSize:16}}>support@basobas.com</Text>
            <Text style={{fontWeight:'bold',fontSize:16}}>Suppot us at:</Text>
          </View>
          <TouchableOpacity style={styles.log}>
              <Text style={{ color: "#ffff", fontSize: 18, fontFamily: 'roboto' }}>Contact Form</Text>
          </TouchableOpacity>
          
          
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