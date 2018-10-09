<template>
    <div class="bannermenu">
        <div class="row">
            <div class="col-sm">
                <div @click="toggle()" align="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                </div>
            </div>
            <div class="col-sm"><h1 align="center">P x P</h1></div>
            <div class="col-sm">
                <div align="right">
                    <nuxt-link :to="`/contact`">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="toggle()">&times;</a>
            <a href="/">Shop</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/commission">Commission</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                isOpen: false
            }
        },
        methods: {
            toggle: function () {
                if(this.isOpen === false) {
                    document.getElementById("mySidenav").style.width = "250px";
                    this.isOpen = true;
                } else {
                    document.getElementById("mySidenav").style.width = "0";
                    this.isOpen = false;
                }
            }
        }
    }
</script>

<style>
@import '~/assets/styles.scss';

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5x;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

.bannermenu {
    transition: margin-left .5s;
    padding: 20px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}

.bar span {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
}

</style>