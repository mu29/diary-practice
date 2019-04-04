import React from 'react'
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { SafeAreaView, withNavigation } from 'react-navigation'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onLongPress={() => navigation.navigate('Edit')}
        >
          <Text style={styles.content}>
            사람은 단어에서 감정을 배워.
            단어가 없으면 사람은 자신의 감정을 훨씬 뭉뚱그려서 표현할 수 밖에 없어.
            고독이라는 단어가 없다면 쓸쓸하다라고 생각 할 수 밖에 없고, 쓸쓸함이란 단어가 없으면 외롭다는 감정만 느낄 수 있어.
            귀여운 것, 이쁜 것, 웅장한 것, 멋진 것을 그저 ‘아름답다’ 만으로 표현하는건 고통이야.
            반대로 단어를 알게 되면 사람은 단어에 감정이 귀속돼.
            단어에 자기 감정을 맞추는거지.
            옷 사이즈처럼 가장 근접한 단어에 감정을 집어 넣는거야.완벽히 맞진 않지만 대충은 맞으니까. 편하니까.
            그 단어가 자기 감정이라 착각하는거지.
            사고도 생각도 약속된 단어에 귀속돼버리는 거야.
            그리고 그게 사고에 제약을 줘.
            그런데 시는 그 약속을 뒤죽박죽으로 만들어 버려.
            맞지 않는 곳에 생뚱맞은 단어를 집어 넣어서 뇌를 혼란스럽게 만들어.
            사고의 세계를 무한히 넓혀 줘.

            - 김철수씨 이야기
          </Text>
        </TouchableOpacity>
        <Text style={styles.date}>
          2019년 4월 5일
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

export default withNavigation(ViewScreen)
