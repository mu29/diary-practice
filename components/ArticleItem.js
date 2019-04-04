import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

const ArticleItem = ({
  article: {
    id,
    title,
    content,
    date,
  },
  navigation,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('View', { id: id })}
      style={styles.container}
    >
      <View style={styles.icon}>
        <Ionicons name="md-list" size={14} color="#9E9E9E" />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text
          numberOfLines={2}
          style={styles.content}
        >
          {content}
        </Text>
        <Text style={styles.date}>
          {date}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 0,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
    paddingTop: Platform.select({
      ios: 1,
      android: 4,
    }),
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  title: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  content: {
    marginBottom: 4,
    fontSize: 14,
    color: '#9E9E9E',
    lineHeight: 18,
  },
  date: {
    fontSize: 12,
    color: '#BDBDBD',
  }
})

export default withNavigation(ArticleItem)
