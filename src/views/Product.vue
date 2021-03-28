<template>
    <div
        id="product-review"
        class="product-container container-fluid"
        v-bind:class="{ 'fix-product': scrollPosition > 0 }"
    >
        <div class="product-container container">
            <div class="product-details col-lg-9 col-12">
                <div class="product-photo col-lg-5 col-md-6 col-12">
                    <img src="../assets/1.jpg" alt="" srcset="" />
                </div>
                <div class="product-info col-lg-7 col-md-6">
                    <span class="product-category">woman's fation</span>
                    <h3>style modern dress</h3>
                    <ul>
                        <li class="item-price">
                            <span class="old-price"> 195$ </span>
                            100$
                        </li>
                        <li class="product-rating">
                            <star-rating
                                :increment="0.5"
                                active-color="#8d0069"
                                star-size="20"
                                :rating="4"
                                v-bind:read-only="true"
                            ></star-rating>
                        </li>
                        <li class="product-details-p">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem quibusdam, recusandae
                                quis aliquid architecto illum, blanditiis nemo
                                officia velit quidem hic cumque molestiae
                                adipisci accusamus molestias earum, saepe
                                obcaecati natus!
                            </p>
                        </li>

                        <li class="product-availabilty">
                            <span>
                                availability:
                            </span>
                            in stock
                        </li>
                        <li class="product-code">
                            <span>
                                product code :
                            </span>
                            1
                        </li>
                        <li class="product-code">
                            <span>
                                quantity :
                            </span>
                            {{ productQuantity }}
                        </li>
                        <li class="product-size">
                            <span>
                                size:
                            </span>
                            <select name="sizes" id="size-select">
                                <option value="">s</option>
                                <option value="">md</option>
                                <option value="">l</option>
                                <option value="">xl</option>
                                <option value="">xxl</option>
                            </select>
                        </li>
                        <li class="product-quantity">
                            <span>quantity:</span>
                            <button class="minus" @click="decrementQuantity">
                                -
                            </button>
                            <input
                                type="number"
                                name="quantity"
                                :value="selectedQuantity"
                            />
                            <button class="plus" @click="incrementQuantity">
                                +
                            </button>
                        </li>
                        <li class="add-to-cart">
                            <button>
                                <font-awesome-icon
                                    :icon="['fas', 'shopping-basket']"
                                />
                                add to cart
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="product-colors col-lg-3 col-12">
                <div class="product-colors-head">
                    choose color
                </div>
                <div class="product-colors-sec">
                    <ul>
                        <li
                            v-for="color in colors"
                            :key="color.num"
                            :class="color.state"
                        >
                            <span
                                :data-color="color.color"
                                @click="selectcolor($event, color.num)"
                                :style="{ '--pro-color': color.color }"
                            >
                            </span>
                            <div class="check-icon">
                                <font-awesome-icon :icon="['fas', 'check']" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="related-products-container container-fluid">
            <div class="related-products container">
                <div class="related-product-header">
                    <div class="header">
                        <div class="header-title">
                            
                        
                        <span>related products</span>
                        </div>
                    </div>
                    <div class="related-products-sec items">
                        <Item
                            v-for="item in items"
                            v-bind:key="item.id"
                            :views="item.views"
                            :productname="item.productname"
                            :category="item.category"
                            :sale="item.sale"
                            :oldprice="item.oldprice"
                            :currentprice="item.currentprice"
                            :currentrating="item.currentrating"
                            :rate="item.rate"
                            :ratingselected="item.ratingselected"
                            :selectedrating="item.selectedrating"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../style/css/scss/views/_product.scss";

</style>

<script>
import StarRating from "vue-star-rating";
import ItemJson from "../json/item-json.json";
import Item from "../components/global/item.vue";

export default {
    name: "product",
    components: {
        StarRating,
        Item
    },
    el: "#product-review",

    data() {
        return {
            scrollPosition: null,
            productQuantity: "5",
            selectedQuantity: "1",
            items:ItemJson,
            colors: [
                {
                    num: 0,
                    color: "red",
                    state: "not-active"
                },
                {
                    num: 1,
                    color: "blue",
                    state: "not-active"
                },
                {
                    num: 2,
                    color: "green",
                    state: "not-active"
                },
                {
                    num: 3,
                    color: "yellow",
                    state: "not-active"
                },
                {
                    num: 4,
                    color: "black",
                    state: "not-active"
                },
                {
                    num: 5,
                    color: "yellowgreen",
                    state: "not-active"
                }
            ],
            selectedColor: ""
        };
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
        selectcolor: function(event, index) {
            for (var i = 0; i < this.colors.length; i++) {
                if (i == index) {
                    this.colors[i].state = "active";
                    this.selectedColor = event.target.getAttribute(
                        "data-color"
                    );
                } else {
                    this.colors[i].state = "not-active";
                }
            }
        },
        decrementQuantity: function() {
            if (this.selectedQuantity > 1) {
                this.selectedQuantity--;
            }
        },
        incrementQuantity: function() {
            if (this.selectedQuantity < this.productQuantity) {
                this.selectedQuantity++;
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    }
};
</script>
