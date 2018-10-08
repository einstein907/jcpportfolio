<template>
    <div class="bannermenu">
        <div class="row">
            <div class="col-sm">
                <div @click="openNav()">
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>
            </div>
            <div class="col-sm"><h1>P x P</h1></div>
            <div class="col-sm"></div>
        </div>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            openNav: function () {
                document.getElementById("mySidenav").style.width = "250px";
            },
            closeNav: function () {
                document.getElementById("mySidenav").style.width = "0";
            }

        }
    }
</script>

<style>
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