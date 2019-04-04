import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default ViewScreen
