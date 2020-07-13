<template>
<div class="navigation-wrapper">
    <a href="" class="navigation-logo">
        <img src="" alt="A logo">
    </a>
    <div class="navigation-items">
        <a class="navigation-item">Features</a>
        <a class="navigation-item">Video Tour</a>
        <a class="navigation-item">Reviews</a>
        <a class="navigation-item">Pricing</a>

        <button type="button" class="navigation-button">Get It Free</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'navigation',

}
</script>

<style>
.navigation-wrapper {
    width: 80%;
    height: 100px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

.navigation-logo {
    padding: 8px;
}

.items {
}

.navigation-item {
    padding: 8px;
    color: #fff;
}

.navigation-button {
    text-transform: capitalize;
}
</style>