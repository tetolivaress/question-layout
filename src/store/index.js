import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modules: [

    ],
    products: [

    ],
    categories: [

    ],
    enviroments: [

    ],
    faq: [
      {
        question: 'aaaaaaaaaaaa',
        answer: 'bbbbbbbbbbbbb'
      },
      {
        question: 'xxxxxxxxxxxxx',
        answer: 'yyyyyyyyyyyyy'
      },
      {
        question: 'eeeeeeeeeeee',
        answer: 'ffffffffffffff'
      }
    ]
  },
  mutations: {
  }
})
