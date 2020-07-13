<template>
<div class="footer">
    <div class="company">AssSpanker</div>
    <div class="copyright">
        <small>Created with &lt;3 by Some Dude</small>
        <small>&copy; AppStarter, 2017</small>
    </div>
    <div class="contact">
        <div class="social-buttons">
            <button type="button" class="button-social">t</button>
            <button type="button" class="button-social">w</button>
            <button type="button" class="button-social">i</button>
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
    display: grid;
    grid-template-columns: [footer-start] 1fr [copyright] 1fr [contact] 1fr [footer-end];
    grid-gap: 8px;
    padding: 32px;
    background-color: #fff;
    border-top: 1px solid #ddd;

    .company {
        text-align: center;
    }

    .copyright {
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
    }

    .contact {
        text-align: center;
    
        .social-buttons {
            margin: auto;
            text-align: left;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: flex-start;

            .button-social {
                position: relative;
                border-radius: 0px;
                margin: 0px;
                padding: 8px;
                box-shadow: none;
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                border-left: 1px solid #ddd;
            }
            
            .button-social:first-child {
                border-radius: 8px 0px 0px 8px;

            }

            .button-social:last-child {
                border-radius: 0px 8px 8px 0px;
                border-right: 1px solid #ddd;
            }
        }
    }
}
</style>