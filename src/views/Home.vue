<template>
    <div
        class="home"
        v-bind:class="{ 'fix-home': scrollPosition > 0 }"
    >
        <div class="header-slider-container container-fluid">
            <carousel
                :perPage="1"
                :navigationEnabled="true"
                :paginationEnabled="false"
            >
                <slide>
                    <img src="../assets/slider.png" alt="" srcset="" />
                </slide>
                <slide> </slide>
            </carousel>
        </div>

        <!-- start categories sevtion-->
        <!-- start categories sevtion-->
        <div class="categories-section-container container-fluid d-flex">
            <div class="categories-section container">
                <div class="categories-section-header">
                    <div class="categories-header-label">
                        <span>categories</span>
                    </div>
                </div>
                <div class="categories-content-container">
                    <div class="cat-item col-md-8 col-12 cat-boss" :id = categories[0].id>
                        <div class="cat">
                            <div class="overlay">
                                <span>{{ categories[0].title }}</span>
                            </div>
                            <img :src="'http://funtravelegypt.com/ecommerce/public_html/categories-photos/' + categories[0].photo_link" alt="" srcset="" />
                        </div>
                    </div>
                    <div class="cat-item col-md-4 col-12 cat-sub-boss" :id = categories[1].id>
                        <div class="sub-cat sub-cat-up col-12">
                            <div class="cat">
                                <div class="overlay"><span>{{categories[1].title}}</span></div>
                                <img :src="'http://funtravelegypt.com/ecommerce/public_html/categories-photos/' + categories[1].photo_link" alt="" srcset="" />
                            </div>
                        </div>
                        <div class="sub-cat sub-cat-down col-12" :id = categories[2].id>
                            <div class="cat">
                                <div class="overlay"><span>{{categories[2].title}}</span></div>
                                <img :src="'http://funtravelegypt.com/ecommerce/public_html/categories-photos/' + categories[2].photo_link" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="categories-content-container secound-row">
                    <div class="cat-item " :id = categories[3].id>
                        <div class="sub-cat">
                            <div class="cat">
                                <div class="overlay"><span>{{categories[3].title}}</span></div>
                                <img :src="'http://funtravelegypt.com/ecommerce/public_html/categories-photos/' + categories[3].photo_link" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div class="cat-item" :id = categories[4].id>
                        <div class="sub-cat">
                            <div class="cat">
                                <div class="overlay"><span>{{categories[4].title}}</span></div>
                                <img :src="'http://funtravelegypt.com/ecommerce/public_html/categories-photos/' + categories[4].photo_link" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div class="cat-item" :id= categories[5].id>
                        <div class="sub-cat">
                            <div class="cat">
                                <div class="overlay"><span>{{categories[5].title}}</span></div>
                                <img :src="'http://funtravelegypt.com/ecommerce/public_html/categories-photos/' + categories[5].photo_link" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div class="secound-row-category-show-more">
                        <router-link to="/products"
                            >See More Categories
                            <font-awesome-icon :icon="['fas', 'arrow-right']"
                        /></router-link>
                    </div>
                </div>
                <router-view />
            </div>
        </div>
        <!-- end categories sevtion-->
        <!-- end categories sevtion-->

        <!-- start feature items sevtion-->
        <!-- start feature items sevtion-->
        <div class="feature-items-container container-fluid">
            <div class="feature-items container">
                <div class="categories-section-header">
                    <div class="categories-header-label">
                        <span>Recommanded Product</span>
                    </div>
                </div>
                <div class="items-container">
                    <div class="items">
                        <Item
                            v-for="item in 4"
                            v-bind:key="featuredItem[item].id"
                            :views="featuredItem[item].no_viewed"
                            :productname="featuredItem[item].name"
                            :category="featuredItem[item].category"
                            :sale="item.sale"
                            :oldprice="item.oldprice"
                            :currentprice="featuredItem[item].selling_price"
                            :currentrating="item.currentrating"
                            :rate="item.rate"
                            :ratingselected="item.ratingselected"
                            :selectedrating="item.selectedrating"
                            :id="featuredItem[item].id"
                            :quantity="featuredItem[item].quantity"
                            :size="featuredItem[item].size"
                            :color="featuredItem[item].color"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Item from "../components/global/item.vue";

export default {
    components: {
        Carousel,
        Slide,
        Item
    },
    data() {
        return {
            scrollPosition: null,
            featuredItem : this.$store.state.items
        };
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        }
    },
    computed: {
        categories(){
            return this.$store.state.categories
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
        this.$store.dispatch("getCategories");
        this.$store.dispatch("getRecommandedItems");
    }
};
</script>

<style lang="scss">
@import "../style/css/scss/pages/home.scss";
</style>
