<template lang="html">
  <div class="course-list">
    <template v-for="item in courseList">
      <div class="course-item">
        <p><span class="name">老师:</span><span>{{ item.teacher_name }}</span>
          <router-link :to="{ name: 'TeacherDetail', params: { id: item.teacher_id } }">
            <span class="status" v-if="item.status == '1'">查看教师详情</span>
          </router-link>
          <span class="status" v-if="item.status == '2'">立即评价</span>
        </p>
        <p><span class="name">讲课内容:</span><span>{{ item.course_info }}</span></p>
        <p><span class="name">下次授课:</span><span>{{ item.start_time }}</span></p>
        <p>
          <span class="name">上课进度:</span>
          <span>{{ item.finish_num }}/{{ item.all_num }}</span>
          <span class="couese-detail" @click="showDetail(item)">课程详情</span>
        </p>
        <div class="detail" v-if="item.isShowDetail">
          <template v-for="(courseitem, index) in item.child">
            <div class="course-detail" :class="courseitem.status == '2'?'couese-item-bg':''">
              <p>
                <span class="num" :class="courseitem.status == '2'?'num-ok':''">{{ index+1 }}</span>
                <span class="time" :class="courseitem.status == '2'?'time-ok':''">{{ courseitem.start_time }}</span>
                <span class="course-status" :class="courseitem.status == '2'?'time-ok':''" v-if="courseitem.status == '2'">已完成</span>
                <span class="course-status" :class="courseitem.status == '2'?'time-ok':''" v-if="courseitem.status == '1'">未开始</span>
              </p>
              <p class="course-btn">
                <span class="btn-item" :class="courseitem.plan !==''?'item-bg':''" @click="showPlan(courseitem)">课前预习</span>
                <span @click="showSummary(courseitem)" class="btn-item item-middle" :class="courseitem.summary !==''?'item-bg':''">课后总结</span>
                <span @click="showQuestion(courseitem)" class="btn-item" :class="courseitem.question !==''?'item-bg':''">课后作业</span>
              </p>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
  name: 'CourseListComponent',
  props: ['courseList'],
  data () {
    return {}
  },
  methods: {
    showDetail (item) {
      if (item.child.length === 0) {
        Toast({
          message: '没内容',
          position: 'middle',
          duration: 1000
        });
        return false;
      }
      item.isShowDetail = !item.isShowDetail;
    },
    showPlan (item) {
      if (item.plan !== '') {
        MessageBox.alert(item.plan, '课前预习');
      } else {
        Toast({
          message: '没内容',
          position: 'middle',
          duration: 2000
        })
      }
    },
    showSummary (item) {
      if (item.summary !== '') {
        MessageBox.alert(item.summary, '课后总结');
      } else {
        Toast({
          message: '没内容',
          position: 'middle',
          duration: 2000
        })
      }
    },
    showQuestion (item) {
      if (item.question !== '') {
        MessageBox.alert(item.question, '课后作业');
      } else {
        Toast({
          message: '没内容',
          position: 'middle',
          duration: 2000
        })
      }
    }
  },
  components: {}
}
</script>
<style lang="scss">
  @import 'static/css/mixin';
  .mint-msgbox-content {
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
    position: relative;
    min-height: 0;
  }
  .mint-msgbox-message {
    color: #8e8d8d;
    margin: 0;
    text-align: left;
    line-height: Rem(24);
  }
  .mint-msgbox-btn {
    font-size: Rem(14);
  }
</style>
<style scoped lang="scss">
  @import 'static/css/mixin';
  .course-item {
    margin-top: Rem(10);
    padding: Rem(15);
    background: #fff;
    p {
      font-size: Rem(15);
      padding: Rem(4) 0;
      .name {
        color: #8e8d8d;
        display: inline-block;
        width: Rem(80);
        text-align: left;
      }
      .status {
        color: #2ea141;
        float: right;
      }
    }
    .btn-box {
      margin-top: Rem(8);
      font-size: 0;
      .btn {
        margin-right: Rem(10);
        display: inline-block;
        width: Rem(160);
        height: Rem(50);
        text-align: center;
        line-height: Rem(50);
        border: 1px solid #2ea141;
        font-size: Rem(15);
        border-radius: Rem(50);
        color: #2ea141;
      }
      .btn-selected {
        background: #2ea141;
        color: #fff;
      }
    }
  }
  .status-six {
    background: #e7e7e7;
  }
  .couese-detail {
    color: #2ea141;
    float: right;
  }
  .couese-item-bg {
    background: #f5f5f5;
  }
  .course-detail {
    padding: Rem(10) 0;
    .num {
      display: inline-block;
      width: Rem(20);
      height: Rem(20);
      background-color: #2ea141;
      text-align: center;
      line-height: Rem(20);
      color: #fff;
      border-radius: 100%;
    }
    .num-ok {
      background: #cccccc;
    }
    .time {
      margin-left: Rem(6);
    }
    .time-ok {
      color: #999999;
    }
    .course-status {
      float: right;
    }
    .course-btn {
      font-size: 0;
      .btn-item {
        font-size: Rem(14);
        width: 30%;
        background: #cccccc;
        display: inline-block;
        text-align: center;
        height: Rem(40);
        color: #fff;
        line-height: Rem(40);
      }
      .item-middle {
        margin: 0 5%;
      }
      .item-bg {
        background: #2ebd51;
      }
    }
  }
</style>
