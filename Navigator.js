import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import ListScreen from './screens/ListScreen'
import BookmarkScreen from './screens/BookmarkScreen'

const TabNavigator = createBottomTabNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return (<Ionicons name="md-list-box" size={25} color={tintColor} />)
      },
      tabBarLabel: '목록',
    }
  },
  Bookmark: {
    screen: BookmarkScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return (<Ionicons name="md-heart" size={25} color={tintColor} />)
      },
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#424242',
    inactiveTintColor: '#9E9E9E',
    showLabel: false,
    borderTopColor: '#BDBDBD',
    backgroundColor: '#FFFFFF',
  }
})

export default createAppContainer(TabNavigator)
