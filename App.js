import React from 'react'
import { AsyncStorage } from 'react-native'
import { ContextProvider } from 'react-simplified-context'
import Navigator from './Navigator'

export default class App extends React.Component {
  state = {
    articles: [{
      id: 1,
      title: '감정',
      content: `사람은 단어에서 감정을 배워.
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

- 김철수씨 이야기`,
      date: '2019년 4월 5일',
      bookmarked: true,
    }, {
      id: 2,
      title: '감정2',
      content: `사람은 단어에서 감정을 배워.
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

- 김철수씨 이야기`,
      date: '2019년 4월 5일',
      bookmarked: false,
    }],
    id: 3,
  }

  componentWillMount() {
    AsyncStorage.getItem('@diary:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }

  save = () => {
    AsyncStorage.setItem('@diary:state', JSON.stringify(this.state))
  }

  render() {
    return (
      <ContextProvider
        articles={this.state.articles}
        create={(title, content) => {
          const now = new Date()
          this.setState({
            articles: [{
              id: this.state.id,
              title: title,
              content: content,
              date: `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`,
              bookmarked: false,
            }].concat(this.state.articles),
            id: this.state.id + 1,
          }, this.save)
        }}
        update={(id, title, content) => {
          const newArticles = [...this.state.articles]
          const index = newArticles.findIndex(a => a.id === id)
          newArticles[index].title = title
          newArticles[index].content = content
          this.setState({ articles: newArticles }, this.save)
        }}
        toggle={(id) => {
          const newArticles = [...this.state.articles]
          const index = newArticles.findIndex(a => a.id === id)
          newArticles[index].bookmarked = !newArticles[index].bookmarked
          this.setState({ articles: newArticles }, this.save)
        }}
      >
        <Navigator />
      </ContextProvider>
    );
  }
}
