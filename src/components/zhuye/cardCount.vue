<template>
  <el-row style="padding: 0 140px;margin-bottom: 20px">
    <el-col :span="6">
      <card/>
    </el-col>
    <el-col :span="6">
      <card/>
    </el-col>
    <el-col :span="6">
      <card/>
    </el-col>
    <el-col :span="6">
      <card/>
    </el-col>
  </el-row>
</template>

<!--卡片集合-->

<script>
import card from "@/components/zhuye/card";
export default {
  name: "cardCount",
  components:{
    card
  }
}
</script>

<style scoped>

</style>