<template>
    <div class="container">
        <div class="row">
            <div class="col-lg nav-bar-menu" align="right">
            <nuxt-link :to="`/about`" class="nav-bar-menu-item">about</nuxt-link>
            <img src="~/static/icon/iconmonstr-shopping-cart-3-240.png" style="height: 40px; width: auto"></img>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

.nav-bar-menu {
    padding-bottom: 20px;
}

.nav-bar-menu-item {
    padding-right: 20px;
    font-family: 'Lato', sans-serif;
    font-size: 1.5em;
}

</style>