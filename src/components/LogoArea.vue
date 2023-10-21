<template>
    <section class="logo-area">
        <div class="container-fluid">
            <div class="row py-3 pb-4">
                <div class="col-md-3">
                    <div class="logo">
                        <a href="/" >
                            <img src="../img/agentlik.png" @click="Home"  class="img-fluid" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="logo-contact-box d-flex justify-content-end align-items-center">
                        <div class="emcontact-box d-flex align-items-center">
                            <div class="icon">
                              <img src="../img/phone.png" alt="" style="width:90%;">
                            </div>
                            <div class="box-content">
                                <p>Biz bilan bog'lanish</p>
                                <span>(908) 875 7678</span>
                            </div>
                        </div>
                        <div class="emcontact-box d-flex">
                          <div class="icon">
                            <img src="../img/email.png" alt="" style="width: 90%;" class="mt-1">
                          </div>
                            <div class="box-content">
                                <p>Elektron pochtamiz</p><span>testlar@gmail.com</span>
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
methods:{
    Home(){
            return this.$router.push('/')
        },
}
}
</script>

<style scoped>
.logo{
  width: 60px;
}
.box-content p{
    margin-bottom: 0;
    margin-left: 10px;
    margin-right: 30px;
    
}
.box-content span {
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
    margin-right: 30px;
}
.logo-area{
  background-color: #F6F9F8;
}
.icon {
  height: 50px;
  width: 50px;
   
}
</style>