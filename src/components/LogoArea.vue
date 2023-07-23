<template>
    <section class="logo-area">
        <div class="container">
            <div class="row py-3 pb-4">
                <div class="col-md-3">
                    <div class="logo">
                        <a href="/" >
                            <img src="../img/logo2.png" @click="Home" class="img-fluid" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="logo-contact-box d-flex justify-content-end align-items-center">
                        <div class="emcontact-box d-flex align-items-center">
                            <div class="box-icon">
                                <i class="fa-sharp fa-solid fa-phone-volume fa-2xl icon"></i>
                            </div>
                            <div class="box-content">
                                <p>Biz bilan bog'lanish</p>
                                <span>(908) 875 7678</span>
                            </div>
                        </div>
                        <div class="emcontact-box d-flex">
                            <div class="box-icon">
                                <i class="fa-solid fa-envelope fa-2xl icon"></i>
                            </div>
                            <div class="box-content">
                                <p>Elektron pochtamiz</p><span>barkamolavlod@gmail.com</span>
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
.box-content p{
    margin-bottom: 0;
    padding-top: 10px;
    margin-left: 10px;
    margin-right: 30px;
    
}
.box-content span {
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
    margin-right: 30px;
}
.box-icon{
    width: 60px;
    height: 60px;
    background-color: rgb(58, 206, 58);
    padding: 15px;
    border-radius: 50%;
    margin-top: 12px;
    padding-top: 18px;
    padding-right: 22px;
}
.icon {
   color: white;
   
}
</style>