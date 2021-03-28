<template>
    <div
        id="products-container"
        class="products-container container-fluid"
        v-bind:class="{ 'fix-products': scrollPosition > 0 }"
    >
        <div class="container">
            <div class="products-filter-container col-3">
                <div class="products-filter">
                    <div class="product-colors col-12">
                        <div class="product-colors-head head">
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
                                        <font-awesome-icon
                                            :icon="['fas', 'check']"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="sort-by-category col-12">
                        <div class="sort-by-category-head head">
                            sort by category
                        </div>
                        <div class="sort-category">
                            <ul>
                                <li>
                                    woman's collection
                                    <input type="checkbox" name="" id="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products-items-container col-lg-9 col-12">
                <div class="filter-container">
                    <div class="slide-filter">
                        <span>Filter </span>
                        <font-awesome-icon :icon="['fas', 'ellipsis-v']" @click="slideFilter" />
                    </div>
                    <ul :style="{ '--height': filterListHeight }" @click="slideFilter">
                        <li>top rate</li>
                        <li>top review</li>
                        <li>lowest price</li>
                        <li>high quality</li>
                        <li>most sell</li>
                    </ul>
                </div>
                <div class="items">
                    <Item
                        v-for="item in items"
                        v-bind:key="item.id"
                        :id="item.id"
                        :views="item.no_viewed"
                        :productname="item.name"
                        :category="item.category"
                        :sale="item.discount"
                        :oldprice="item.oldprice"
                        :currentprice="item.selling_price"
                        :currentrating="item.currentrating"
                        :rate="item.rate"
                        :ratingselected="item.ratingselected"
                        :selectedrating="item.selectedrating"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../style/css/scss/views/_products.scss";
</style>
<script>
import Item from "../components/global/item.vue";

export default {
    name: "products",
    components: {
        Item
    },

    el: "#products-container",

    data() {
        return {
            scrollPosition: null,
            items: this.$store.state.items,
            filterListHeight: "0%",
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
        slideFilter: function() {
            if (this.filterListHeight == "fit-content") {
                this.filterListHeight = "0%";
            } else {
                this.filterListHeight = "fit-content";
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    }
};
</script>
