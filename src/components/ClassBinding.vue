<template>
  <div >
       <button @click="clicked()">click me </button>
  </div>
</template>

<script>
export default {
   props:['val'],
   methods:{
       clicked:function(){
           
           this.$emit('updateVal',this.val+1)
       }
   }
}
</script>

<style>

</style>