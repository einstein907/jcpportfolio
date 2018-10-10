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
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <img :src="piece.mainImage" style="width: 100%"></img>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <img :src="piece.mainImage" class="preview-image"></img>
                  <img :src="piece.mainImage" class="preview-image"></img>
                  <img :src="piece.mainImage" class="preview-image"></img>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <p> 
                    <h1>{{ piece.title }}</h1>
                    <b>Date Created:</b> {{ piece.date }}<br>
                    <b>Original Size:</b> {{ piece.size }}<br>
                    <b>Medium:</b> {{ piece.medium }}<br>
                  </p>
                </div>
              </div>
            </div>
            <div class="card-title">buy things from here</div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import LeftNavBar from '~/components/leftnavbar.vue';
import NavigationBar from '~/components/navigationbar.vue';
import portfolioPieces from '~/static/portfolio.json';

export default {
    asyncData({ params }) {
    return { piece: portfolioPieces.find(piece => piece.id === parseInt(params.slug, 0)) }
  },
  components: { LeftNavBar, NavigationBar }
}
</script>

<style>
.preview-image {
  width: 250px;
  margin: auto;
  padding: 20px;
}
</style>
