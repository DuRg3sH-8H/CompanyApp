import { Text, StyleSheet, View, StatusBar, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React, { Component, useState } from 'react'
import { Icon } from 'react-native-vector-icons/Icon'
import Icons from '../Components/Icons'

export default class Register extends Component {
  render() {

    return (
      <SafeAreaView style={styles.all}>
        <ScrollView>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={styles.header}>
            <TouchableOpacity>
              <Icons name = "arrowleft"/>
            </TouchableOpacity>
            <Text style={{ fontSize: 25, color: 'black', paddingLeft:24 }}>Login</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.textinput}
                placeholder='Email Address' placeholderTextColor="#999999"/>
            </View>
            <View>

              <TextInput
                style={styles.textinput}
                placeholder='Password'

                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true} 
                placeholderTextColor="#999999"/>
            </View>

            <TouchableOpacity style={styles.log}>
              <Text style={{ color: "#ffff", fontSize: 18, fontFamily: 'roboto' }}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <TouchableOpacity>
                <View style={styles.ref}>
                  <Text style={{ color: '#0bb9ff', fontSize: 15, fontFamily: 'roboto', fontWeight: 'bold' }}>REGISTER NOW!</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.ref}>
                  <Text style={{ color: '#0bb9ff', fontSize: 15, fontFamily: 'roboto', fontWeight: 'bold' }}>fORGOT PASSWORD?</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginTop:200}}>
              <Image source={require('../Assets/apartment.jpg')} style={{height:'70%',width:'100%'}}></Image>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  all: {
    backgroundColor: "#fffff"
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 10,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#ffff'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    height: 780
  },
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
  },
  ref: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    color: '#EEEEEE',
  },

})