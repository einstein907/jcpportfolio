<template>
  <div>
    <header>
      <NavigationBar />
    </header>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <LeftNavBar />
          </div>
          <div class="col-9">
            <div class="row">
              <nuxt-link :to="`/pieces/${piece.id}`" class="col-sm" v-for="(piece, index) in pieces" :key="index">
                <div class="card" style="width: 18rem;">
                  <img class="card-img-top" :src="`${piece.mainImage}`" :alt="`${piece.title}`">
                  <div class="card-body">
                    <p class="card-text">
                      "{{ piece.title }}" - {{ piece.price }}<br>
                      {{ piece.size }}; {{ piece.medium }}
                    </p>
                  </div>
                </div>
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
import LeftNavBar from "~/components/leftnavbar.vue"
import NavigationBar from "~/components/navigationbar.vue";

export default {
  fetch({ store }) {
    store.commit('setPieces', pieces)
  },
  computed: {
    ...mapState(['pieces'])
  },
  components: { LeftNavBar, NavigationBar }
}
</script>

<style>
</style>
