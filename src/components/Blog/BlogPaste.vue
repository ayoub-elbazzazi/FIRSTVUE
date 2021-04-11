<template>
    <div class="container">
             <button @click="increment"> {{counter}}</button>
    </div>
</template>

<script>
export default {
    name:'BlogPaste',
    data(){
         return{
             counter:this.value
         }
     },
     props:{
         value:{
             default:0
         }
     },
     methods:{
         increment :function(){
          this.counter++;
        this.$emit('incrmt');
         
     }
     }
}
</script>

<style>

</style>