<template>
  <div class="container">
    <Header />
    <ShopHeader />

    <body>
      <div class="container">
              <div class="row">
                <div class="col-3">
                  <div class="piece-title">{{ piece.title }}</div>
                  <div class="description">blah</div>
                </div>
                <div class="col-9">
                  <img :src="piece.mainImage" style="width: 100%"></img>
                </div>
              </div>
            </div>
    </body>
    
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue';
import Header from '~/components/header.vue';
import pieces from '~/static/pieces.json';
import ShopHeader from '~/components/shop-header.vue';

export default {
  asyncData({ params }) {
    return { piece: pieces.find(piece => piece.id === parseInt(params.slug, 0)) }
  },
  components: {
    Footer,
    Header,
    ShopHeader
  }
}
</script>

<style>
@import '~/assets/styles.scss';
</style>
