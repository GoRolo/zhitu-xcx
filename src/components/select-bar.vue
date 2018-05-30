<template>
    <div class="bar">
        <div class="bar-container" :class="isfixed ? 'p-fixed' : ''">
            <div class="item">年级</div>
            <div class="item">学科</div>
            <div class="item">授课方式</div>
        </div>
        <div v-if="isfixed" class="timp-bar"></div>
    </div>
</template>
<script>
    export default {
        props: ["isfixed"],
        data () {
            return {}
        },
        mounted () {},
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
    .timp-bar {
       height: 40px; 
    }
    .bar-container {
        position: relative;
        display: flex;
        background: #fff;
        padding: 8px 0;
        border-bottom: 1px solid #f4f4f4;
        transform: scale(1);
        .item {
            position: relative;
            flex: 1;
            text-align: center;
            color: #040000;
            font-size: 15px;
        }
        .item::after {
            position:absolute;
            right: 20px;
            top: 10px;
            border-left:4px solid transparent;
            border-right:4px solid transparent;
            border-top:4px solid #040000;
            content:"";
            display:block;
            width:0;
            height:0
        }
        .item:nth-of-type(2) {
            border-right: 1px solid #f4f4f4;
            border-left: 1px solid #f4f4f4;
        }
    }
    .p-fixed {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 999;
    }
</style>