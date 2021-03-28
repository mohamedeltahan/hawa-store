<template>
    <div class="main-footer-container container-fluid">
        <div class="main-footer container">
            <div class="sec company-info col-lg-3 col-md-6 col-sm-12">
                <div class="footer-com-disc">
                    <h1>hawa</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Excepturi minima atque vero nobis repellendus
                        consequuntur voluptas, maiores quo expedita! Illum
                        commodi, nemo maiores omnis quam quis expedita libero
                        dolor hic.
                    </p>
                </div>
                <div class="footer-social-links">
                    <span>social links <span></span></span>
                    <ul>
                        <li>
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sec f-sec col-lg-3 col-md-6 col-sm-8">
                <div class="useful-links-footer">
                    <span>Useful links</span>
                    <ul>
                        <li>home</li>
                        <li>about us</li>
                        <li>contact</li>
                        <li>products</li>
                        <li>favourit</li>
                    </ul>
                </div>
            </div>
            <div class="sec f-sec col-lg-3 col-md-6 col-sm-8">
                <div class="contact-info-footer">
                    <span>contact info</span>
                    <ul>
                        <li>head office</li>
                        <li>13 haday2 el madi city center , cairo , Egypt</li>
                        <li>phone number : 0123456789</li>
                        <li>office number : 02456789</li>
                        <li>E-mail : Hawa@hawa.com</li>
                    </ul>
                </div>
            </div>
            <div class="sec f-sec col-lg-3 col-md-6 col-sm-8">
                <div class="subscribe-footer">
                    <span>Subscribe</span>
                    <ul>
                        <li>
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                            <input type="text" placeholder="Enter E-mail Adress">
                        </li>
                        <li>
                            <button>subscribe</button>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "../../style/css/scss/component/_footer.scss";
</style>
<script>
export default {
};
</script>
