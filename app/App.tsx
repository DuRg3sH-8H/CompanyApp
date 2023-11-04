import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Pages/Login'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Login/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})