<template>
  <section v-show="visible" id="navbar" class="sticky-menu sticky" v-on:scroll="handleScroll">
        <div class="container">
            <div class="row m-1">
                <div class="col-md-3">
                    <div class="logo">
                     <div style="width: 200px; height: 40px;">
                            <a href="/"><img src="@/img/logo2.png" alt="logo" @click="Home" style="width: 100%;"></a>
                        </div>
                    </div>
                </div>         
                <div class="col-md-9">
                    <div class="menu-box d-flex justify-content-center">
                        <ul class="nav menu-nav" style="display: flex; justify-content: center; align-items: center;">
                            <li class=" nav-item dropdown item active"><RouterLink class="nav-link" :to="{name:'home'}">Bosh sahifa</RouterLink></li>
                            <li class=" nav-item dropdown item"><RouterLink class="nav-link" :to="{name:'documents'}">Normativ Hujjatlar</RouterLink></li>
                            <li class=" nav-item dropdown"><a class="nav-link  item" href="/teacher">Bizning o'qituvchilar </a></li>
                            <li class=" nav-item dropdown item"><RouterLink class="nav-link" :to="{name:'news'}">Yangiliklar</RouterLink></li>
                            <li class=" nav-item dropdown item"><RouterLink class="nav-link" :to="{name:'achievements'}">Yutuqlarimiz</RouterLink></li>
                            <li class=" nav-item dropdown item"><RouterLink class="nav-link" :to="{name:'price'}">To'lov</RouterLink></li>
                            <li class=" nav-item dropdown item"><RouterLink class="nav-link" :to="{name:'bams'}">BAM</RouterLink></li>
                            <li class=" nav-item dropdown item"><RouterLink class="nav-link" :to="{name:'partners'}">Hamkorlar</RouterLink></li>
                            <li class=" nav-item dropdown"><a class="nav-link  item" href="/media">Media</a></li>
                            <li class=" nav-item dropdown"><a class="nav-link  item" href="/mashgulotlar">Mashg'ulotlar jadvali</a></li>
                            <li class=" nav-item dropdown item"><RouterLink class="nav-link" :to="{name:'courses'}">To'garaklar</RouterLink></li>           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   
</template>

<script>
import {mapGetters} from 'vuex'
import {gettersTypes} from '@/modules/types'
export default {
    data() {
    return {
      visible: false
    }
  },
    methods: {
        Home(){
            return this.$router.push('/')
        },
        handleScroll (event){
        this.visible = window.scrollY > 250 ? true : false
    },
        
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
        },
    computed:{
        ...mapGetters({
            currentUser: gettersTypes.currentUser,
            isLoggedIn:  gettersTypes.isLoggedIn,
            isAnonymous: gettersTypes.isAnonymous,
        }),
    },
}
</script>

<style>
.item {
    font-size: 15px;
    font-weight:600;
    text-transform: uppercase;
}
.nav-link {
    color: black;
}
.nav-link:hover{
    color:green;

}
.sticky-menu {
    display: none;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 11;
    animation: 300ms ease-in-out 0s 1 normal none running fadeInDown;
    background: rgb(255, 255, 255);
    height: 120px;
    padding-top: 18px;
    box-shadow: rgb(34 34 34) 0px 0px 20px -10px;
}
.sticky {
    display: block;
}
</style>