<template>
  <div class="main">
    <div class="banner" v-if="mainInfo.banner"><img :src="mainInfo.banner[0].image"></div>
    <selectBar @getTeacherList="getTeacherList"></selectBar>
    <teacherItem :list="list"></teacherItem>
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
      list: [],//教师列表
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
      } catch(e) {
        console.log(e);
      }
    },
    getTeacherList: async function(param){
      let listInfo = {};
      try {
        listInfo = await UTILS.getTeacherList(param);
        this.list = listInfo.data.data.teacher;
        if(this.list.length == 0){
          wx.showToast({
            title: '暂无数据',
            icon: 'none',
            duration: 2000
          });
        }
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
</style>
