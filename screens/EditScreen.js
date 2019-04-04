import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native'

const EditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        글쓰기 화면
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default EditScreen
