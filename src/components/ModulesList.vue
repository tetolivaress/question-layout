<template lang="pug">
    v-row
      v-col(cols="4" v-for="(m, k) in modules" :key="i")
        ModuleDetails(:module="m")
</template>
<script>
import ModuleDetails from '@/components/ModuleDetails'
export default {
  props: ['modules'],
  components: {
    ModuleDetails
  }
}
</script>
