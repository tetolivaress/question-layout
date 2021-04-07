<template lang="pug">
  v-container
    v-row.d-flex.justify-center.align-center.secondary
      v-btn.my-4(to="/add") Añadir Material de Apoyo
    v-row.text-center.my-8 Nuestros Productos
    v-row.text-center
      ModulesList(:modules="modules")
</template>

<script>
import { mapState } from 'vuex'
import ModulesList from '@/components/ModulesList'

export default {
  name: 'Home',
  components: {
    ModulesList
  },
  computed: {
    ...mapState(['modules'])
  }
}
</script>
