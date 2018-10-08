<template>
  <div class="content">
    <header>
      <BannerMenu />
    </header>
    <body>
      <h1>About</h1>
      <img src="~/static/img/profile.jpg"></img>
      <p> 
        Jenna Palmer is a Saint Louis based artist who's art is heavily influenced by 
        common era realism and photorealism in illustration. Her self-taught study of human anatomy 
        and figure drawing add an element of artistic style recognizable by her use of geometric 
        shapes and harsh shading in her art. Though a software engineer by trade, Jenna has worked
        for over eight years in the mediums of graphite, colored pencils, watercolor, acrylic, and 
        ink. This wide breadth of mediums exemplifies her artistic philosophy of "practicing curiosity". 
        As both an engineer and artist, dedication and practice are imperative to technical development
        and values Jenna applies to every piece she produces. Her hopes as an artist are to create
        beautiful and meaningful pieces that help illustrate our shared humanity here on earth 
        because at the end of the day, we aren't all that different.  
      </p>
    </body>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import BannerMenu from '~/components/bannermenu.vue';
import Footer from '~/components/footer.vue';

export default {
  components: { BannerMenu, Footer }
}
</script>

<style>
</style>
