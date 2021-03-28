<template>
    <div id="app" :class="{ open: active }">
        <div id="nav" v-bind:class="{ 'fix-nav': scrollPosition > 0 }">
            <div>
                <div class="container-fluid">
                    <div class="container">
                        <div class="nav-top d-sm-block d-none">
                            <div class="nav-top-left col-6">
                                <span>for information | call +123456789</span>
                            </div>
                            <div class="nav-top-right col-6">
                                <ul>
                                    <li v-if="userExists == true" @click=" optionList = !optionList ">
                                        {{username}} <font-awesome-icon :icon="['fas' , 'sort-down']" />
                                        <ul :class="{'option-list' : optionList}">
                                            <li @click=" optionList = true "> <font-awesome-icon :icon="['fas' , 'user']" /> my account</li>
                                            <li @click=" optionList = true "><font-awesome-icon :icon="['fas' , 'dolly']" />my orders</li>
                                            <li @click="logout()"> <font-awesome-icon :icon="['fas' , 'sign-out-alt']" /> logout</li>
                                        </ul>
                                    </li>
                                    <li
                                        @click="login = !login"
                                        v-if="userExists == false"
                                    >
                                        login
                                    </li>
                                    <li
                                        @click="register = !register"
                                        v-if="userExists == false"
                                    >
                                        register
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="login-container"
                            v-bind:class="{ 'open-login': login }"
                        >
                            <div
                                class="login"
                                v-bind:class="{ 'login-slide-down': login }"
                            >
                                <div class="login-left">
                                    <img
                                        src="./assets/login.jpg"
                                        alt=""
                                        srcset=""
                                    />
                                </div>
                                <div
                                    class="submit-alert error"
                                    v-if="invalidLogin"
                                >
                                    <span>invalid mail or password</span>
                                </div>
                                <form @submit.prevent="login">
                                    <font-awesome-icon
                                        :icon="['fas', 'times']"
                                        class="exit"
                                        @click="login = !login"
                                    />
                                    <img
                                        src="./assets/hawa.jpg"
                                        alt=""
                                        srcset=""
                                    />
                                    <input
                                        type="mail"
                                        v-model="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <font-awesome-icon
                                        :icon="['fas', 'envelope']"
                                        class="mail"
                                    />
                                    <input
                                        type="password"
                                        v-model="u_password"
                                        placeholder="Enter Your Password"
                                    />
                                    <font-awesome-icon
                                        :icon="['fas', 'key']"
                                        class="pass"
                                    />
                                    <button @click.prevent="log()">
                                        login
                                    </button>
                                    <span>forget password ?</span>
                                </form>
                            </div>
                        </div>
                        <div
                            class="register-container"
                            v-bind:class="{ 'open-register': register }"
                        >
                            <div
                                class="register"
                                v-bind:class="{
                                    'register-slide-down': register
                                }"
                            >
                                <div class="register-left">
                                    <img
                                        src="./assets/login.jpg"
                                        alt=""
                                        srcset=""
                                    />
                                </div>
                                <div
                                    class="submit-alert"
                                    v-if="!invalidRegister"
                                >
                                    <span
                                        >your account created successfully</span
                                    >
                                </div>
                                <form>
                                    <font-awesome-icon
                                        :icon="['fas', 'times']"
                                        class="exit"
                                        @click="register = !register"
                                    />
                                    <img
                                        src="./assets/hawa.jpg"
                                        alt=""
                                        srcset=""
                                    />
                                    <input
                                        type="mail"
                                        v-model="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <font-awesome-icon
                                        :icon="['fas', 'envelope']"
                                        class="mail"
                                    />
                                    <input
                                        type="text"
                                        v-model="fullname"
                                        placeholder="Full name"
                                    />
                                    <input
                                        type="text"
                                        v-model="username"
                                        placeholder="User name"
                                    />
                                    <!--<input type="number" v-model="phone_number">-->
                                    <input
                                        type="password"
                                        v-model="u_password"
                                        placeholder="Enter Your Password"
                                    />
                                    <font-awesome-icon
                                        :icon="['fas', 'key']"
                                        class="pass"
                                    />
                                    <input
                                        type="password"
                                        v-model="confirm_password"
                                        placeholder="Confirm Your Password"
                                    />
                                    <font-awesome-icon
                                        :icon="['fas', 'key']"
                                        class="confirm-pass"
                                    />
                                    <button @click.prevent="reg()">
                                        register
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="nav-middel">
                            <div class="nav-middel-logo col-md-4 col-6">
                                <div class="nav-menu-btn">
                                    <font-awesome-icon
                                        @click="active = !active"
                                        :icon="['fas', 'bars']"
                                    />
                                </div>
                                <img src="./assets/hawa.jpg" alt="" srcset="" />
                            </div>
                            <div
                                class="nav-middel-search col-md-4 d-md-block d-none"
                            >
                                <input
                                    type="search"
                                    placeholder="Search product"
                                />
                                <button>
                                    <font-awesome-icon
                                        :icon="['fas', 'search']"
                                    />
                                </button>
                            </div>
                            <div class="nav-middel-cart col-md-4 col-6">
                                <div class="options">
                                    <ul>
                                        <li class="option-icon">
                                            <router-link to="/wishlist">
                                                <font-awesome-icon
                                                    :icon="['fas', 'heart']"
                                                />
                                                <span>{{wishListNo}}</span>
                                            </router-link>
                                        </li>
                                        <li class="option-icon">
                                            <font-awesome-icon
                                                :icon="[
                                                    'fas',
                                                    'shopping-basket'
                                                ]"
                                                @click="cartActive = !cartActive"
                                            />
                                            <span>{{cartItemsNo}}</span>
                                        </li>
                                        <li class="total-price-nav">
                                            total <span>0.00$</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="cart-container-fluid" :class="{'openCart' : cartActive}">
                            <div class="cart-container" :class="{'slide-view' : cartActive}">
                                <div class="cart-header">
                                    <h1>shopping cart ({{cartItemsNo}})</h1>
                                    <font-awesome-icon @click="cartActive = !cartActive" :icon="['fas' , 'times']" />
                                </div>
                                <div class="cart">
                                    <span v-if="cartItemsNo == 0">your cart is currently empty</span>
                                    <div class="cart-item-container">
                                        <div class="cart-item">
                                            <div class="item-img-container">
                                                <div class="item-img">
                                                    <img src="./assets/1.jpg" alt="" srcset="">
                                                </div>
                                            </div>
                                            <div class="item-details-container">
                                                <div class="item-details">
                                                    <ul>
                                                        <li>
                                                            <span>modern dress fashion</span>
                                                            <span class="category">
                                                                category name
                                                            </span>
                                                        </li>
                                                        <li><font-awesome-icon :icon="['fas' , 'times']" /></li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <button class="minus" @click="itemQuantityDc($event)">-</button>
                                                            <input class="quan" type="number" name="quantity" value="1">
                                                            <button class="pluss" @click="itemQuantityIn($event)">+</button>
                                                        </li>
                                                        <li>
                                                            $410
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cart-footer-container">
                                            <div class="cart-footer">
                                                <ul>
                                                    <li>subtotal</li>
                                                    <li>$410</li>
                                                </ul>
                                                <button>checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-menu-container container-fluid">
                <div class="nav-menu container">
                    <div class="row">
                        <ul class="menu-list d-sm-flex d-none">
                            <li>
                                <router-link to="/">home</router-link>
                            </li>
                            <li>
                                <router-link to="/products"
                                    >Products</router-link
                                >
                            </li>
                            <li>categories</li>
                            <li>
                                <router-link to="/contact-us"
                                    >contact-us</router-link
                                >
                            </li>
                            <li>blog</li>
                        </ul>
                        <div class="nav-middel-search col-12 d-sm-none d-block">
                            <input type="search" placeholder="Search product" />
                            <button>
                                <font-awesome-icon :icon="['fas', 'search']" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="nav-sub-menu-container"
                :class="{ 'nav-menu-open': active }"
            >
                <div class="nav-sub-menu">
                    <div class="nav-menu-header">
                        <div class="nav-menu-btn">
                            <font-awesome-icon
                                @click="active = !active"
                                :icon="['fas', 'bars']"
                            />
                        </div>
                        <div class="nav-menu-title">
                            <span> menu List</span>
                        </div>
                    </div>
                    <div class="nav-menu-list">
                        <ul>
                            <li @click="active = !active">
                                <router-link to="/" >
                                    <font-awesome-icon
                                        :icon="['fas', 'home']"
                                    />
                                    home
                                </router-link>
                            </li>
                            <li @click="active = !active">
                                <router-link to="/products">
                                    <font-awesome-icon
                                        :icon="['fas', 'tshirt']"
                                    />
                                    Products
                                </router-link>
                            </li>
                            <li @click="active = !active">
                                <font-awesome-icon
                                    :icon="['fas', 'calendar-alt']"
                                />
                                categories
                            </li>
                            <li @click="active = !active">
                                <router-link to="/contact-us">
                                    <font-awesome-icon
                                        :icon="['fas', 'address-card']"
                                    />
                                    contact us
                                </router-link>
                            </li>
                            <li @click="active = !active">
                                <font-awesome-icon :icon="['fas', 'blog']" />
                                blog
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <router-view />
        <Footer />
    </div>
</template>

<style lang="scss">
@import "./style/css/scss/component/_nav.scss";
</style>

<script>
import axios from "axios";
import Footer from "./components/global/footer";

export default {
    components: {
        Footer
    },
    data() {
        return {
            userExists: false,
            scrollPosition: null,
            active: false,
            login: false,
            register: false,
            optionList : false,
            fullname: "",
            email: "",
            phone: "",
            username: "",
            account_type: "Normal",
            phone_number: "",
            u_password: "",
            confirm_password: "",
            error: false,
            invalidLogin: false,
            invalidRegister: true,
            user_token: "",
            cartItemsNo : 100,
            wishListNo : 10,
            cartActive: false,
        };
    },
    methods: {
        /*register_method(){
            if(this.valid()){
                this.$store.dispatch('REGISTER', {
                    full_name: this.fullname,
                    account_name: this.username,
                    account_type: this.account_type,
                    email: this.email,  
                    password: this.u_password,
                    password_confirmation : this.confirm_password,
                })
                .then((user) => {
                    this.$router.push("/");
                    alert(user);
                })
                .catch(err => alert(err.message));
            }
        },*/
        reg() {
            if (this.valid()) {
                axios
                    .post(
                        "http://funtravelegypt.com/ecommerce/public_html/api/RegisterApi",
                        {
                            full_name: this.fullname,
                            account_name: this.username,
                            account_type: this.account_type,
                            //phone : this.phone_number,
                            email: this.email,
                            password: this.u_password,
                            password_confirmation: this.confirm_password
                        }
                    )
                    .then((res) => {
                        if(res.data.error){
                            alert(res.data.error)
                        }else{
                        this.fullname = "";
                        this.username = "";
                        this.u_password = "";
                        this.confirm_password = "";
                        this.email = "";
                        this.invalidRegister = false;
                        }
                    });
            }
        },
        log() {
            axios
                .post(
                    "http://funtravelegypt.com/ecommerce/public_html/api/login",
                    { email: this.email, password: this.u_password }
                )
                .then(res => {
                    if (res.data.error) {
                        this.invalidLogin = true;
                    } else {
                        this.invalidLogin = false;
                        this.invalidRegister = true;
                        this.u_password = "";
                        this.email = "";
                        this.userExists = true;
                        this.login = false;
                        this.user_token = res.data.token;
                        localStorage.setItem('user_token' , this.user_token);  
                        axios.get(('http://funtravelegypt.com/ecommerce/public_html/api/user') , {headers: {'Authorization': `Bearer ` + this.user_token}})
                        .then((res) => {    
                            this.username = res.data.user.full_name;
                        });
                        axios.get(('http://funtravelegypt.com/ecommerce/public_html/api/wishlist') , {headers: {'Authorization': `Bearer ` + this.user_token}})
                        .then((res) => {
                            this.wishListNo = res.data.items.length;
                        });
                        axios.get(('http://funtravelegypt.com/ecommerce/public_html/api/carts') , {headers: {'Authorization': `Bearer ` + this.user_token}})
                        .then((res) => {
                            this.cartItemsNo = res.data.items.length;
                        }); 
                    }
                });
        },
        logout(){
            localStorage.setItem('user_token' , "null");
            axios.get(('http://funtravelegypt.com/ecommerce/public_html/api/logout') , {headers: {'Authorization': `Bearer ` + this.user_token}})
            .then(() => {
                this.userExists = false;
                this.user_token = localStorage.getItem('user_token');
            });
        },
        valid() {
            return this.u_password === this.confirm_password;
        },
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
        itemQuantityIn(e){
            var inp = e.target.parentElement.querySelector(".quan");
            inp.value = parseInt(inp.value, 10) + 1
            
        },
        itemQuantityDc(e){
            var inp = e.target.parentElement.querySelector(".quan");
            if(parseInt(inp.value, 10) > 1){
                inp.value = parseInt(inp.value, 10) - 1
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
        this.user_token = localStorage.getItem('user_token');
        if (this.user_token != "null"){
            this.userExists = true;
            this.invalidLogin = false;
            axios.get(('http://funtravelegypt.com/ecommerce/public_html/api/user') , {headers: {'Authorization': `Bearer ` + this.user_token}})
            .then((res) => {    
                this.username = res.data.user.full_name;
            });
            axios.get(('http://funtravelegypt.com/ecommerce/public_html/api/wishlist') , {headers: {'Authorization': `Bearer ` + this.user_token}})
            .then((res) => {
                this.wishListNo = res.data.items.length;
            });
            axios.get(('http://funtravelegypt.com/ecommerce/public_html/api/carts') , {headers: {'Authorization': `Bearer ` + this.user_token}})
            .then((res) => {
                this.cartItemsNo = res.data.items.length;
            });

        }else{
            this.userExists = false
        }
    }
};
</script>
    