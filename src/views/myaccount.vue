<template>
    <div id="user-page">
        <div class="user-account-container container-fluid" v-bind:class="{ 'fix-account': scrollPosition > 0 }">
            <div class="user-account container">
                <div class="user-account-header">
                </div>
                <div class="user-details-nav">
                    <div class="user-img col-md-6 col-12">
                        <div class="img">
                            <img src="../assets/1.jpg" alt="">
                        </div>
                        <div class="user-name">
                            <div class="inf">
                            <span>user name</span>
                            <span>email-address</span>
                            </div>
                        </div>
                    </div>
                    <div class="user-cart col-6 d-md-block d-none">
                        <ul>
                            <li><font-awesome-icon :icon="['fas' , 'heart']" /></li>
                            <li><font-awesome-icon :icon="['fas' , 'shopping-basket']" /></li>
                        </ul>
                        <span>balance:  00.0$</span>
                    </div>
                </div>
                <div class="user-details">
                    <ul class="details-container">
                        <li class="detail">
                            <ul class="details">
                                <li>username</li>
                                <li>mohamed</li>
                                <li>
                                    <font-awesome-icon :icon="['fas' , 'edit']" />
                                </li>
                            </ul>
                        </li>
                        <li class="detail">
                            <ul class="details">
                                <li>username</li>
                                <li>mohamed</li>
                                <li>
                                    <font-awesome-icon :icon="['fas' , 'edit']" />
                                </li>
                            </ul>
                        </li>
                        <li class="detail">
                            <ul class="details">
                                <li>username</li>
                                <li>mohamed</li>
                                <li>
                                    <font-awesome-icon :icon="['fas' , 'edit']" />
                                </li>
                            </ul>
                        </li>
                        <li class="detail">
                            <ul class="details">
                                <li>username</li>
                                <li>mohamed</li>
                                <li>
                                    <font-awesome-icon :icon="['fas' , 'edit']" />
                                </li>
                            </ul>
                        </li>
                        <li class="detail">
                            <ul class="details">
                                <li>username</li>
                                <li>mohamed</li>
                                <li>
                                    <font-awesome-icon :icon="['fas' , 'edit']" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../style/css/scss/views/account.scss";
</style>

<script>
export default {
    data(){
        return{
            scrollPosition: null,
        }
    },
    methods:{
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    }
}
</script>