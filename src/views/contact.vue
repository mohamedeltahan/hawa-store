<template>
    <div id="contact" class="contact-us-container container-fluid" :class="{ 'contact-fix' : scrollPosition > 0 }">
        <div class="contact-us container">
            <div class="logo left col-md-6 d-md-inline-block d-none">
                <img src="../assets/hawa.jpg" alt="" srcset="">
            </div>
            <div class="contact-form right col-md-6 col-12">
                <form>
                    <span>contact us</span><br>
                    <input type="text" name="" id="" placeholder="your name" class="input-name">
                    <input type="text" name="" id="" placeholder="mail address">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Text massage"></textarea>
                    <button>send massege</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../style/css/scss/views/_contact-us.scss";
</style>

<script>
export default {
        el: "#contact",
    data (){
        return {
            scrollPosition: null
        }
        
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        }
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    }
}
</script>