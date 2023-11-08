import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Register/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})