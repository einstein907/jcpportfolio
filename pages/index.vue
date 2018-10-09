<template>
  <div>
    <header>
      <NavigationBar />
    </header>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <BannerMenu />
          </div>
          <div class="col-8">
            body of stuff
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import { mapState } from "vuex";
import pieces from '../static/pieces.json';
import BannerMenu from "~/components/bannermenu.vue"
import Footer from "~/components/footer.vue";
import NavigationBar from "~/components/navigationbar.vue";

export default {
  fetch({ store }) {
    store.commit('setPieces', pieces)
  },
  computed: {
    ...mapState(['pieces'])
  },
  components: { BannerMenu, Footer, NavigationBar }
}
</script>

<style>
</style>
