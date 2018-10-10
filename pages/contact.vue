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
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import LeftNavBar from '~/components/leftnavbar.vue';
import NavigationBar from '~/components/navigationbar.vue';

export default {
  components: { LeftNavBar, NavigationBar }
}
</script>

<style>
</style>
