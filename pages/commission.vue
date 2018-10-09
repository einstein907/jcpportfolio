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
            <h1>Commission</h1>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import BannerMenu from '~/components/bannermenu.vue';
import NavigationBar from '~/components/navigationbar.vue';
import Footer from '~/components/footer.vue';

export default {
  components: { BannerMenu, Footer, NavigationBar }
}
</script>

<style>
</style>
