<template>
<div class="navigation-wrapper">
    <a href="" class="navigation-logo">
        AppStarter
    </a>
    <div v-if="windowWidth > 767" class="navigation-items">
        <a class="navigation-item">Features</a>
        <a class="navigation-item">Video Tour</a>
        <a class="navigation-item">Reviews</a>
        <a class="navigation-item">Pricing</a>
        <button type="button" class="navigation-button">Get It Free</button>
    </div>
    <div v-if="windowWidth <= 767" class="menu-open-button">
        <i v-if="smallScreenMenuOpen" class="fa fa-times open-icon" aria-hidden="true" @click="closeSmallScreenMenu"></i>
        <i v-else class="fa fa-bars close-icon" aria-hidden="true" @click="openSmallScreenMenu"></i>
    </div>
    <div class="navigation-items-small" :class="{'small-menu-open': smallScreenMenuOpen && windowWidth <= 767}">
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
    
    data: function() {
        return {
            windowWidth: undefined,
            smallScreenMenuOpen: false,
        }
    },

    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
            this.closeSmallScreenMenu();
        },
        openSmallScreenMenu() {
            this.smallScreenMenuOpen = true;
        },
        closeSmallScreenMenu() {
            this.smallScreenMenuOpen = false;
        },
    },
    
    mounted() {
      this.onResize();
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      });
    },

    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    }

}
</script>

<style lang="scss">
$navigation-width: 83%;

.navigation-wrapper {
    z-index: 5;
    width: $navigation-width;
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
    margin: 0 15px 0 15px;
}

.menu-open-button {
    color: #fff;
    
}

.menu-open-button:hover {
    cursor: pointer;
}

.navigation-items-small {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 0vh;
    overflow: hidden;
    // background: url("../assets/images/intro-bg.png");
    // background: red;
    border-radius: 6px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: max-height 0.4s ease-in;
    backdrop-filter: blur(30px);

    .navigation-item {
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        margin: 12px;
        opacity: 0;
        transition: opacity 0.4s ease-in 0s;
    }

    .navigation-button {
        text-transform: uppercase;
        padding: 20px 20px 20px 20px;
        margin: 20px 15px 0px 0;
        height: auto;
        width: 50%;
        font-size: 20px;
        line-height: 30px;
        opacity: 0;
        transition: opacity 0.4s ease-in 0s;
    }
}

.small-menu-open {
    max-height: 100vh;
    transition: max-height 0.4s ease-in;
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.5);
}


@media screen and (max-width: 768px) {
    .navigation-item {
        margin: 15px !important;

    }

    .navigation-item:first-child {
        margin-top: 30px !important;
    }
    
    .navigation-button {
        margin: 15px 15px 30px 15px !important;
    }

    .navigation-items-small.small-menu-open {
        .navigation-item {
            opacity: 1;
            transition: opacity 0.4s ease-in 0.4s;
        }

        .navigation-button {
            opacity: 1;
            transition: opacity 0.4s ease-in 0.4s;
        }
    }

}


</style>