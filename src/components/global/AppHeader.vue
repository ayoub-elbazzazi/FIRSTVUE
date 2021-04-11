<template>
  <div class="header">
    <div class="container">
      <img
        src="@/assets/logoCarrelage.jpg"
        class="rounded-circle"
        alt="ayoub"
        style="width:8%; heigth:auto; float:left;  left: 0;
    right: 0"
      />
      <img
        src="@/assets/photo_ayoub.jpg"
        class="rounded-circle"
        alt="ayoub"
        style="width:5%; heigth:auto; float:right"
      />
      <p  class="con">
      <img
        src="@/assets/phone.svg"
        class="rounded-circle"
        alt="ayoub"
       style="width:3%; heigth:auto; float:centre"
      />
      Devis gratuit 06 32 87 13 51
      </p>

      <ul class="row"  >
        <router-link to="/"  tag="li"> <a> Home</a></router-link
        >|
        <router-link to="/faience"  tag="li"> <a> Faience</a></router-link
        >|
        <router-link to="/amenagementExterieur" tag="li" >
          <a> Amenagement exterieur</a></router-link
        >|
        <router-link  to="/solsDecoration" tag="li">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Sols décoratifs
          </a>
          
          </router-link
        >| 
        <router-link to="/salleBains" tag="li">
          <a> Salle de bains</a>
           
        </router-link
        >|
        <router-link to="/isolationPlatrerie" tag="li">
          <a> Isolation Platrerie</a></router-link
        >|
        <router-link to="/photos" tag="li"> <a> Photos</a></router-link
        >|
        <router-link to="/avisClients" tag="li">
          <a> Avis Clients</a></router-link
        >|
        <router-link to="/appareil" tag="li" replace>
          <a> Appareils</a></router-link
        >
      </ul>
    </div>
  </div>
</template>
<style scoped>
.image {
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  padding: 0;
}
.header {
  background-color: rgb(140, 213, 226);
  color: rgba(191, 120, 233, 0.267);
  overflow: hidden;
}
.logo {
  font-size: 10px;
  padding: auto;
  float: left;
  width: 200px;
}
ul {
  float: left;
  width: calc(100%-200px);
}
li {

  padding: 10px;
  font-size: 18px;
  display: inline-block;
  text-decoration: none;
  left: none;
}
a {
  color: #fff;
  text-decoration: none;
  
}
.con{
  background: rgba(78, 194, 165, 0.267);
}
</style>
