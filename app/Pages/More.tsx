import { SafeAreaView,StatusBar, ScrollView, StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icons from '../Components/Icons'

export default function More() {
  return (
    <SafeAreaView>
      <ScrollView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{backgroundColor:'white',flex:1,minHeight:830}}>
          <View style={{flexDirection:'row',padding:10}}>
            <TouchableOpacity>
            <Icons name='arrowleft'/>
            </TouchableOpacity>
            <Text style={{fontFamily:'Roboto',fontSize:25,color:'black',paddingLeft:24}}>More</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View>
            <View>
                <Image source={require('../Assets/user.png')} style={{height:100,width:100}}/>
            </View>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})