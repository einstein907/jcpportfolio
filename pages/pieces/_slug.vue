<template>
  <div class="content">
    <BannerMenu />
    <img :src="piece.mainImage"></img>
    <div class="card-title">{{piece.title}}</div>
  </div>
</template>

<script>
import pieces from '~/static/pieces.json';
import BannerMenu from '~/components/bannermenu.vue';

export default {
  asyncData({ params }) {
    return { piece: pieces.find(piece => piece.id === parseInt(params.slug, 0)) }
  },
  components: { BannerMenu }
}
</script>

<style>
</style>
