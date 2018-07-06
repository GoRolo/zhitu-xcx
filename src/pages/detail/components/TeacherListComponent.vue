<template lang="html">
  <div class="teacher-list">
    <template v-for="item in teacherList">
      <router-link :to="{ name: 'TeacherDetail', params: { id: item.id } }">
        <div class="teacher-item">
          <img :src="item.image" alt="">
          <div class="teacher-info">
            <p class="detail">
              <span class="name">{{ item.name }}</span>
              <template v-for="sub in item.subject">
                <span class="sub-tag">{{ sub.label }}</span>
              </template>
              <template v-for="grade in item.grade">
                <span class="grade-tag">{{ grade.label }}</span>
              </template>
              <span class="teach-times">授课{{ item.teach_time }}小时</span>
            </p>
            <p class="school">
              <template v-if="item.source=='1'">
                <span>{{ item.school }}</span>
              </template>
              <template v-if="item.source=='2' || item.source=='3'">
                <span>{{ item.teach_year }}年教龄</span>
              </template>
            </p>
            <p class="accept">
              <template v-for="item in item.extend_tag">
                <span>{{ item.label }}</span>
              </template>
            </p>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TeacherListComponent',
  props: ['teacherList'],
  data () {
    return {

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  @import 'static/css/mixin';
  .teacher-item {
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
    .teacher-info {
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
        color: #888;
        float: right;
        margin-right: Rem(15);
        margin-top: Rem(4);
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
  }
</style>
