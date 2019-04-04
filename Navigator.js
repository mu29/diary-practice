import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import ListScreen from './screens/ListScreen'
import BookmarkScreen from './screens/BookmarkScreen'
import EditScreen from './screens/EditScreen'
import ViewScreen from './screens/ViewScreen'

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
  AddButton: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return (<Ionicons name="ios-add-circle" size={36} color="#DA5746" />)
      },
      tabBarOnPress: ({ navigation }) => navigation.navigate('Edit'),
    }
  },
  Bookmark: {
    screen: BookmarkScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return (<Ionicons name="md-heart" size={25} color={tintColor} />)
      },
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: '#424242',
    inactiveTintColor: '#9E9E9E',
    showLabel: false,
    borderTopColor: '#BDBDBD',
    backgroundColor: '#FFFFFF',
  }
})

const AppNavigator = createStackNavigator({
  Edit: EditScreen,
  View: ViewScreen,
  Tab: TabNavigator,
}, {
  initialRouteName: 'Tab',
  mode: 'modal',
  headerMode: 'none',
})

export default createAppContainer(AppNavigator)
