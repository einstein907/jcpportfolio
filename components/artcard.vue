<template>
    <div class="col art-card" align="left">
        <img :src="this.mainImage" class="img-thumbnail"></img>
        <div class="card-info">
            "{{ this.title }}" - {{ this.price }}<br>
            {{ this.size }}; {{ this.medium }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        mainImage: String,
        medium: String,
        price: String,
        size: String
    }
}
</script>

<style>
.card-info {
    font-size: 1em;
}

.art-card {
    width: 205px;
}
</style>