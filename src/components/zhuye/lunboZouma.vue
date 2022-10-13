<template>
  <el-row>
    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" :span="16">
      <b-content/>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" :span="8">
      <calendar/>
    </el-col>
  </el-row>
</template>

<!--日历与走马灯的整合-->

<script>
import bContent from "@/components/zhuye/bobyContent"
import calendar from "@/components/zhuye/calendar"
export default {
  name: "lunboZouma",
  components:{
    // eslint-disable-next-line vue/no-unused-components
    bContent,
    // eslint-disable-next-line vue/no-unused-components
    calendar,
  }
}
</script>

<style scoped>

</style>