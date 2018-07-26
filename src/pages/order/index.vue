<template lang="html">
  <div class="order" v-if="mainInfo.teacher">
    <TeacherInfoComponent :teacherDetail="mainInfo.teacher"></TeacherInfoComponent>
    <div>
      <input type="text" v-model="name" placeholder="您的姓名"/>
    </div>
    <div>
      <input type="number" v-model="phone" placeholder="电话号码"/>
    </div>
    <div class="btn" @click="orderTeacher">立即预约</div>
  </div>
</template>

<script>
import UTILS from "@/utils/api";
import TeacherInfoComponent from '../detail/components/TeacherInfoComponent.vue'
export default {
  name: 'order',
  data () {
    return {
      mainInfo: {},
      name: '',
      phone: ''
    }
  },
  mounted () {
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
    orderTeacher: async function(){
      const match = /^1[3|4|5|8][0-9]\d{4,8}$/;
      let name = this.name;
      let phone = this.phone;
      if (name === '') {
        wx.showToast({
          title: '姓名不能为空',
          icon: 'none',
          duration: 2000
        });
        return false;
      }
      if(!match.test(phone)){
        wx.showToast({
          title: '号码格式错误',
          icon: 'none',
          duration: 2000
        });
        return false;
      }
      let param = {
        phone: phone,
        name: name,
        'teacher_id': this.$root.$mp.query.id
      }
      let orderInfo = {};
      try {
        orderInfo = await UTILS.orderTeacher(param);
        if (orderInfo.data.error_code === 0) {
          wx.showToast({
            title: '预约成功',
            icon: 'success',
            duration: 2000
          });
        }else{
          wx.showToast({
            title: orderInfo.data.message,
            duration: 2000
          });
        }
      } catch(e) {
        console.log(e);
      }
    }
  },
  components: { TeacherInfoComponent }
}
</script>

<style lang="scss">
  @import '../../utils/mixin';
  input {
    padding: Rem(8);
    margin: Rem(15);
    border: 1px solid #d8dded;
    font-size: Rem(14);
    border-radius: Rem(4);
  }
  .btn {
    background-color: #52c644;
    padding: Rem(10);
    margin: Rem(15);
    border-radius: Rem(4);
    color: #fff;
    text-align: center;
    font-size: Rem(14);
  }
</style>
