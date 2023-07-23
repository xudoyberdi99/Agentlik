<template>
  <div id="carousel1" class="carousel slide" data-ride="carousel" time-interval="100">
  <div class="carousel-inner">
    <div class="carousel-item active anim">
      <img class="d-block w-100  " src="../img/n2.jpeg" alt="F">
      <div class="text">
                  <p class="text1">Xush kelibsiz bizning sahifamizga</p>
                  <p class="text2">Bu yerda o'zingiz uchun qiziqarli malumotlarni olasiz</p>
        </div>
    </div>
    <div class="carousel-item anim ">
      <img class="d-block w-100" src="../img/n4.jpeg" alt="S">
          <div class="text">
                  <p class="text3">Xush kelibsiz bizning sahifamizga</p>
                  <p class="text4 text-right">Bu yerda o'zingiz uchun qiziqarli malumotlarni olasiz</p>
            </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#"  data-target="#carousel1" data-slide="prev">
    <span class="carousel-control-prev-icon" ></span>
    
  </a>
  <a class="carousel-control-next" href="#" data-target="#carousel1" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
 </div>
</template>

<script>
export default {

}
</script>

<style>
.text {
  position: relative;
}
.text1{
  text-transform: uppercase;
  position: absolute;
  color: red;
  font-size: 24px;
  font-weight: bold;
  top: -750px;
  left: 200px;
}
.text2{
  text-transform: uppercase;
  position: absolute;
  color: rgb(35, 35, 204);
  font-weight: 700;
  width: 600px;
  top: -700px;
  left: 200px;
  font-size: 30px;
}
.text3 {
  text-transform: uppercase;
  position: absolute;
  color: red;
  font-size: 24px;
  font-weight: bold;
  top: -850px;
  right: 200px;
}
.text4{
  text-transform: uppercase;
  position: absolute;
  color: rgb(35, 35, 204);
  font-weight: 700;
  width: 600px;
  top: -800px;
  right: 200px;
  font-size: 30px;
  
}
.anim {
  animation-name: slides;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  height: 80vh;
  
}
@keyframes slides{
  from {
    transform: scale(1);
    transition: all .4s linear;
  }to {
    transform: scale(1.2);
    transition: all .8s linear;
  }
}
</style>