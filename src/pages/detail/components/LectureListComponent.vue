<template lang="html">
  <div class="lecture-list">
    <template v-for="item in lectureList">
      <div class="lecture-item" :class="item.status=='6'?'status-six':''">
        <p>
          <span class="name">老师:</span>
          <span>{{ item.teacher_name }}</span>
          <router-link :to="{ name: 'TeacherDetail', params: { id: item.teacher_id } }">
            <span class="status" v-if="item.status=='4'">查看教师详情</span>
          </router-link>
          <span v-if="item.status=='5'" class="status">已通过</span>
          <span v-if="item.status=='6'" class="status status-no">未通过</span>
        </p>
        <p><span class="name">试讲时间:</span><span>{{ item.start_time }}</span></p>
        <p><span class="name">试讲课程:</span><span>{{ item.course_info }}</span></p>
        <p class="btn-box" v-if="item.status=='4'">
          <span class="btn" @click="lectureAgree(item)">试讲通过</span>
          <span class="btn" @click="writeReason(item)">试讲不通过</span>
        </p>
      </div>
    </template>
  </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
  name: 'LectureListComponent',
  props: ['lectureList'],
  data () {
    return {}
  },
  methods: {
    lectureAgree (item) {
      this.axios({
        url: '/api/coursetrial/agree',
        methods: 'get',
        params: {
          id: item.id
        }
      }).then((res) => {
        let dataRes = res.data;
        if (dataRes.error_code === 0) {
          item.status = 5;
        }
      })
    },
    lectureDisAgree (item, reason) {
      let that = this;
      that.axios({
        url: '/api/coursetrial/disagree',
        methods: 'get',
        params: {
          id: item.id,
          reason: reason
        }
      }).then((res) => {
        let dataRes = res.data;
        if (dataRes.error_code === 0) {
          item.status = 6;
        }
      })
    },
    writeReason (item) {
      let that = this;
      MessageBox.prompt('请输入原因').then(({ value, action }) => {
        if (value === '') {
          Toast({
            message: '原因不能为空',
            position: 'middle',
            duration: 2000
          });
          return;
        }
        that.lectureDisAgree(item, value);
      });
    }
  },
  components: {}
}
</script>
<style scoped lang="scss">
  @import 'static/css/mixin';
  .lecture-item {
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
      .status-no {
        color: #888;
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
</style>
