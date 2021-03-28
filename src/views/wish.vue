<template>
    <div id="wishlist" class="wishlist-container container-fluid" v-bind:class="{ 'fix-wish': scrollPosition > 0 }" >
        <div class="wishlist container">
            <div class="wishlist-header">
                <span>
                    wish list
                </span>
            </div>
            <div class="wish-list">
                <div class="list-header d-sm-block d-none">
                    <ul>
                        <li class="col-md-5 col-sm-4 col-10">product</li>
                        <li class="col-sm-2 col-1 d-sm-inline-block d-none">price</li>
                        <li class="col-sm-2 col-2 d-sm-inline-block d-none">stock statu</li>
                        <li class="col-md-2 col-sm-3 d-sm-inline-block d-none">action</li>
                        <li class="col-sm-1 col-2" style="text-align: center">X</li>
                    </ul>
                </div>
                <div class="list">
                    <div class="product col-12" v-if="3 > 2">
                        <div class="item-info col-md-5 col-sm-4 col-12">
                            <div class="item-photo col-sm-4 col-4">
                                <img src="../assets/1.jpg" alt="">
                            </div>
                            <div class="item-name col-sm-8 col-8">
                                <h5>modern style dress</h5>
                                <span>woman's fashion</span>
                            </div>
                        </div>
                        <div class="item-price col-sm-2 col-1 d-sm-block d-none">
                            <span>$500</span>
                        </div>
                        <div class="stock-status col-sm-2 col-2 d-sm-block d-none">
                            <span>in stock</span>
                        </div>
                        <div class="add-to-cart col-md-2 col-sm-3 col-12">
                            <button>add to cart</button>
                        </div>
                        <div class="remove-item col-sm-1 col-2">
                            <span>x</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="delete-product-pop-up">
            <div class="messege-pop-up">
                <div class="messege-title">
                    <span> Are you sure ?</span>
                </div>
                <div class="messege-action">
                    <button>cancel</button>
                    <button>delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../style/css/scss/views/_wish.scss";
</style>
<script>
export default {
    name: "wishlist",
    
    el: "#wishlist",

    data() {
        return {
            scrollPosition: null,
        };
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        }
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    }
};
</script>
