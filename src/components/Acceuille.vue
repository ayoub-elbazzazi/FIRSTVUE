<template>
 <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style="width:10%;heigth:auto" >
    <div class="carousel-item active">
      <img src="@/assets/lavabo.jpg" class="d-block w-100" alt="rr">
    </div>
    <div class="carousel-item">
      <img src="@/assets/lavabo.jpg" class="d-block w-100" alt="ff">
    </div>
    <div class="carousel-item">
      <img src="@/assets/lavabo.jpg" class="d-block w-100" alt="gg">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
</template>


<script>
export default {

}
</script>


<style scoped>
.ima {
  width: 100%;
  height: auto;
}
</style>
