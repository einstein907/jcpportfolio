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
            <h1>Commission</h1>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import LeftNavBar from '~/components/LeftNavBar.vue';
import NavigationBar from '~/components/navigationbar.vue';

export default {
  components: { LeftNavBar, NavigationBar }
}
</script>

<style>
</style>
