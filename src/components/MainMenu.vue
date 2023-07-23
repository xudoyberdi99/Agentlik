<template>
  <section class="main-menu">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main-menu-box">
                    <div class="menu-box d-flex justify-content-center">
                        <ul class="nav menu-nav" style="display: flex; justify-content: center; align-items: center;">
                            <li class="nav-item dropdown active"><RouterLink class="nav-link" :to="{name:'home'}">Bosh sahifa</RouterLink></li>
                            <li class="nav-item dropdown">
                                <RouterLink class="nav-link"  :to="{name:'documents'}">Normativ Hujjatlar</RouterLink>
                            </li>
                            <li class="nav-item dropdown"><a class="nav-link" href="/teacher">Bizning o'qituvchilar </a></li>
                            <li class="nav-item dropdown"><RouterLink class="nav-link" :to="{name:'news'}">Yangiliklar</RouterLink></li>
                            <li class="nav-item dropdown"><RouterLink class="nav-link" :to="{name:'achievements'}">Yutuqlarimiz</RouterLink></li>
                            <li class="nav-item dropdown"><RouterLink class="nav-link" :to="{name:'price'}">To'lov</RouterLink></li>
                            <li class="nav-item dropdown"><RouterLink class="nav-link" :to="{name:'bams'}">BAM</RouterLink></li>
                            <li class="nav-item dropdown"><RouterLink class="nav-link" :to="{name:'partners'}">Hamkorlar</RouterLink></li>
                            <li class="nav-item dropdown"><a class="nav-link" href="/media">Media</a></li>
                            <li class="nav-item dropdown"><a class="nav-link" href="/">Mashg'ulotlar jadvali</a></li>
                            <li class="nav-item dropdown"><RouterLink class="nav-link" :to="{name:'courses'}">To'garaklar</RouterLink>
                                <ul class="dropdown list-unstyled"></ul></li>
                        </ul>

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
   
}
}
</script>

<style scoped>
.main-menu-box {
    background-color: #29c5fd;
    position: relative;
    z-index: 111;
}
.menu-box {
    position: absolute;
    width: 100%;
    top: -20px;
    left: 0px;
    padding: 0px 30px;
    background: rgb(41, 197, 253);
    border-radius: 5px;
   
}
.main-menu-box .menu-box .menu-nav .nav-link {
    font-size: 14px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 500;
    padding: 18px 25px 15px 0px;

}
.main-menu-box .menu-box .menu-nav .nav-link:hover {
    color: black;
    transform: scale(1.1);
    transition: all .3s ease-in-out;
}

</style>