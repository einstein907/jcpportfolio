<template>
<div class="container">
  <header>
    <BannerMenu />
  </header>
  <div class="row">
    <nuxt-link :to="`/pieces/${piece.id}`" class="col-sm" v-for="(piece, index) in pieces" :key="index">
      <h1>{{ piece.title }}</h1>
      <img :src="piece.mainImage" class="rounded img-thumbnail">
    </nuxt-link>
  </div>
  <footer>
    <Footer />
  </footer>
</div>
</template>

<script>
import { mapState } from "vuex";
import pieces from '../static/pieces.json';
import BannerMenu from "~/components/bannermenu.vue"
import Footer from "~/components/footer.vue";

export default {
  fetch({ store }) {
    store.commit('setPieces', pieces)
  },
  computed: {
    ...mapState(['pieces'])
  },
  components: { BannerMenu, Footer }
}
</script>

<style>
@import '~/assets/styles.scss'; 

img {
  width: 200px;
}
</style>
