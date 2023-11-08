import { Text, StyleSheet, View, StatusBar, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React, { Component, useState } from 'react'



//import Arrowleft from 'react-native-vector-icons/AntDesign'

export default class Register extends Component {
  render() {

    return (      <SafeAreaView style={styles.all}>
        <ScrollView>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={styles.header}>
            <TouchableOpacity>
              {/* < Arrowleft name='arrowleft' size={30} color="black" /> */}

            </TouchableOpacity>
            <Text style={{ fontSize: 25, color: 'black' }}>Login</Text>

          </View>
          <View style={styles.container}>



            <View>

              <TextInput
                style={styles.textinput}
                placeholder='Input Email Address' />
            </View>
            <View>

              <TextInput
                style={styles.textinput}
                placeholder='password'
                

                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true} />
            </View>

            <TouchableOpacity style={styles.log}>
              <Text style={{ color: "#ffff", fontSize: 18, fontFamily: 'roboto' }}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <TouchableOpacity>
               <View style={styles.ref}>
               <Text style={{ color: 'blue', fontSize: 15, fontFamily: 'roboto',fontWeight:'bold'}}>REGISTER NOW!</Text>
                <Text style={{ color: 'blue', fontSize: 15, fontFamily: 'roboto' ,fontWeight:'bold'}}>fORGOT PASSWORD?</Text>
               </View>
              </TouchableOpacity>
            </View>
            <View style={styles.img}>
              <Image source={require('../Assets/houses.jpg')} ></Image>
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
    backgroundColor: 'lightgrey'

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
  img: {
    flex: 1,

    marginTop: 300,
    height: '100%',
    width: '100%',

    alignItems: 'center',

  }


})