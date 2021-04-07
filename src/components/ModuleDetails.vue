<template lang="pug">
  v-card
    v-img(:src='module.img' height='200px')
    v-card-title.d-flex.justify-center.text-uppercase {{ module.name }}
    v-btn.mb-6 Ver
</template>
<script>
export default {
  props: ['module']
}
</script>
