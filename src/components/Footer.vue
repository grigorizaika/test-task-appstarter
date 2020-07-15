<template>
<div class="footer">
    <div class="company">AppStarter</div>
    <div class="copyright">
        <p>Created with &lt;3 by <b>Sergey Azovskiy</b></p>
        <p>&copy; AppStarter, 2017</p>
    </div>
    <div class="contact">
        <div class="social-buttons">
            <button type="button" class="button-social">
                <i class="fa fa-twitter" aria-hidden="true"></i>
            </button>
            <button type="button" class="button-social">
                <i class="fa fa-facebook-f"></i>
            </button>
            <button type="button" class="button-social">
                <i class="fa fa-instagram" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
.footer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    grid-gap: 8px;
    padding: 32px 135px 32px 135px;
    background-color: #fff;
    border-top: 1px solid #ddd;

    .company {
        text-align: left;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 25px;
        color: #282B31;
    }

    .copyright {
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 15px;
        color: #999EA8;

        p {
            margin: 5px 0px;
        }

        b {
            color: #282B31;
        }
    }

    .contact {
        text-align: right;
        
    
        .social-buttons {
            margin-left: auto;
            text-align: right;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;

            .button-social {
                position: relative;
                width: 40px;
                height: 40px;
                border-radius: 0px;
                margin: 0px;
                padding: 8px;
                box-shadow: none;
                border-top: 1px solid #E7E8EA;
                border-bottom: 1px solid #E7E8EA;
                border-left: 1px solid #E7E8EA;
                color: #B9BDC3;
            }
            
            .button-social:first-child {
                border-radius: 8px 0px 0px 8px;

            }

            .button-social:last-child {
                border-radius: 0px 8px 8px 0px;
                border-right: 1px solid #E7E8EA;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .footer {
        display: flex;
        flex-flow: column nowrap;
        padding: 32px 10% 32px 10%;

        .company {
            text-align: center;
            padding: 16px;
        }
        .contact {
            text-align: center;
            padding: 16px;
            .social-buttons {
                justify-content: center;
                margin: auto;
                padding: 16px;
            }
        }

    }
}
</style>