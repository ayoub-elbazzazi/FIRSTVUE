<template>
  <div class="container">
    <button v-on:click="incrimet">Incriment {{ count }} </button>
    <BetonPoli v-if="count > 0" /> Monsieur {{ nom }} vous etes maintenant
    inscri mais pas encore reusite
    <div v-if="count > 1">
      Monsieurn{{ nom }} doit payer votre facture s'il vous plait
    </div>
    <div v-if="count > 2">Monsieur {{ nom }} votre ligne est interperdue</div>
    <div v-if="count > 8">
      <BetonPoli v-for="d in 3" :key="d" /> voila votre cadeau
    </div>
  </div>
</template>

<script>
import BetonPoli from "../components/BetonPoli.vue";

export default {
  components: { BetonPoli },

  data() {
    return {
      count: 0,
      nom: "ayoub",
      a: 1,
    };
  },
  methods: {
    incrimet() {
      this.count++;
      console.log(this.count);
    },
    
  },
  computed: {
      aPlus: {
        get: function() {
          return this.a + 1;
        },
        set: function(v) {
          this.a = v - 1;
        },
      },
    },
};
</script>

<style></style>
