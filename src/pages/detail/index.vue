<template lang="html">
  <div class="teacher-detail" v-if="mainInfo.teacher">
    <TeacherInfoComponent :teacherDetail="mainInfo.teacher"></TeacherInfoComponent>
    <div class="info-box">
      <div class="assess-teacher-info" v-if="mainInfo.teacher.intro != ''">
        <p class="title introduce">个人简介</p>
        <div class="content">
          <p>{{ mainInfo.teacher.intro }}</p>
        </div>
      </div>
      <div class="assess-teacher-info" v-if="mainInfo.teacher.teacher_experience.length>0">
        <p class="title">教学经历</p>
        <div class="content">
          <template v-for="(item, index) in mainInfo.teacher.teacher_experience" wx:key="item.id">
            <p>{{ item.title }}</p>
          </template>
        </div>
      </div>
      <div class="assess-teacher-info" v-if="mainInfo.teacher.teacher_case.length>0">
        <p class="title reward">成功案例</p>
        <template v-for="(item, index) in mainInfo.teacher.teacher_case"  wx:key="item.id">
          <div class="content" :class="index==mainInfo.teacher.teacher_case.length-1?'':'teach-case-content'">
            <!--<p><span>{{ item.start_time }}</span> 至 <span>{{ item.end_time }}</span></p>-->
            <p class="teach-title">{{ item.title }}</p>
            <p>{{ item.content }}</p>
          </div>
        </template>
      </div>
    </div>
    <!-- <div class="assess-box assess-teacher-info">
      <p class="title">学生评价</p>
      <TeacherAssessComponent></TeacherAssessComponent>
    </div> -->
    <div class="order-line">
      <div class="order-text">
        满意就预约吧
      </div>
      <hr>
    </div>
    <div class="order-btn">
      <div class="btn" :class="mainInfo.teacher.is_collect == '1'? 'collected':'collect'" @click="collect"><span>
        {{ mainInfo.teacher.is_collect == '1'? '已收藏':'收藏' }}
      </span></div>
      <div class="btn order-now" :style="mainInfo.teacher.is_select == '1'?'background:#666':''" @click="course">
        {{ mainInfo.teacher.is_select == '1'? '已预约':'预约试讲' }}
      </div>
    </div>
  </div>
</template>

<script>
import UTILS from "@/utils/api";
import TeacherInfoComponent from './components/TeacherInfoComponent.vue'
import TeacherAssessComponent from './components/TeacherAssessComponent.vue'
export default {
  name: 'TeacherDetail',
  data () {
    return {
      mainInfo: {}
    }
  },
  mounted () {
    console.log(this.$root.$mp.query);
    this.getTeacherDetail(this.$root.$mp.query.id);
  },
  methods: {
    getTeacherDetail: async function(id){
      let mainInfo = {};
      try {
        mainInfo = await UTILS.getTeacherDetail(id);
        this.mainInfo = mainInfo.data.data;
      } catch(e) {
        console.log(e);
      }
    },
  },
  components: { TeacherInfoComponent, TeacherAssessComponent }
}
</script>

<style lang="scss">
  @import '../../../static/css/mixin';
  .info-box {
    background: #fff;
    padding: Rem(15) 0 Rem(7) 0;
    margin-bottom: Rem(10);
  }
  .assess-teacher-info {
    padding: 0 Rem(15);
    font-size: 0;
    .title {
      font-size: Rem(15);
      color: #262323;
      display: inline-block;
      padding-left: Rem(18);
      background-image: url('../../../static/img/detail_introduce.png');
      background-repeat: no-repeat;
      background-size: Rem(15) Rem(15);
      background-position: 0 Rem(2);
    }
    .introduce {
      background-image: url('../../../static/img/detail_teacher.png');
    }
    .reward {
      background-image: url('../../../static/img/detail_reward.png');
    }
    .content {
      padding: Rem(8) 0 Rem(8) Rem(15);
      font-size: Rem(13);
      color: #888;
    }
    .teach-title {
      font-size: Rem(13);
      color: #2b2b2b;
    }
    .teach-case-content {
      border-bottom: 1px solid #d8dded;
    }
  }
  .assess-box {
    background: #fff;
    .title {
      padding: Rem(15) 0 0 Rem(18);
      background-position: 0 Rem(18);
    }
  }
  .order-line {
    width: 60%;
    position: relative;
    margin: Rem(30) auto Rem(80) auto;
    hr {
      margin: 0;
      padding: 0;
      border-top: 1px solid #9e9c9c;
    }
    .order-text {
      color: #9e9c9c;
      position: absolute;
      top: Rem(-10);
      left: Rem(60);
      font-size: Rem(15);
      background: #fff;
      padding: 0 Rem(8);
    }
  }
  .order-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 0;
    .btn {
      display: inline-block;
      font-size: Rem(15);
      color: #fff;
      height: Rem(50);
      line-height: Rem(50);
      text-align: center;
    }
    .collect {
      width: 15%;
      background: #49a775;
      background-image: url('../../../static/img/detail_star_white.png');
      background-repeat: no-repeat;
      background-size: Rem(20) Rem(20);
      background-position: Rem(18) Rem(6);
      span {
        position: relative;
        top: Rem(12);
        font-size: Rem(13);
      }
    }
    .collected {
      width: 15%;
      background: #49a775;
      background-image: url('../../../static/img/detail_star_yellow.png');
      background-repeat: no-repeat;
      background-size: Rem(20) Rem(20);
      background-position: Rem(18) Rem(6);
      span {
        position: relative;
        top: Rem(12);
        font-size: Rem(13);
      }
    }
    .order-now {
      width: 85%;
      background: #2dc072;
    }
    .order-no{
      width: 85%;
      background: #666;
    }
  }
</style>
