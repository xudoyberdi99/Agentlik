<template>
  <section class="about-us my-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="about-image">
            <img src="../img/b1.png" class="main-img" alt="edw">
            <div class="video-player">
              <div class="cirle-anim"></div>
               <button @click="change" class="play-button">
                <i class="fas fa-play"></i>  
                </button>
                 <div v-if="visible" class="vedio1" >
                  <div>
                    <iframe  width="600" height="400" src="https://www.youtube.com/embed/iYWpNexfFXI?autoplay=1&mute=0" 
                      title="YouTube video player" 
                      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowfullscreen></iframe>
                  </div>
                    <button  @click="visible=!visible" class="delete-play">
                    <i class="fas fa-delete-left fa-2x text-success"></i>
                   </button>
                  </div>
            </div>
            
          </div>
          
        </div>
      <div class="col-md-6">
        <div class="about-content">
          <h4 class="about-title">Bizda tajribali mutaxassislar bor va biz sizning maqsadingizga erishish uchun qo'limizdan kelganini qilamiz. Sizning Baxtingiz - Birinchi Ustumiz.</h4>
          <p class="about-para">Xabaringiz bor, joriy yilning 24-yanvar kunidan boshlab bir oy muddatga barcha ta'lim muassasalarida oʻquv jarayoni “Online” shaklga oʻtkazildi.</p>
          <p class="about-para2">Xabaringiz bor, Respublika "Barkamol avlod" bolalar maktabi tomonidan o‘quvchi-yoshlarning bo‘sh vaqtlarini mazmunli tashkil qilish maqsadida "Mening orzum" shiori ostida onlayn tanlov e'lon qilingan</p>
          <div class="row ">
            <div class="col-sm-4">
              <div class="counter-box box1 text-center">
                <h3 class="text-danger font-weight-bold"><span>970</span><i class="fa-fas fa-plus"></i></h3>
                <p>Bizdagi o'quvchilar</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="counter-box box2 text-center">
                <h3 class="text-dark font-weight-bold"><span>130</span><i class="fa-fas fa-plus"></i></h3>
                <p>O'qituvchilar </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="counter-box box3 text-center">
                <h3 class="text-primary font-weight-bold"><span>340</span><i class="fa-fas fa-plus"></i></h3>
                <p>Hududimizdagi maktablar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>

export default {
  components:{
    
  },
  data(){
    return {
      visible:false,
    }
  },
  methods: {
    change(){
      this.visible=true
    },
  },
   
}
</script>

<style scoped>
.about-image{
  position: relative;
}
.vedio1 {
  position: relative;
  z-index: 1111;

}

.delete-play {
  position: absolute;
  top:0;
  right:-400px;
  top: -30px;

}
.video-player{
    position: absolute;
    bottom: -83px;
    right: 0px;
    width: 250px;
    height: 300px;
    background-image: url('../img/b1.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 5px;
}
.video-player::before{
    position: absolute;
    content: "";
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border-radius: 5px;
}
.play-button{
 position: absolute;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  right: 100px;
  bottom: 110px;
 
}

.cirle-anim{
  position: absolute;
  background-color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  right: 95px;
  bottom: 105px;
   animation-name: animat;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transition: 0.4s all ease-in-out;
}
@keyframes animat{
  from {
    transform: scale(.5, .5);
    opacity: 1;
  }
  to {
    transform: scale(1.5);
    opacity: 0.1;
  }
}
.main-img {
  height: 350px;
  width: 450px;
}
.about-title{
  font-weight: bold;
  
}
.about-para{
  opacity: 0.6;
  font-family: sans-serif;
  font-size: 18px;
}
.about-para2{
  opacity: 0.6;
  font-size: 18px;
  padding-top: 15px;
  font-family: sans-serif;
}
</style>