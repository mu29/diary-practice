import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native'

const BookmarkScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        즐겨찾기 화면
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default BookmarkScreen
