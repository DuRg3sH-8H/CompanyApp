import { Text, StyleSheet, View, StatusBar, TextInput, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native'
import React, { Component } from 'react'


import MAt from 'react-native-vector-icons/MaterialCommunityIcons'

import { useState } from 'react'
export default class Login extends Component {


  render() {
    const [isChecked, setisChecked] = useState(false);

    return (
      <SafeAreaView style={styles.all}>
        <ScrollView>
          <StatusBar backgroundColor="#690c23" barStyle="light-content" />
          <View style={styles.header}>
            <TouchableOpacity>
              <MAt name='arrow-left-bold-box' size={30} color="#ffff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>  </Text>
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.texttt}>Club MBT Login</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textt}>Access the dashboard and join the club</Text>
            </View>

            <View style={{padding:5}}>
              <View>

                <TextInput
                  style={styles.textinput}
                  placeholder='Mobile Number or Email*' />
              </View>
              <View>

                <TextInput
                  style={styles.textinput}
                  placeholder='Password*'
                  secureTextEntry={true} />
              </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-between',margin:10,marginTop:1,marginBottom:2}}>
              <View>
                
                <Text style={{fontSize:18}}> Remember Me</Text>
              </View>  
              <Text style={{fontSize:18}}>
                Forgot Password?
              </Text>
            </View>
            <TouchableOpacity>
            <View style={styles.log}>
            
            <Text style={{ color: "#ffff", fontSize: 23, fontFamily: 'roboto' }}>Login</Text>
         
        </View>
            </TouchableOpacity>
            <View style={styles.loginwith}>

              <TouchableOpacity>
                <Text style={{ color: '#black', fontSize: 20, fontFamily: 'roboto' }}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.fgt}>
              <View >

              </View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  all: {
    backgroundColor: "#690c23"
  },
  header: {
    backgroundColor: '#690c23',
    padding: 20,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#ffff'
  },
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 780
  },
  textinput: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#690c23',
    borderRadius: 10,
    padding: 10,
    margin: 5

  },
  log: {
    height: 50,
    width: '97%',
    backgroundColor: '#690c23',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 8,
    marginRight: 20,
    paddingleft: 10,
    paddingRight: 10,

  },
  loginwith: {

    padding: 10,
    alignItems: 'center',

  },
  fgt: {

  },
  texttt: {
    fontSize: 20,
    color: '#690c23',
    fontFamily: 'roboto',
    fontWeight: 'bold',
  },
  textt: {
    fontSize: 15,
    color: 'grey',
    fontFamily: 'roboto',
    fontWeight: 'bold',
  }

})