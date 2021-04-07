<template lang="pug">
  v-container
    v-card.ma-12.pa-6
      py-2 Vista principal > Añadir material de apoyo
      .secondary.white--text.text-center.py-4 Material de apoyo
      v-form(ref="form")
        v-row.mt-4
          v-col.d-flex.justify-center.subtitle-1(cols='2') Producto
          v-col(cols='4')
            v-select(solo label="Producto" :items="products" v-model="form.product")
          v-col.d-flex.justify-center.subtitle-1(cols='2') Modulo
          v-col(cols='4')
            v-select(
              v-model="form.module"
              solo
              label="Modulo"
              :hint="`${modules.name}`"
              :items="modules"
              item-text="name"
              item-value="name"
            )
        v-row
          v-col.d-flex.justify-center.subtitle-1(cols='2') Categorias
          v-col(cols='4')
            v-select(solo label="Categorias" :items="categories" v-model="form.category")
          v-col.d-flex.justify-center.subtitle-1(cols='2') Entorno
          v-col(cols='4')
            v-select(
              v-model="form.enviroment"
              solo
              label="Entorno"
              :hint="`${enviroments.name}`"
              :items="enviroments"
              item-text="name"
              item-value="name"
            )

        h3 Preguntas
        v-text-field(label="Ingresa La Pregunta" solo v-model="form.question")

        h3 Respuesta
        rich-text-editor(
          @input="form.answer = $event"
          cancelText="Cancelar"
          validText="Guardar"
          @valid="save"
          height="250"
        )

      v-dialog(transition="dialog-top-transition" v-model="dialog" width="500")
        template(v-slot:default="dialog")
          v-card
            v-card-text.justify-center.d-flex.flex-column.align-center.mt-4
              v-icon(color="success" size="120") mdi-check-circle-outline
              .text-h4.pa-2 Pregunta creada
</template>
<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    dialog: false,
    form: {
      product: '',
      module: '',
      category: '',
      enviroment: '',
      question: '',
      answer: ''
    }
  }),
  computed: {
    ...mapState(['products', 'modules', 'categories', 'enviroments'])
  },
  methods: {
    save () {
      this.$store.commit('ADD_FAQ', this.form)
      this.dialog = true
      this.$refs.form.reset()
    }
  }
}
</script>
