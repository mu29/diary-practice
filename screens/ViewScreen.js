import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

const ViewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        조회 화면
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default ViewScreen
