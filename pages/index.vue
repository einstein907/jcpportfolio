<template>
  <div class="container">
    <Header />

    <no-ssr>
      <div v-masonry 
        transition-duration="3s" 
        item-selector=".item" 
        class="masonry-container grid" 
        fit-width="true"
      >
        <div v-masonry-tile class="item" :key="index" v-for="(piece, index) in portfolioPieces">
          <img class="art-card" :src="`${piece.mainImage}`"></img>
        </div>
      </div>
    </no-ssr>

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import portfolioPieces from '../static/portfolio.json';
import NoSSR from 'vue-no-ssr';
import Footer from '~/components/footer.vue';
import Header from '~/components/header.vue';

export default {
  fetch({ store }) {
    store.commit('setPortfolioPieces', portfolioPieces)
  },
  computed: {
    ...mapState(['portfolioPieces'])
  },
  components: {
    'no-ssr': NoSSR,
    Footer,
    Header
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style>
@import '~/assets/styles.scss';
</style>
