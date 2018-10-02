<template>
<div class="container">
  <div class="row">
    <div class="col-sm" v-for="(piece, index) in pieces" :key="index">
      <h1>{{ piece.title }}</h1>
      <img :src="piece.mainImage" class="rounded img-thumbnail">
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
import pieces from '../static/pieces.json';

export default {
  fetch({ store }) {
    store.commit('setPieces', pieces)
  },
  computed: {
    ...mapState(['pieces'])
  }
}
</script>

<style>
img {
  height: 200px;
  width: 200px;
}
</style>
