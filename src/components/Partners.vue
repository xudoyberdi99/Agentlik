<template>
  <!-- {{ data }} -->
  <div>
  <VueSlickCarousel v-bind="settings">
  <div><h3>1dsadbsadjhbsajhb</h3></div>
</VueSlickCarousel>
</div>
</template>

<script>
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Partners',
  components: {  
    VueSlickCarousel 
  },
  data() {
      return {
        settings:{
            "dots": true,
            "dotsClass": "slick-dots custom-dot-class",
            "edgeFriction": 0.35,
            "infinite": false,
            "speed": 500,
            "slidesToShow": 1,
            "slidesToScroll": 1
        }
        }
  },
    methods:{
    
    },
    computed:{
        ...mapState({
            data: state =>state.partners.data,
            isloading: state => state.partners.isloading,
            error: state => state.partners.error,
        })
    }, 
    mounted(){
        this.$store.dispatch('partners')
    },
    
}
</script>

<style scoped>

</style>