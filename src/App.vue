<template lang="pug">
  v-app
    v-navigation-drawer(v-model='drawer' app='')
      .d-flex.flex-column
        .pa-4
        v-card-title.d-flex.justify-center.text-uppercase Home
          v-img(src='https://cdn.vuetifyjs.com/images/cards/house.jpg' height='200px')
          v-btn.my-2(to="/") entrar
        .pa-4
        v-card-title.d-flex.justify-center.text-uppercase Añadir
          v-img(src='https://cdn.vuetifyjs.com/images/cards/cooking.png' height='200px')
          v-btn.my-2(to="/add") entrar
    v-app-bar.d-flex.align-center.justify-center.text-capitalize(
      app=''
      color='primary'
      dark=''
    )
      v-app-bar-nav-icon(@click='drawer = !drawer')
      v-btn.my-4(text to="/") Centro de ayuda Seif
    v-main
     router-view(class="mt-8")
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    drawer: null
  })
}
</script>
