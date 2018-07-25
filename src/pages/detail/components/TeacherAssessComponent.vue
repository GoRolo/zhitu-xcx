<template lang="html">
  <div class="assess">
    <div class="assess-item">
      <img src="static/img/userlogo.png" alt="">
      <div class="info">
        <p class="phone">159xxxx9280 <span class="time">2017-10-20</span></p>
        <p class="student-info"><span>语文</span><span>初三</span><span>已学30课时</span></p>
        <p class="assess-content">老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好</p>
      </div>
    </div>
    <div class="assess-item">
      <img src="static/img/userlogo.png" alt="">
      <div class="info">
        <p class="phone">159xxxx9280 <span class="time">2017-10-20</span></p>
        <p class="student-info"><span>语文</span><span>初三</span><span>已学30课时</span></p>
        <p class="assess-content">老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好</p>
      </div>
    </div>
    <div class="assess-item">
      <img src="static/img/userlogo.png" alt="">
      <div class="info">
        <p class="phone">159xxxx9280 <span class="time">2017-10-20</span></p>
        <p class="student-info"><span>语文</span><span>初三</span><span>已学30课时</span></p>
        <p class="assess-content">老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好老师好</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherAssessComponent',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../utils/mixin';
  .assess {
    font-size: 0;
    .assess-item {
      padding: Rem(15) 0 Rem(15) Rem(35);
      position: relative;
      border-bottom: 1px solid #d8dded;
      img:nth-of-type(1) {
        width: Rem(20);
        height: Rem(20);
        border-radius: 100%;
        position: absolute;
        left: 0;
        top: Rem(15);
      }
      .info {
        font-size: Rem(13);
        color: #888;
        .phone {
          width: 100%;
          font-size: Rem(13);
          color: #7f8dc5;
          .time {
            float: right;
            color: #888;
          }
        }
        .student-info {
          margin: Rem(6) 0;
          span {
            margin-right: Rem(4);
          }
        }
        .assess-content {
          color: #333;
        }
      }
    }
  }
</style>
