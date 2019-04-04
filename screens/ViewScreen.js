import React from 'react'
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { SafeAreaView, withNavigation } from 'react-navigation'
import { withContext } from 'react-simplified-context'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = ({
  navigation,
  articles,
  toggle,
}) => {
  const id = navigation.getParam('id', -1)
  const article = articles.find(a => a.id === id)

  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader
        title={article.title}
        bookmark={() => { toggle(id) }}
        bookmarked={article.bookmarked}
      />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onLongPress={() => navigation.navigate('Edit', { id: id })}
        >
          <Text style={styles.content}>
            {article.content}
          </Text>
        </TouchableOpacity>
        <Text style={styles.date}>
          {article.date}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding :20,
    fontSize: 16,
    lineHeight: 20,
    color: '#424242',
  },
  date: {
    padding: 20,
    paddingTop: 0,
    fontSize: 12,
    color: '#BDBDBD',
  },
})

export default withNavigation(withContext(ViewScreen))
