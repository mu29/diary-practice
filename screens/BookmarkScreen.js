import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import Header from '../components/Header'
import ArticleItem from '../components/ArticleItem'

const BookmarkScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="즐겨찾기" />
      <ArticleItem article={{ id: 1, title: '김철수', content: '이야기', date: '2019년 4월 5일' }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default BookmarkScreen
