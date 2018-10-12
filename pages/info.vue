<template>
  <div class="container">
    <Header />

    <body>
      <div class="container">
              <div class="row">
                <div class="col">
                  <img src="~/static/img/profile.jpg" style="width: 100%"></img>
                </div>
                <div class="col">
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

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style>
@import '~/assets/styles.scss';
</style>
