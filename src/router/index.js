import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Product from "../views/Product.vue";
import Wish from "../views/wish.vue";
import Contact from "../views/contact.vue";
import OrderForm from "../views/orderForm.vue";
import MyAccount from "../views/myaccount.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/products",
        name: "products",
        component: Products
    },
    {
        path: "/product",
        name: "product",
        component: Product
    },
    {
        path: "/wishlist",
        name: "wishlist",
        component : Wish
    },
    {
        path:"/contact-us",
        name:"contact",
        component : Contact
    },
    {
        path:"/order-form",
        name: "orderForm",
        component: OrderForm
    },
    {
        path:"/account",
        name: "myaccount",
        component: MyAccount
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
