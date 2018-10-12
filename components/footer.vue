<template>
    <div>
        <div class="container email-signup">
            <p>blah</p>
            <div class="row email-title">
                <div class="col-lg">
                    Blah blah blah
                </div>
            </div>
            <div class="row">
                <div class="col-lg">
                    Sign up with your email address to receive an update when a new piece arrives!
                </div>
            </div>
            <div class="row">
                <div class="col-lg">
                    <b-form inline>
                        <label class="sr-only" for="inlineFormInputName2">Name</label>
                        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="First & Last Name" />
                        <label class="sr-only" for="inlineFormInputGroupUsername2">Email</label>
                        <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                            <b-input id="inlineFormInputGroupUsername2" placeholder="Email Address" />
                        </b-input-group>
                        <b-button variant="primary">Save</b-button>
                    </b-form>
                </div>
            </div>
        </div>

        <div class="container footer-social-icons">
                <ul class="social-icons">
                    <li><a href=""><svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg></a></li>
                    <li><a href=""><svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.615 6h-9.23c-.766 0-1.385.62-1.385 1.384v9.23c0 .766.619 1.386 1.385 1.386h9.23c.766 0 1.385-.62 1.385-1.385v-9.23c0-.765-.619-1.385-1.385-1.385zm-4.615 3.693c1.274 0 2.309 1.032 2.309 2.307s-1.035 2.307-2.309 2.307-2.307-1.033-2.307-2.307 1.033-2.307 2.307-2.307zm4.5 6.346c0 .255-.207.461-.461.461h-8.078c-.254 0-.461-.207-.461-.461v-5.039h.949c-.045.158-.078.32-.102.486-.023.168-.038.339-.038.514 0 2.04 1.652 3.693 3.691 3.693s3.691-1.653 3.691-3.693c0-.174-.015-.346-.039-.514-.023-.166-.058-.328-.102-.486h.95v5.039zm0-6.991c0 .255-.207.462-.461.462h-1.088c-.256 0-.461-.208-.461-.462v-1.087c0-.255.205-.461.461-.461h1.088c.254 0 .461.207.461.461v1.087z"/></svg></a></li>
                    <li><a href=""><svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.542 1.581 4.712 3.812 5.587-.052-.475-.1-1.203.022-1.721.108-.468.703-2.982.703-2.982s-.181-.359-.181-.891c0-.834.485-1.457 1.087-1.457.512 0 .759.385.759.845 0 .516-.328 1.285-.497 1.998-.142.598.3 1.084.889 1.084 1.066 0 1.887-1.124 1.887-2.747 0-1.437-1.032-2.441-2.507-2.441-1.707 0-2.709 1.28-2.709 2.604 0 .516.199 1.068.446 1.368.049.06.056.112.041.173l-.165.68c-.027.11-.088.134-.201.081-.75-.349-1.219-1.444-1.219-2.325 0-1.893 1.375-3.63 3.964-3.63 2.082 0 3.7 1.482 3.7 3.465 0 2.068-1.304 3.732-3.114 3.732-.608 0-1.179-.315-1.375-.689l-.374 1.426c-.135.521-.501 1.175-.746 1.573.562.173 1.16.267 1.778.267 3.313 0 6-2.687 6-6 0-3.314-2.687-6-6-6z"/></svg></a></li>
                    <li><a href=""><svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.207-.394.271-.6.146-1.643-1.005-3.712-1.232-6.149-.675-.235.053-.469-.094-.522-.328-.054-.235.092-.469.328-.523 2.666-.609 4.954-.347 6.799.78.205.126.27.395.144.6zm.857-1.906c-.158.257-.494.338-.751.18-1.881-1.156-4.75-1.491-6.975-.816-.289.088-.594-.075-.681-.363-.087-.289.076-.593.364-.681 2.542-.771 5.703-.398 7.863.93.257.158.338.494.18.75zm.074-1.984c-2.257-1.34-5.979-1.464-8.133-.81-.345.105-.711-.09-.816-.436-.105-.346.09-.712.436-.817 2.473-.75 6.583-.605 9.181.937.311.184.413.586.229.897-.185.311-.587.413-.897.229z"/></svg></a></li>                
                </ul>
                <p>copyright 2017-2018.<br>
                PxP. all rights reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
@import '~/assets/styles.scss';

body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
}
a {
    text-decoration: none;
    color: #fff;
}
p > a:hover{
    color: #d9d9d9;
    text-decoration:  underline;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin:  1% 0 1% 0;
}
._12 {
    font-size: 1.2em;
}
._14 {
    font-size: 1.4em;
}
ul {
    padding:0;
    list-style: none;
}
.footer-social-icons {
    width: 350px;
    display: block;
}
.social-icon {
    fill: black;
    margin-: 10px;
}
ul.social-icons {
    margin-top: 10px;
}
.social-icons li {
    vertical-align: top;
    display: inline;
    height: 100px;
}
.social-icons a {
    color: #fff;
    text-decoration: none;
}
.email-signup {
    background-color: #18a2b8;
}

</style>

