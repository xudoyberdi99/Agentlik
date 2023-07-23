<template>
  <section class="newsDetail">
   <div v-if='isloading' class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  <NewsDetail v-else />
</section>
</template>

<script>
import { NewsDetail } from "../components";
import { mapState } from "vuex";
export default {
  components:{
    NewsDetail,
  },
mounted(){
  this.$store.dispatch('newsDetail',this.$route.params.id)
},
computed:{
  ...mapState({
    isloading: state=>state.news.isloading,
  }),
}
}
</script>

<style scoped>
.newsDetail {
  margin-top: 150px;
  padding-bottom: 20px;
}
</style>