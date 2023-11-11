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
          {/*top part with buttons*/}
          <View style={styles.log}>
            <View>
                <Image source={require('../Assets/user.png')} style={{height:100,width:100}}/>
            </View>
            <View style={styles.txt}>
              <View >
                <Text style={styles.text}>LOGIN TO GET MORE FEATURES</Text>
                <View style={styles.btn}>
                  <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.text}>LOGIN</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.text}>REGISTER</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>

          {/*extra options*/}
          <View style={{marginTop:-150,padding:16}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Icons name='real-estate-agent'/>
              <Text style={[styles.text,styles.options]}>Agencies</Text>
              <Icons name='keyboard-arrow-right'/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Icons name='exclamationcircleo'/>
              <Text style={[styles.text,styles.options]}>About Us</Text>
              <Icons name='keyboard-arrow-right'/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Icons name='email-fast-outline'/>
              <Text style={[styles.text,styles.options]}>Contact Us</Text>
              <Icons name='keyboard-arrow-right'/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Icons name='questioncircleo'/>
              <Text style={[styles.text,styles.options]}>Privacy Policy</Text>
              <Icons name='keyboard-arrow-right'/>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'black',
  },
  log:{
    backgroundColor:'white',
    flexDirection:'row'
  },
  txt:{
    padding: 16,
    fontSize:20
  },
  btn:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

  },
  btn1:{
    margin:8,
    marginLeft:2,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width:100,
    fontWeight:'bold',
    height:'52%',
    justifyContent: 'center',
  
  },

  btn2:{
    margin:8,
    padding:16,
    backgroundColor:'#E7EFFA',
    borderRadius:16,
    width:100,
    alignItems:'center',
    height:'59%',
    justifyContent: 'center',
  },
  options: {
    margin:8,
    fontSize:18,
    borderColor:'#DDDDDD',
    borderBottomWidth:1
  }

})