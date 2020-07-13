<template>

<div class="main-container">
    <navigation></navigation>
    <div class="top-section">
        <div class="left">
            <img class="logo" src="" alt="A logo">
            <div class="motto">
                <b>AppStarter.</b> 
                Best landing page for web and mobile apps.
            </div>
            <div class="buttons">
                <button class="button-accent">Download Now</button>
                <button>Watch Video</button>
            </div>
        </div>
        <div class="right">
            <div class="tablet-frame">
                <div class="promo-image"></div>
            </div>
        </div>
    </div>
    <div class="gap"></div>
    <div class="description">
        <div class="text-box">
            <h1><b>Why</b> do we use it?</h1>
            <p>
                This sounded nonsense to Alice, so she said nothing,
                but set off at once toward the Red Queen. To her surprise,
                she lost sight of her in a moment.
            </p>
        </div>
    </div>
    <div class="timer-section">
        <timer/>
    </div>

<footer-custom/>
</div>
</template>

<script>
import Footer from './Footer.vue'
import Navigation from './Navigation.vue'
import Timer from './Timer.vue'

export default {
    name: 'landing-page',
    components: {
        'navigation': Navigation,
        'footer-custom': Footer,
        'timer': Timer,
    }
}

</script>

<style lang="scss">
.main-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
}

.top-section {
    height: 60vh;
    padding-top: 100px;
    background-color: #0080ff;
    padding: 100px 10% 0 10%;
    display: flex;
    flex-flow: row nowrap;

    .left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;

        .logo {
            margin: 20px 0 20px 0;

        }

        .motto {
            font-size: 30px;
            color: white;
            line-height: 40px;
            text-align: left;
            margin: 20px 0 20px 0;
        }

        .buttons {
            margin: 20px 0 20px 0;
        }
    }

    .right {
        width: 50%;
        position: relative;

        .tablet-frame {
            position: absolute;
            width: 525px;
            height: 675px;
            bottom: -130px;
            left: 50%;
            transform: translateX(-50%);
            background-color:  #fff;
            border-radius: 60px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);


            .promo-image {
                position: absolute;
                top: 10%;
                left: 2.5%;
                width: 95%;
                height: 80%;
                background: #0080ff;
                box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.5);
            }
        }

    }
}

.gap {
    height: 180px;
    width: 100%;
}

.description {

}

.text-box {
    margin: auto;
    max-width: 40%;
}

.timer-section {
    padding: 32px;
}
</style>