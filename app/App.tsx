import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Forgotpassword from './Pages/ForgotPassword'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Forgotpassword/>
      </ScrollView>
    </SafeAreaView>
  )
}