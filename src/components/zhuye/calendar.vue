<template>
  <div id="test12">
    <el-calendar id="test13" v-model="value">
    </el-calendar>
  </div>
</template>

<!--日历-->

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "calendar",
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style scoped>

</style>
<style>
#test12 .el-calendar-table .el-calendar-day{
  margin-top: 0px;
  height: 37px;

}
#test12 .el-calendar-table{
  margin-top: -18px;
  text-align: center;
}
#test12 .el-calendar__title{
  margin-top: 7px;
  margin-bottom: -7px;
}
#test12 .el-calendar__button-group {
  margin-top: 7px;
  margin-bottom: -7px;
}
#test13{
  margin-top: 1px;
  width: 80%;
  background-color: #fff9f9;
  /*background-color: #f5f7f9;*/
}
#test12{
  margin-left: 50px;
}
</style>


