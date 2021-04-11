<template>
    <div class="container">  
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
  props:[nom,prenom,Age ],
data: function() {
    return {
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
    };
  },
}
</script>

<style>

</style>