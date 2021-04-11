<template>
  <div class="container" >
    <div v-for="(item,index) in product" :key="index" >
       
    </div>
    
     </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
   
    };
  },
  props:{
    namee:String,
    age:Number,
   product:{type:Object,default:null},
   }
  
};
</script>

<style>
</style>
