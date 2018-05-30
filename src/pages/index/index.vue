<template>
  <div class="main">
    <div class="banner"><img src="http://api.zhituteam.com/upload/banner/banner.png"></div>
    <selectBar :isfixed="isFixed"></selectBar>
    <teacherItem :list="teacherList"></teacherItem>
  </div>
</template>

<script>
import teacherItem from '@/components/teacher-item'
import selectBar from '@/components/select-bar'

export default {
  data () {
    return {
      teacherList: [
        {
          name: "王老师",
          age: "40岁",
          class: "三年级"
        },
        {
          name: "王老师",
          age: "40岁",
          class: "三年级"
        },
        {
          name: "王老师",
          age: "40岁",
          class: "三年级"
        },
        {
          name: "王老师",
          age: "40岁",
          class: "三年级"
        },
        {
          name: "王老师",
          age: "40岁",
          class: "三年级"
        },
        {
          name: "王老师",
          age: "40岁",
          class: "三年级"
        },
        {
          name: "王老师",
          age: "40岁",
          class: "三年级"
        },
      ],
      isFixed: false
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

  methods: {
    
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
