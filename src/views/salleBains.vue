<template>
  <div class="our-help">
    <h1 >help </h1>
<p>this is page for ayoub el bazzazi</p>
  <BetonPoli/>
  <div class="container">
      <div class="alert alert-success alert-disimissble fade show" role="alert">
          learn vue
          <button type="button" class="close" aria-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
      </div>

  </div>

     <button @click="showMsg('thanks for inscription',$event)">Show</button>
     <form @submit="saveData" >
       <input type="text" name="test" >
       <button type="submit">GO</button>
     </form>
     <input @keyup.left="handle" type="text" placeholder="test event entre">
     <button @keyup.delete="delet"></button>
</div>

</template>

<script>
import BetonPoli from "@/components/BetonPoli.vue"
export default {
      name:'salleBains',
     components: { BetonPoli },
     data(){
          return{

          }
     },
     methods:{
       showMsg: function(mg,event){
         console.log(event);
         alert(mg);
       },
       saveData: function(event){
           event.preventDefault();
       },
       handle:function(event){
         console.log(event);
       },
       delet:function(){
             
       }
     }

}
</script>

<style>

</style>
