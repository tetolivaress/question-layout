<template lang="pug">
    v-row
      v-col(cols="4" v-for="(m, k) in modules" :key="i")
        v-card
          v-img(:src='m.img' height='200px')
          v-card-title.d-flex.justify-center.text-uppercase {{ m.name }}
          v-btn.mb-6 Ver
</template>
<script>
export default {
  props: ['modules']
}
</script>
