<template>
  <div>
    <h3>Mes Appareils</h3>
    <Appareil  v-for="(item,index) in appareils  " :key="index"  :appareil="item" @editStatus="updateStatus($event)"/>
  </div>
</template>

<script>
import Appareil from "@/components/Appareil.vue";
export default {
  components: {
    Appareil,
  },
  data() {
    return{
        appareils: [
        {
          name: "television",
          status: "etaint",
        },
        {
          name: "pc",
          status: "etaint",
        },
        {
          name: "referegirateur",
          status: "allumer",
        },
      ]
    }
    
  },
  methods:{
      updateStatus(data){

        console.log(data)
      }
  }

};
</script>

<style></style>
