<template>
  <div class="top-bar">
    <div class="bar" :class="isfixed ? 'p-fixed' : ''">
        <div class="bar-container">
            <div class="item" :class="key == 1 ? 'selected' : ''" data-key="1" @click="clickOption">年级</div>
            <div class="item" :class="key == 2 ? 'selected' : ''" data-key="2" @click="clickOption">学科</div>
            <div class="item" :class="key == 3 ? 'selected' : ''" data-key="3" @click="clickOption">授课方式</div>
        </div>
        <div v-if="isfixed && showOptions" class="options-box">
          <template v-if="options" v-for="(item, index) in options" wx:key="index">
            <span class="select-item" @click="searchItem(item)" :class="item.selected ? 'selected' : ''">{{item.label}}</span>
          </template>
          <!-- <div class="submit" @click="clearSearch">清空搜索</div> -->
        </div>
        <div v-if="isfixed" class="timp-bar"></div>
    </div>
    <div class="tips" @click="hideBarTips" v-if="isfixed && showOptions"></div>
  </div>
</template>
<script>
    import UTILS from "@/utils/api";
    export default {
      data () {
        return {
          showOptions: false,
          isfixed: false,
          isScrollFixed: false,
          options: [],
          condition: {},
          key: null,
          isSearch: false,
          limit: 20,
          subject: null,
          grade: null,
          type: null,
          offset: 0
        }
      },
      onPageScroll: function(e){
        if (e.scrollTop > 125) {
          this.fixedBar();
          this.isScrollFixed = true;
        } else {
          this.noFixedBar();
          this.isScrollFixed = false;
        }
      },
      mounted () {
        this.getTeacherList();
      },
      methods: {
        fixedBar: function(){
          this.isfixed = true;
        },
        noFixedBar: function(){
          if (this.showOptions) {
            this.isfixed = true;
          }else {
            this.isfixed = false;
          }
        },
        showBarTips: function(e){
          this.isfixed = true;
          this.showOptions = true;
        },
        hideBarTips: function(){
          if (this.isScrollFixed) {
            this.isfixed = true;
            this.showOptions = false;
          }else {
            this.isfixed = false;
            this.showOptions = false;
          }
          if (!this.isSearch){
            this.handleCondition(this.condition.grade)
            this.handleCondition(this.condition.subject)
            this.handleCondition(this.condition.type)
            this.key = null;
          }
        },
        getTeacherList: async function(param){
          let res = {};
          try {
            res = await UTILS.getTeacherList();
            console.log(res);
            this.list = res.data.data.teacher;
            this.handleCondition(res.data.data.condition.grade)
            this.handleCondition(res.data.data.condition.subject)
            this.handleCondition(res.data.data.condition.type)
            this.condition = res.data.data.condition
          } catch(e) {
            console.log(e);
          }
        },
        clickOption: function(e){
          this.showBarTips();
          this.key = e.target.dataset.key;
          if(e.target.dataset.key == 1) {
            this.options = this.condition.grade;
          }
          if(e.target.dataset.key == 2) {
            this.options = this.condition.subject;
          }
          if(e.target.dataset.key == 3) {
            this.options = this.condition.type;
          }
        },
        handleCondition: function(arr){
          arr.map((item) => {item.selected=false});
          return arr;
        },
        resetOptions: function(arr){
          arr.map((a) => {a.selected=false});
        },
        
        searchItem: function(item){
          this.resetOptions(this.options)
          item.selected = true;
          this.isSearch = true;
          this.hideBarTips();
          if(this.key == 1){
            this.grade = item.id
          }
          if(this.key == 2){
            this.subject = item.id
          }
          if(this.key == 3){
            this.type == item.id
          }
          let param = {
            limit: 20,
            offset: 0,
            subject: this.subject,
            grade: this.grade,
            type: this.type
          }
          this.$emit('getTeacherList',param);
        }
      }
    }
</script>
<style lang="scss" scoped>
    @import '../utils/mixin';
    .bar {
      position: relative;
      .options-box {
        font-size: 0;
        width: 96%;
        padding: Rem(6) 2%;
        background: #fff;
        border-top: 1px solid #dde2f0;
        .select-item {
          display: inline-block;
          width: 21%;
          text-align: center;
          margin: Rem(4) 2%;
          height: Rem(40);
          line-height: Rem(40);
          background: #f5f5f5;
          color: #333;
          font-size: Rem(14);
          border-radius: Rem(4);
        }
        .selected {
          color: #52c644;
        }
      }
    }
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
        .selected {
          color: #52c644;
        }
    }
    .p-fixed {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 999;
    }
    .tips {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      z-index: 666;
    }
    .submit {
      border-radius: Rem(4);
      margin: Rem(6) 2%;
      background: #52c644;
      padding: Rem(10);
      text-align: center;
      color: #fff;
      font-size: Rem(14);
    }
</style>