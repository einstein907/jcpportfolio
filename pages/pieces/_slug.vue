<template>
  <div>
    <header>
      <LeftNavBar />
    </header>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <LeftNavBar />
          </div>
          <div class="col-8">
            <img :src="piece.mainImage" />
            <div class="card-title">{{piece.title}}</div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import LeftNavBar from '~/components/leftnavbar.vue';
import NavigationBar from '~/components/navigationbar.vue';
import pieces from '~/static/pieces.json';

export default {
    asyncData({ params }) {
    return { piece: pieces.find(piece => piece.id === parseInt(params.slug, 0)) }
  },
  components: { LeftNavBar, NavigationBar }
}
</script>

<style>
</style>
