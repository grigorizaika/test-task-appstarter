<template>
<div class="navigation-wrapper">
    <a href="" class="navigation-logo">
        AppStarter
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
    width: 83%;
    height: 40px;
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
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    color: #fff;
}

.items {
}

.navigation-item {
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    margin: 0 15px 0 15px;
}

.navigation-button {
    text-transform: uppercase;
    padding: 10px 20px 10px 20px;
    margin: 0px 15px 0px 0;
    height: 40px;
    font-size: 14px;
    line-height: 19px;
}
</style>