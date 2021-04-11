<template>
    <div class="container">  
     <input type="text" v-model="searsh">
     <div v-for="user in infoSearsh()" :key="user"> 
       {{user.nom}},{{user.prenom}} 
      
        
     </div>
     <button @click="reversee()">reverse</button>  <br>
      
       <div v-for="number in eventtt " :key="number"> 
         {{ number}}
       
       </div>

         
   <span @click="rate=item" class="fa fa-star" v-for="item in parseInt(rate)" :key="item">1   </span>
        <span @click="rate=item+rate" class="fa fa-star-o" v-for="item in 5-rate" :key="item"> 0   </span>
         <input type="text" v-model="rate">
<!--
      <span  class="fa fa-star" v-for="item in rate" :key="item">1   {{item}}</span>
        <span  class="fa fa-star-o" v-for="item in 5-rate" :key="item"> 0   {{item}}</span>
 -->


     <h1>Les tableaux Bootstrap {{nom}}</h1>
     
      <table class="table">
        <thead>
          <tr >
            <th>Nom </th>
            <th>Prénom</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody v-for="itm in Information" :key="itm.nom">
          <tr >
            <td>{{ itm.nom | reverse}}</td>
            <td>{{ itm.prenom | uppercase}}</td>
            <td>{{ itm.Age}}</td>
          </tr>
         
          
        </tbody>
      </table>
  </div>
    
</template>

<script>
export default {

data() {
    return {
      rate:3,
      Information: [
        {
          nom: "EL BAZZAZI",
          prenom: "Ayoub",
          Age: 25,
        },
        {
          nom: "EDAIG",
          prenom: "Khalid",
          Age: 26,
        },
        {
          nom: "EL BEKRI",
          prenom: "marwane",
          Age: 24,
        },
      ],
      numbers:[1,2,3,4,5,6,7,8,9],
      searsh:"",
       
    };



    },
    computed:{
         eventtt: function(){
            return this.numbers.filter(function(number){
              return number%2 == 0;
            });
          } 
    },
        methods:{
          reversee:function(){
            this.Information.reverse();
          },
          eventt: function(numbers){
            return numbers.filter(function(number){
              return number%2 == 0;
            });
          },
          infoSearsh :function(){
            var app=this;
            return this.Information.filter(function(user){
              return user.nom.indexOf(app.searsh) !==-1;
            });
          }

  },
   
}
</script>

<style>

</style>