import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native'
import Header from '../components/Header'

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="나의 글" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ListScreen
