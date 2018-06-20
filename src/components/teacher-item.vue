<template>
  <div class="teacher-list">
    <template v-for="(item, index) in list">
      <div class="teacher-item" v-on:click="jumpDetail(item)">
        <img :src="item.image">
        <p><span class="name">{{item.realname}}</span><span class="teach-times">授课{{ item.teach_time }}分钟</span></p>
        <p><span class="teach-years">{{item.teach_year}}年教龄</span></p>
        <p><span v-for="(subtag, subtagindex) in item.subject" class="sub-tag">{{subtag.label}}</span><span v-for="(gradetag, gradeindex) in item.grade" class="grade-tag">{{gradetag.label}}</span></p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    jumpDetail: item => {
      wx.navigateTo({
        url: `/pages/detail/main?name=${item.name}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .teacher-item {
    padding: 15px 20px;
    position: relative;
    padding-left: 115px;
    min-height: 80px;
    border-bottom: 1px solid #f4f4f4;
    p:nth-of-type(1) {
      position: relative;
      top: -4px;
    }
    p:nth-of-type(3) {
      position: relative;
      top: 10px;
    }
    img {
      width: 80px;
      height: 80px;
      position: absolute;
      left: 20px;
      top: 15px;;
    }
    .name {
      font-size: 15px;
      color: #262323;
    }
    .teach-times {
      font-size: 13px;
      color: #888;
      float: right;
      margin-top: 4px;
    }
    .teach-years {
      font-size: 15px;
      color: #888;
    }
    .sub-tag {
      font-size: 12px;
      display: inline-block;
      padding: 0 4px;
      color: #fff;
      border-radius: 3px;
      background: #c11c3b;
      border: 1px solid #c11c3b;
      margin-right: 6px;
    }
    .grade-tag {
      font-size: 12px;
      display: inline-block;
      padding: 0 4px;
      border-radius: 3px;
      background-color: #f9e8eb;
      border: 1px solid #f9e8eb;
      color: #c11c3b;
      margin-right: 6px;
    }
  }
</style>
