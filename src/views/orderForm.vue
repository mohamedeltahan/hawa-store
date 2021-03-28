<template>
    <div id="order-form" :class="{ 'order-form-fix': scrollPosition > 0 }">
        <div class="order-form-container container-fluid">
            <div class="order-form container">
                <div class="order-form-header">
                    <div class="header">
                        <span>continue order</span>
                    </div>
                    <div class="order-form-sub-header">
                        <div>
                            <span>do you have vauchor copon ?</span>
                        </div>
                        <div>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Code Here .."
                            />
                            <button>send</button>
                        </div>
                    </div>
                </div>
                <div class="order-form-info-sec col-md-6 col-12">
                    <div class="order-info-header">
                        <span>order details</span>
                    </div>
                    <div class="form-info">
                        <form action="">
                            <label for="">full name</label><br />
                            <input type="text" name="" id="" /><br />
                            <label for="">phone number</label><br />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="+201*********"
                            /><br />
                            <label for="">state</label><br />
                            <select name="" id="">
                                <option value="">cairo</option>
                                <option value="">alex</option> </select
                            ><br />
                            <label for="">city / full address</label><br />
                            <input type="text" name="" id="" /><br />
                            <label for="">order notes</label><br />
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Order notes .."
                            ></textarea>
                        </form>
                    </div>
                </div>
                <div class="order-form-details-sec col-md-6 col-12">
                    <div class="details-view">
                        <div class="order-form-details-header">
                            <span>order details</span>
                        </div>
                        <div class="order-details">
                            <ul>
                                <li>product details</li>
                                <li>
                                    <div class="details">
                                        <ul class="col-9">
                                            <li>modern style dress</li>
                                            <li>color : red</li>
                                            <li>size : XXl</li>
                                        </ul>
                                        <div class="photo col-3">
                                            <img
                                                src="../assets/1.jpg"
                                                alt="product"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul>
                                        <li>price</li>
                                        <li>100$</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>shipping</li>
                                        <li>20$</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>total</li>
                                        <li>120$</li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="order-notes">
                                <span>notes:</span>
                                <h5>cash on delievary</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur minus qui veritatis alias provident ad perferendis, maxime similique eum delectus nihil architecto id, magni porro sed aspernatur, laborum aliquam nulla.</p>
                                <button>check out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../style/css/scss/views/_orderForm.scss";
</style>
<script>
export default {
    el: "#order-form",
    data() {
        return {
            scrollPosition: null
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
