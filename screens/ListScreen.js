import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native'

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        목록 화면
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ListScreen
