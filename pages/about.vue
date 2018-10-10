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
                <div class="col">
                  <img src="~/static/img/profile.jpg" style="width: 100%"></img>
                </div>
                <div class="col">
                  <h1>About</h1>
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
