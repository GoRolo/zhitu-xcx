<template lang="html">
  <div class="teacher-item">
    <img :src="teacherDetail.image" alt="">
    <div class="teacher-info-text">
      <p class="detail">
        <span class="name">{{ teacherDetail.name }}</span>
        <template v-for="item in teacherDetail.subject" wx:key="item.id">
          <span class="sub-tag">{{ item.label }}</span>
        </template>
        <template v-for="item in teacherDetail.grade" wx:key="item.id">
          <span class="grade-tag">{{ item.label }}</span>
        </template>
        <span class="teach-times">{{ teacherDetail.price }}</span>
      </p>
      <p class="school">
        <template v-if="teacherDetail.source=='1'">
          <span>{{ teacherDetail.school }}</span>
        </template>
        <template v-if="teacherDetail.source=='2' || teacherDetail.source=='3'">
          <span>{{ teacherDetail.teach_year }}年教龄</span>
        </template>
      </p>
      <p class="accept">
        <template v-for="item in teacherDetail.extend_tag" wx:key="item.id">
          <span>{{ item.label }}</span>
        </template>
      </p>
      <i>已授课{{ teacherDetail.teach_time }}小时</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherInfoComponent',
  props: ['teacherDetail'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'static/css/mixin';
  .a,.teacher-item {
    background: #fff;
    height: Rem(110);
    padding-left: Rem(110);
    position: relative;
    margin-bottom: Rem(10);
    img:nth-of-type(1) {
      position: absolute;
      left: Rem(15);
      top: Rem(15);
      width: Rem(80);
      height: Rem(80);
    }
    .teacher-info-text {
      height: Rem(110);
      font-size: 0;
    }
    .detail {
      width: 100%;
      display: inline-block;
      margin-top: Rem(18);
      span {
        margin-left: Rem(4);
      }
      span:nth-of-type(1) {
        margin-left: 0;
      }
      .name {
        font-size: Rem(15);
        color: #262323;
      }
      .sub-tag {
        font-size: Rem(12);
        display: inline-block;
        padding: 0 Rem(4);
        color: #fff;
        border-radius: Rem(3);
        background: #52c644;
        border: 1px solid #52c644;
      }
      .grade-tag {
        font-size: Rem(12);
        display: inline-block;
        padding: 0 Rem(4);
        border-radius: Rem(3);
        border: 1px solid #097c25;
        color: #097c25;
      }
      .teach-times {
        font-size: Rem(13);
        color: #ee4034;
        float: right;
        margin-right: Rem(15);
      }
    }
    .school {
      margin-top: Rem(5);
      span {
        font-size: Rem(13);
        color: #888;
        margin-left: Rem(4);
      }
      span:nth-of-type(1) {
        margin-left: 0;
      }
    }
    .accept {
      position: absolute;
      bottom: Rem(15);
      span {
        font-size: Rem(13);
        color: #262323;
        margin-left: Rem(4);
        display: inline-block;
        padding-left: Rem(16);
        background-image: url('../../../../static/img/accept.png');
        background-repeat: no-repeat;
        background-size: Rem(15) Rem(15);
        background-position: Rem(0) Rem(2);
      }
      span:nth-of-type(1) {
        margin-left: 0;
      }
    }
    i {
      font-style: normal;
      font-size: Rem(13);
      color: #888;
      position: absolute;
      right: Rem(15);
      bottom: Rem(15);
    }
  }
</style>
