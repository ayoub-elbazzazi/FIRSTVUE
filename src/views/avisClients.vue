<template>
  <div class="container">
    <div class="row">
      <button @:click="arreter()" v-on:click="incrmt()">Arreter l'appareil{{active}} {{ count }}</button>
      <div class="carre" v-if="active == true"></div>
    </div>
    <BetonPoli/>
    <div v-if="count==3">
    <Blogsidebor  v-for="item in count" :key="item" />
    </div>
     <br>
     <contact nmm="ayoub"/>
      
   </div>
</template>

<script>
import Blogsidebor from "@/components/Blog/Blogsidebor.vue"
import BetonPoli from "@/components/BetonPoli.vue"
import Contact from '../components/Contact.vue'
export default {
    components :{
        Blogsidebor,
        Contact,
        BetonPoli
    },
  data() {
    return {
        nmm:String,
      active: true,
      count: 0,
    };
  },
  methods: {
    arreter: function() {
      return (this.active = false);
    },
    incrmt : function(){
        return (this.count++);
    }
  },
};
</script>

<style scoped>
.carre {
  width: 100px;
  height: 100px;
  background: red;
  top: 50px;
}</style
>>
