import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native'
import EditHeader from '../components/EditHeader'

const EditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EditHeader />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default EditScreen
