<template>
    <div class="item">
        <div class="item-pic-container">
            <div class="item-pic">
                <img :src="'http://funtravelegypt.com/ecommerce/public_html/items-photos/' +  img" alt="" srcset="" />
                <span class="feature" v-if="sale > 0">featured</span>
            </div>
        </div>
        <div class="item-info-container">
            <div class="item-info">
                <div class="info">
                    <ul>
                        <li class="item-category">category: {{ category }}</li>
                        <li class="item-name">{{ productname }}</li>
                        <li class="item-rate">
                            <star-rating
                                :increment="0.5"
                                active-color="#8d0069"
                                star-size="20"
                                :rating="rate"
                            ></star-rating>
                            {{ views + " Review" }}
                        </li>
                        <li class="item-price">
                            price:
                            <span class="old-price" v-if="oldprice">{{ oldprice + " LE" }}</span>
                            {{ currentprice + " LE" }}
                        </li>
                    </ul>
                </div>
                <div class="checkout-container">
                    <div class="checkout-btn">
                        <router-link to="/product">
                        <button class="place-order-btn">
                            
                            Order product
                            
                        </button>
                        </router-link>
                    </div>
                    <div class="checkout-action">
                        <ul>
                            <li>
                                <font-awesome-icon :icon="['fas', 'heart']" />
                            </li>
                            <li>
                                <font-awesome-icon
                                    :icon="['fas', 'shopping-basket']"
                                    @click="addItemToCart()"    
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../style/css/scss/component/_item.scss";
</style>
<script>
import axios from "axios";
import StarRating from "vue-star-rating";
export default {
    props: [
        "views",
        "productname",
        "category",
        "sale",
        "oldprice",
        "currentprice",
        "currentrating",
        "rate",
        "ratingselected",
        "selectedrating",
        "color",
        "size",
        "id",
        "quantity",
        "user_tokent",
        "img"
    ],
    name: "item",

    components: {
        StarRating
    },
    el: "#item",
    data: () => {
        return {
            itemQuantity:[this.props.quantity],
            itemId:[this.props.id],
            itemColor:[this.props.color[1]],
            itemSize:[this.props.size[1]],
            user_token: ""
        };
    },
    methods: {
        addItemToCart(){
            this.user_token = localStorage.getItem("user_token");
            console.log(this.user_token)
            axios
            .post(
                'http://funtravelegypt.com/ecommerce/public_html/api/carts', 
                {
                headers: {'Authorization': 'Bearer ' + this.user_token },
                }
            )
            .then( () => {
                console.log(this.user_toke)
            });
        }
    },
};
</script>
