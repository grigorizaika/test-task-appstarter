<template>

<div class="main-container">
    <navigation></navigation>
    <div class="top-section">
        <div class="left">
            <div class="appstarter-logo">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M40 79.375C61.7462 79.375 79.375 61.7462 79.375 40C79.375 18.2538 61.7462 0.625 40 0.625C18.2538 0.625 0.625 18.2538 0.625 40C0.625 61.7462 18.2538 79.375 40 79.375ZM64.3374 63.8874C70.3768 57.7349 74.1016 49.3024 74.1016 40C74.1016 21.1662 58.8338 5.89844 40 5.89844C21.1662 5.89844 5.89844 21.1662 5.89844 40C5.89844 49.311 9.63003 57.7504 15.6793 63.9044L37.2754 14.7754H42.7246L64.3374 63.8874ZM59.73 67.8178L54.1504 54.8535H25.9375L20.3374 67.8656C25.8941 71.7936 32.6775 74.1016 40 74.1016C47.3521 74.1016 54.1608 71.7749 59.73 67.8178ZM28.2227 49.7559H51.9531L40.0879 22.0703L28.2227 49.7559Z" fill="url(#paint0_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="-38.75" y1="40" x2="40" y2="118.75" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF8E64"/>
                            <stop offset="1" stop-color="#FFE641"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
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
                <div class="tablet-screen">
                </div>
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
    height: calc(720px - 140px);
    padding-top: 140px;
    background-color: #0080ff;
    background: url("../assets/images/intro-bg.png");
    background-size: cover;
    padding: 140px 10% 0 10%;
    display: flex;
    flex-flow: row nowrap;

    .left {
        width: 50%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 40px;

        .appstarter-logo {
            position: relative;
            width: 90px;
            height: 90px;
            border-radius: 12px;
            background-color: #fff;

            svg {
                position: absolute;;
                top: 5px;
                left: 5px;
            }
        }

        .motto {
            color: #fff;
            font-style: normal;
            font-size: 35px;
            line-height: 50px;
            letter-spacing: 1px;
            text-align: left;
            margin: 20px 0 20px 0;
            padding-right: 20px;
        }

        .buttons {
            display: flex;
            flex-flow: row;

            margin: 20px 0 20px 0;

            button {
                letter-spacing: 1px;
            }

            button:first-child {
                margin: 0px 10px 0px 0px;
            }

            button:last-child {
                margin: 0px 0px 0px 10px;
            }

        }
    }

    .right {
        width: 50%;
        position: relative;

        .tablet-frame {
            position: absolute;
            width: 470px;
            height: 710px;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 60px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 96.24%, rgba(32, 33, 39, 0.03) 100%), #FFFFFF;
            box-shadow: inset 0px -2px 6px rgba(40, 43, 49, 0.06);


            .tablet-screen {
                position: absolute;
                top: 10%;
                left: 4%;
                width: 92%;
                height: 80%;
                background: #0080ff;
                box-shadow: inset 0px -2px 6px rgba(40, 43, 49, 0.06);
                background-image: url("../assets/images/tablet-bg.png"); 
                background-size: cover;
                border-radius: 4px;
            }

        }

    }
}

.gap {
    height: 250px;
    width: 100%;
}

.description {

}

.text-box {
    margin: auto;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 1px;

    p {
        margin: auto;
        max-width: 40%;
        text-align: center;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        color: #676C75;

    }
}

@media screen and (max-width: 1200px) {
  .top-section {
      padding: 140px 5% 140px 5%;

      .motto {
        font-size: 28px !important;
        line-height: 40px !important;
      }

      .tablet-frame {
            width: 400px !important;
            height: 604px !important;
      }

      .buttons {
          button {
            font-size: 14px;
            line-height: 20px;
          }

      }
  }
}


@media screen and (max-width: 768px) {
    .top-section {
        height: calc(1140px - 140px);
        flex-flow: column nowrap;

        .left {
            width: 100%;
            align-items: center;
            
            .motto {
                text-align: center;
                
            }

            .buttons {
                flex-flow: column nowrap !important;
                justify-content: center;
                align-items: center;
                width: 100%;

                button {
                    margin: auto auto 20px auto !important;
                    font-size: 17px !important;
                    line-height: 23px !important;
                    width: 40%;
                }
            }
        }
        
        .right {
            width: 100%;
            .tablet-frame {
                left: 50%;
                transform: translateX(-50%);
            }
        }

    }

    .gap {
        height: 80px;
    }
}

@media screen and (max-width: 480px) {
        .top-section {
        height: calc(1040px - 140px);
        flex-flow: column nowrap;

        .left {
            width: 100%;
            align-items: center;
            
            .motto {
                text-align: center;
                
            }

            .buttons {
                flex-flow: column nowrap !important;
                justify-content: center;
                align-items: center;
                width: 100%;

                button {
                    margin: auto auto 20px auto !important;
                    font-size: 14px !important;
                    line-height: 17px !important;
                    width: 60%;
                }
            }
        }
        
        .right {
            .tablet-frame {
                // width: 300px !important;
                // height: 453px !important;
                width: 80vw !important;
                height: 120vw !important;
                border-radius: 10vw;
            }
        }
    }

    .text-box {
        h1 {
            font-size: 28px;
            line-height: 35px;
        }
        p {
            max-width: 80%;
        }
    }
}

</style>