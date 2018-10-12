<template>
  <div class="container">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" class="title">PORTRAITS BY PALMER</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#" class="menu-item">portfolio</b-nav-item>
          <b-nav-item href="#" class="menu-item">prints + commissions</b-nav-item>
          <b-nav-item href="#" class="menu-item">contact</b-nav-item>
          <b-nav-item href="#" class="menu-item">news</b-nav-item>

        </b-navbar-nav>  

      </b-collapse>
    </b-navbar>

    <no-ssr>
      <div v-masonry 
        transition-duration="3s" 
        item-selector=".item" 
        class="masonry-container grid" 
        fit-width="true"
      >
        <div v-masonry-tile class="item" :key="index" v-for="(piece, index) in pieces">
          <img class="art-card" :src="`${piece.mainImage}`"></img>
        </div>
      </div>
    </no-ssr>

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import pieces from '../static/pieces.json';
import NoSSR from 'vue-no-ssr';
import Footer from '~/components/footer.vue';

export default {
  fetch({ store }) {
    store.commit('setPieces', pieces)
  },
  computed: {
    ...mapState(['pieces'])
  },
  components: {
    'no-ssr': NoSSR,
    Footer
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
