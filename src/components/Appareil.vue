<template>
  <div>
    <li class="list-group-item">
      <div v-if="appareil.status==='etaint'"
        style=" width:20px;height:20px;background-color:red"
        
      ></div>
        <div >
            
            <h4 > Appareil Name: {{appareil.name}} Status:{{appareil.status}}</h4>
        </div>
      
      <input type="text" class="form-control" v-model="status"   @change='onChange'/>
    </li>
    <button @click="$emit('editStatus',status)">Ajouter</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        status:this.appareil.status
    };
  },
  props:{
        appareil:{
            type:Object || Array,
            default : null,
        }
  },
      methods: {
          onChange(e){
              console.log(e);
          }
      }
      
         
      
  
};
</script>

<style></style>
