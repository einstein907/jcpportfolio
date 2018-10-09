<template>
  <div>
    <header>
      <NavigationBar />
    </header>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <LeftNavBar />
          </div>
          <div class="col-8">
            <div class="row">
              <nuxt-link :to="`/pieces/${piece.id}`" class="col-sm" v-for="(piece, index) in pieces" :key="index">
                <ArtCard :mainImage="piece.mainImage" :title="piece.title" :price="piece.price" :medium="piece.medium" :size="piece.size" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import { mapState } from "vuex";
import pieces from '../static/pieces.json';
import LeftNavBar from "~/components/LeftNavBar.vue"
import NavigationBar from "~/components/navigationbar.vue";
import ArtCard from "~/components/artcard.vue";

export default {
  fetch({ store }) {
    store.commit('setPieces', pieces)
  },
  computed: {
    ...mapState(['pieces'])
  },
  components: { LeftNavBar, NavigationBar, ArtCard }
}
</script>

<style>
</style>
