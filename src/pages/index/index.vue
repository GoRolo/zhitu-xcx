<template>
  <div class="main">
    <div class="banner" v-if="mainInfo.banner"><img :src="mainInfo.banner[0].image"></div>
    <selectBar :isfixed="isFixed"></selectBar>
    <teacherItem :list="list"></teacherItem>
    <div class="tips"></div>
  </div>
</template>

<script>
import teacherItem from '@/components/teacher-item'
import selectBar from '@/components/select-bar'
import UTILS from "@/utils/api";

export default {
  data () {
    return {
      mainInfo: {},
      isFixed: false,
      list: [],//教师列表
      options: [],//筛选项
    }
  },
  onPageScroll: function(e){
    if (e.scrollTop > 125) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  },
  components: {
    teacherItem, selectBar
  },
  mounted () {
    this.getMainInfo();
    this.getTeacherList();
  },
  methods: {
    getMainInfo: async function(){
      let mainInfo = {};
      try {
        mainInfo = await UTILS.getMainInfo();
        this.mainInfo = mainInfo.data.data;
        this.list = mainInfo.data.data.teacher;
      } catch(e) {
        console.log(e);
      }
    },
    getTeacherList: async function(param){
      let listInfo = {};
      try {
        listInfo = await UTILS.getTeacherList();
        this.options = listInfo.data.data.condition;
        console.log(this.options);
      } catch(e) {
        console.log(e);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .banner {
    img {
      width: 100%;
      height: 130px;
    }
  }
  .tips {
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
  }
</style>
